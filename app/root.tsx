import { FC, ReactNode } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import { ChakraProvider } from '@chakra-ui/react';
<<<<<<< HEAD
import { theme } from './theme/theme'
import styles from '../public/styles.css'

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
=======
import { theme } from './theme/theme';
>>>>>>> 8bf8ae9d8ae75e89ef679dc3ad739596b83c9c3f

export const meta: MetaFunction = () => {
  return { title: 'HyvesTune' };
};

const Document: FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws uncaught errors.
            The file is at <code>app/root.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
