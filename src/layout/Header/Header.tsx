import {Link} from 'react-router-dom';
import {
  baseTheme,
  Container,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import {CartButton} from '@components/cart-button';
import classes from './Header.module.scss';
import {SunIcon} from '@chakra-ui/icons';

const Header = () => {
  const {toggleColorMode} = useColorMode();

  return (
    <Container maxW={baseTheme.breakpoints.lg} className={classes.header}>
      <Link to="/">
        <Heading size="lg" className={classes.title}>
          React Cart
        </Heading>
      </Link>
      <div className={classes.tools}>
        <IconButton
          isRound
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
          icon={<SunIcon />}
        />
        <CartButton />
      </div>
    </Container>
  );
};

export default Header;
