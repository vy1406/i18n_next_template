import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {

  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" ? (
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
        ) : (
          <meta name="robots" content="noindex" />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>

      </head>
      <body>{children}</body>
    </html>
  );
}
