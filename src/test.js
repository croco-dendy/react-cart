/* eslint-disable */
import axios from 'axios';
import $ from 'jquery';
import BaseMoveController from './base_move_controller';

export default class extends BaseMoveController {
  static targets = ['task', 'subject', 'root', 'table', 'placeholder'];
  downActionID = 'tasks#down';
  upActionID = 'tasks#up';
  targetElementID = 'tasks.task';

  connect() {
    this.checkTaskMoveAvailability();
    this.afterMove();
  }

  checkTaskMoveAvailability() {
    let controller = this;
    $('table tbody tr').each(function (row) {
      if ($(this).prev().length === 0)
        $(this)
          .find('a[data-action="' + controller.upActionID + '"]')
          .css({ opacity: 0.6, 'pointer-events': 'none' });
      if ($(this).next().length === 0)
        $(this)
          .find('a[data-action="' + controller.downActionID + '"]')
          .css({ opacity: 0.6, 'pointer-events': 'none' });
    });
  }

  swapRows(first, second, sendRequest = true) {
    this.swapInProgress = true;
    first.classList.add('moving-down');
    second.classList.add('moving-up');

    let swapTimeout = setTimeout(() => {
      this.clearMovingRowsClass(first, second);
      if (second.previousSibling === first)
        second.parentNode.insertBefore(second, first);
      swapTimeout = null;
      this.resetMovingLinkCss(first, second);
      this.disableMovingToOtherSection(first, second);
    }, 300);

    if (!sendRequest) {
      this.swapInProgress = false;
      return;
    }

    const path = second.dataset.taskPath;
    axios
      .patch(path, { direction: 'up' })
      .then(() => (this.swapInProgress = false))
      .catch(() => {
        if (swapTimeout)
          setTimeout(() => this.swapRows(second, first, false), 300);
        else this.swapRows(second, first, false);
      });
  }

  move(element, position) {
    // move element
    if (position === 'bottom') this.rootTarget.append(element);
    if (position === 'top') this.rootTarget.prepend(element);

    this.afterMove();

    const path = element.dataset.taskPath;

    const params = { subject: this.data.get('subject'), position: position };
    axios.patch(path, params).then(() => {
      console.log('subject OK');
    });
  }

  afterMove() {
    if (this.taskTargets.length === 0) {
      this.tableTarget.classList.add('hidden');
      this.placeholderTarget.classList.remove('hidden');
    } else {
      this.tableTarget.classList.remove('hidden');
      this.placeholderTarget.classList.add('hidden');
    }
  }

  up(event) {
    if (this.swapInProgress) return;
    const currentRow = event.target.closest(
      '[data-target="' + this.targetElementID + '"]'
    );
    const upperRow = currentRow.previousSibling;

    if (upperRow != null) {
      // swap elements
      this.swapRows(upperRow, currentRow);
    } else {
      const subjectIndex = this.data.get('subjectIndex');

      if (subjectIndex > 0) {
        const otherController = this.application.getControllerForElementAndIdentifier(
          document.getElementsByClassName('subject-' + (subjectIndex - 1))[0],
          'tasks'
        );
        otherController.context.controller.move(currentRow, 'bottom');

        this.afterMove();
      }
    }
  }

  down(event) {
    if (this.swapInProgress) return;
    const currentRow = event.target.closest(
      '[data-target="' + this.targetElementID + '"]'
    );
    const lowerRow = currentRow.nextSibling;

    if (lowerRow != null) {
      this.swapRows(currentRow, lowerRow);
    } else {
      const subjectIndex = this.data.get('subjectIndex');
      const className = 'subject-' + (Number(subjectIndex) + 1);

      const otherController = this.application.getControllerForElementAndIdentifier(
        document.getElementsByClassName(className)[0],
        'tasks'
      );
      if (otherController == null) return;

      otherController.context.controller.move(currentRow, 'top');
      this.afterMove();
    }
  }
}
