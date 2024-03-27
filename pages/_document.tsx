import { Html, Head, Main, NextScript } from "next/document";
import { Route, Switch } from "wouter";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
