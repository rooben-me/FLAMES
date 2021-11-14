import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import Head from "next/head";
import splitbee from "@splitbee/web";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  splitbee.init();
  return (
    <>
      <Head>
        <title>FLAMES Game - Love Calculator online</title>
        <meta name="title" content="FLAMES Game - Love Calculator online" />
        <meta
          name="description"
          content="FLAMES stands for - Friends, Lover, Affection, Marriage, Enemy, Sister. If you are in love with someone, and if you would like to test the love compatibility between him/her then take this Love Flames Game online test. Just enter your name and your partner names and then click on FLAMES. Take FLAMES test with love calculator online to know what kind of relationship you will fall with the other person"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="FLAMES Game - Love Calculator online"
        />
        <meta
          property="og:description"
          content="FLAMES stands for - Friends, Lover, Affection, Marriage, Enemy, Sister. If you are in love with someone, and if you would like to test the love compatibility between him/her then take this Love Flames Game online test. Just enter your name and your partner names and then click on FLAMES. Take FLAMES test with love calculator online to know what kind of relationship you will fall with the other person"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="FLAMES Game - Love Calculator online"
        />
        <meta
          property="twitter:description"
          content="FLAMES stands for - Friends, Lover, Affection, Marriage, Enemy, Sister. If you are in love with someone, and if you would like to test the love compatibility between him/her then take this Love Flames Game online test. Just enter your name and your partner names and then click on FLAMES. Take FLAMES test with love calculator online to know what kind of relationship you will fall with the other person"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>'
        <script async src="https://cdn.splitbee.io/sb.js"></script>'
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
