'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import RegisterModal from './RegisterModal/RegisterModal';
import LoginModal from './LoginModal/LoginModal';

const HeaderHomePage = dynamic(() => import('./HeaderHomePage/HeaderHomePage'), { ssr: false });
const ContentHomePage = dynamic(() => import('./ContentHomePage/ContentHomePage'), { ssr: false });
import FooterHomePage from './FooterHomePage/FooterHomePage';

import styles from "./HomePage.module.scss"

export default function HomePage(props: HomePageProps) {
  const {} = props;

  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };
  const handleCloseRegister = () => setOpenRegister(false);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <HeaderHomePage onOpenRegister={handleOpenRegister} onOpenLogin={handleOpenLogin} />
      <ContentHomePage onOpenRegister={handleOpenRegister} onOpenLogin={handleOpenLogin} />
      <FooterHomePage />
      <RegisterModal open={openRegister} onClose={handleCloseRegister} />
      <LoginModal open={openLogin} onClose={handleCloseLogin} onOpenRegister={handleOpenRegister} />
    </div>
  );
}

interface HomePageProps {
}