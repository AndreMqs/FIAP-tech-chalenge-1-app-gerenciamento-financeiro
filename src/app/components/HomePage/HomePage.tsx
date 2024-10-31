'use client'
import dynamic from 'next/dynamic';

const HeaderHomePage = dynamic(() => import('./HeaderHomePage/HeaderHomePage'), { ssr: false });
const ContentHomePage = dynamic(() => import('./ContentHomePage/ContentHomePage'), { ssr: false });
import FooterHomePage from './FooterHomePage/FooterHomePage';

import styles from "./HomePage.module.scss"


export default function HomePage(props: HomePageProps) {
  const {} = props;

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <HeaderHomePage />
      <ContentHomePage />
      <FooterHomePage />
    </div>
  );
}

interface HomePageProps {
}