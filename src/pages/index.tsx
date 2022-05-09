import React, { useState } from 'react'
// import { NextSeo } from 'next-seo'

// import styles from "./styles.module.scss";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// import Mainvisual from '@/components/organisms/Index/Mainvisual'
// import Vision from '@/components/organisms/Index/Vision'
// import Company from '@/components/organisms/Index/Company'
// import Access from '@/components/organisms/Index/Access'
// import News from '@/components/organisms/Index/News'
// import Contact from '@/components/organisms/Index/Contact'

// const description =
//   "SOMPO Light Vortexは、可能性に向き合い、誰もが想像しなかった未来を創造するデジタル・バリュー・トランスフォーメーション集団です。";
const Home = () => {
  const [showProducts, setShowProducts] = useState<boolean>(false)
  // const closeModal = () => {
  //   if (showProducts) {
  //     setShowProducts(false);
  //   }
  // };

  return (
    <>
      <Header showProducts={showProducts} setShowProducts={setShowProducts} isAnkerLink={true} />
      <h1>トップページ</h1>
      <Footer />
      {/* <NextSeo
        description={description}
        openGraph={{
          url: process.env.NEXT_APP_DOMAIN,
          description: description,
        }}
        twitter={{
          site: process.env.NEXT_APP_DOMAIN,
        }}
      />
      <div className={styles.root}>
        <Header showProducts={showProducts} setShowProducts={setShowProducts} isAnkerLink={true} />
        {showProducts && <div className={styles.darken} onClick={closeModal}></div>}
        <div className={styles.container}>
          <section className={styles.mv}>
            <Mainvisual showProducts={showProducts} setShowProducts={setShowProducts} />
          </section>
          <section id="vision" className={styles.vision}>
            <Vision />
          </section>
          <section className={styles.company} id="company">
            <Company />
          </section>
          <section className={styles.access} id="access">
            <Access />
          </section>
          <section className={styles.access} id="news">
            <News />
          </section>
          <section className={styles.contact} id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div> */}
    </>
  )
}

export default Home
