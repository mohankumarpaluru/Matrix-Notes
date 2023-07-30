import { Html, Head, Main, NextScript } from 'next/document'
import CurrentDate from '../components/misc/CurrentDate'; 

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        CurrentDate
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
