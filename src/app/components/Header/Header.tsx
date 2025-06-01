'use client'
import { useState, useRef, useEffect } from 'react';
import { isNil } from 'lodash';
import cn from 'classnames';
import Image from 'next/image';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from "@/app/images/Avatar.svg";
import Fechar from "@/app/images/Fechar.svg";

import styles from "./Header.module.scss"


export default function Header(props: HeaderProps & { onMenuClick?: (title: string) => void }) {
  const {items, onMenuClick} = props;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isUserMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isUserMenuOpen]);

  const handleLogout = () => {
    window.location.href = '/home';
  };

  const renderDesktopHeader = () => {
    return (
      <span className={styles.userNameContainer}>
        <span className={styles.userName}>Joana da Silva Oliveira</span>
        <span style={{position: 'relative'}}>
          <Image src={Avatar} alt='Avatar' height={40} width={40} style={{cursor: 'pointer'}} onClick={() => setIsUserMenuOpen((v) => !v)} />
          {isUserMenuOpen && (
            <div className={styles.userMenu} ref={userMenuRef}>
              <button className={styles.logoutButton} onClick={handleLogout}>Sair</button>
            </div>
          )}
        </span>
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
            <a 
              key={item.title}
              className={cn({[styles.itemSelected]: item.selected}, styles.menuItem)} 
              href={item.route}
              onClick={e => {
                if (onMenuClick) {
                  e.preventDefault();
                  onMenuClick(item.title);
                  setIsMenuOpen(false);
                }
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const getHeader = () => {
    if (typeof window !== "undefined" && window.screen.width <= 425) {
      return renderMobileHeader();
    }

    return renderDesktopHeader();
  }

  return (
    <div id='header' className={styles.header}>
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