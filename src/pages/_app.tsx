import React from 'react'
import { AppProps } from 'next/app'
// import "react-app-polyfill/ie11";
// import { DefaultSeo } from "next-seo";

// import "../App.scss";
// import "../index.scss";
// import og01 from "@/images/org/og01.jpg";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <DefaultSeo
        titleTemplate="%s | SOMPO Light Vortex"
        defaultTitle="SOMPO Light Vortex"
        twitter={{
          cardType: "summary_large_image",
          site: process.env.REACT_APP_URL,
        }}
        openGraph={{
          type: "website",
          locale: "ja_JP",
          url: process.env.REACT_APP_URL,
          site_name: `SOMPO Light Vortex`,
          images: [
            {
              url: og01,
            },
          ],
        }}
      /> */}
      <Component {...pageProps} />
    </>
  )
}

export default App
