'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { IconButton } from "@mui/material";

import Logo from "@/app/images/Logo.svg";
import LogoIcon from "@/app/images/LogoIcon.svg";
import MenuIcon from '@mui/icons-material/Menu';

import styles from "./HeaderHomePage.module.scss"


export default function HeaderHomePage() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const goToInit = () => {
    window.location.href = "/inicio";
  }

  const getLogo = () => {
    if (screenWidth > 768 || screenWidth <= 425) {
      return Logo;
    }

    return LogoIcon;
  }

  const getBtnOpenAccountText = () => {
    if (screenWidth > 768) {
      return 'Abrir minha conta';
    }

    return 'Abrir Conta';
  }

  const renderDesktopHeader = () => {
    return (
      <>
        <div className={styles.logoAndLinks}>
          <a href="/home">
            <Image
              src={getLogo()}
              alt="logo"
              className={styles.logo}
            />
          </a>
          <div className={styles.links}>
            <a className={styles.link} href="">Sobre</a>
            <a className={styles.link} href="">Serviços</a>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={cn(styles.button, styles.btnOpenAccount)}>{getBtnOpenAccountText()}</button>
          <button className={cn(styles.button, styles.btnLogin)} onClick={goToInit}>Já tenho conta</button>
        </div>
      </>
    );
  }

  const renderMobileHeader = () => {
    return (
      <>
        <IconButton>
          <MenuIcon className={styles.menuIcon}/>
        </IconButton>
        <Image
          src={getLogo()}
          alt="logo"
          className={styles.logo}
        />
      </>
    );
  }

  const renderHeader = () => {
    if (screenWidth <= 425) {
      return renderMobileHeader();
    }

    return renderDesktopHeader();
  }

  return (
    <div id='headerContainer' className={styles.headerContainer}>
      {renderHeader()}
    </div>
  );
}