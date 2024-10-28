'use client'
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from "@/app/images/Avatar.svg";
import Fechar from "@/app/images/Fechar.svg";

import styles from "./Header.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Header(props: HeaderProps) {
  const {items} = props;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderDesktopHeader = () => {
    return (
      <span className={styles.userNameContainer}>
        <span className={styles.userName}>Joana da Silva Oliveira</span>
        <Image src={Avatar} alt='Avatar' height={40} width={40}/>
      </span>
    );
  }

  const renderMobileHeader = () => {
    return (
      <div className={styles.mobileHeaderContainer}>
        <IconButton onClick={() => setIsMenuOpen(true)}>
          <MenuIcon className={styles.menuIcon}/>
        </IconButton>
        <Image src={Avatar} alt='Avatar' height={40} width={40}/>
      </div>
    );
  }

  const renderMobileMenu = () => {
    return (
      <div className={styles.mobileMenuContainer} onClick={() => setIsMenuOpen(false)}>
        <div className={styles.mobileMenu}>
          <span className={styles.closeButton}>
            <Image 
              src={Fechar}
              alt='Fechar'
              height={16}
              width={16}
            />
          </span>
          {items.map((item) => (
            <a className={cn({[styles.itemSelected]: item.selected}, styles.menuItem)} href={item.route}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const getHeader = () => {
    if (window.screen.width <= 425) {
      return renderMobileHeader();
    }

    return renderDesktopHeader();
  }

  return (
    <div id='header' className={cn(styles.header, globalStyles.borderTest)}>
      <div className={styles.headerGrid}>
        {getHeader()}
      </div>
      {isMenuOpen && renderMobileMenu()}
    </div>
  );
}

interface HeaderProps {
  items: {
    title: string;
    route: string;
    selected: boolean;
  }[];
}