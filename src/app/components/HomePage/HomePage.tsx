import FooterHomePage from '../FooterHomePage/FooterHomePage';
import HeaderHomePage from '../HeaderHomePage/HeaderHomePage';

import styles from "./HomePage.module.scss"


export default function HomePage(props: HomePageProps) {
  const {} = props;

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <HeaderHomePage />
      <FooterHomePage />
    </div>
  );
}

interface HomePageProps {
}