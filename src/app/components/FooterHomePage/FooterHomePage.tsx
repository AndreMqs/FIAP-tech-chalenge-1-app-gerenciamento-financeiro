'use client'
import Image from "next/image";
import cn from "classnames";

import LogoWhite from "@/app/images/LogoWhite.svg";
import Intagram from "@/app/images/Instagram.svg";
import WhatsApp from "@/app/images/WhatsApp.svg";
import Youtube from "@/app/images/Youtube.svg";

import styles from "./FooterHomePage.module.scss"


export default function FooterHomePage() {

  const goToInit = () => {
    window.location.href = "/inicio";
  }

  return (
    <div id='footerContainer' className={styles.footerContainer}>
      <div className={styles.links}>
        <span className={styles.linkHeader}>Serviços</span>
        <span className={styles.singleLink}>Conta corrente</span>
        <span className={styles.singleLink}>Conta PJ</span>
        <span className={styles.singleLink}>Cartão de crédito</span>
      </div>

      <div className={styles.links}>
        <span className={styles.linkHeader}>Contato</span>
        <span className={styles.singleLink}>0800 004 250 08</span>
        <span className={styles.singleLink}>meajuda@bytebank.com.br</span>
        <span className={styles.singleLink}>ouvidoria@bytebank.com.br</span>
      </div>
      
      <div className={styles.logoLinks}>
        <span className={styles.linkHeader}>Desenvolvido por Alura</span>
        <span>
          <Image
            src={LogoWhite}
            alt="logo"
            className={styles.logo}
          />
        </span>
        <div className={styles.icons}>
          <span>
            <Image
              src={Intagram}
              alt="logo"
              className={styles.logo}
            />
          </span>
          <span>
            <Image
              src={WhatsApp}
              alt="logo"
              className={styles.logo}
            />
          </span>
          <span>
            <Image
              src={Youtube}
              alt="logo"
              className={styles.logo}
            />
          </span>
        </div>
      </div>
    </div>
  );
}