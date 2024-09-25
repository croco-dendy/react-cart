import './index.scss';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {queryClient} from '@queries/queryClient';
import {QueryClientProvider} from '@tanstack/react-query';
import {theme} from '@utils';
import {router} from '@routes';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
