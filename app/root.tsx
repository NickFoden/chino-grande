import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/global.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export const meta: MetaFunction = () => {
  return {
    title: "Chino Grande",
    description: "A cozy neighborhood restaurant and karaoke saloon.",
    "og:image": "https://chinograndenyc.com/look_back_ac-bu.png",
    "og:title": "Chino Grande",
    "og:type": "website",
    "og:url": "https://chinograndenyc.com/",
    "twitter:description": "A cozy neighborhood restaurant and karaoke saloon.",
    "twitter:image": "https://chinograndenyc.com/look_back_ac-bu.png",
    "twitter:title": "Chino Grande",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === "development" ? null : (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-94DRQL9KWG"
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-94DRQL9KWG', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
