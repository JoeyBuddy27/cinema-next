import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from '../lib/posts'

import Navigation from "../components/Navigation";
import HomeSlider from '../components/HomeSlider';
import TopFilms from '../components/TopFilms';
import SpotlightBanner from "../components/SpotlightBanner";
import Offers from '../components/Offers';
import Footer from "../components/Footer";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section className={utilStyles.headingMd}>
    //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus perferendis, soluta accusantium earum possimus molestiae voluptatem, quidem rem ipsum quod id, ducimus ipsa facilis cumque rerum odit ut. Necessitatibus, obcaecati!
    //     Sapiente deleniti non perferendis consectetur unde, rerum in ducimus provident, minima aperiam delectus voluptate quisquam blanditiis distinctio illum commodi molestias ipsam, eum odit adipisci autem architecto optio vero! Error, eaque.
    //    oluptatibus voluptatem eum totam deserunt recusandae architecto magnam, aperiam tempore hic laudantium! Dolor illum perferendis est eveniet placeat magnam, laudantium accusamus reprehenderit, laborum exercitationem, pariatur quod? Recusandae?</p>
    //     <p>
    //       (This is a sample website - you’ll be building a site like this on{' '}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //   </section>

    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Blog</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className={utilStyles.listItem} key={id}>
    //           {title}
    //           <br />
    //           {id}
    //           <br />
    //           {date}
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
    <div className={styles.container}>
    <Navigation />
    <HomeSlider />
    <TopFilms />
    <SpotlightBanner />
    <Offers/>
    <Footer />
    </div>
  )
}