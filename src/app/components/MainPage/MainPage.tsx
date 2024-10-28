import cn from 'classnames';
import { useCallback } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Summary from '../Summary/Summary';
import NewTransaction from '../NewTransaction/NewTransaction';
import Statement from '../Statement/Statement';

import styles from "./MainPage.module.scss"


export default function MainPage(props: MainPageProps) {
  const {} = props;

  const menuItems = [
    {
      title: 'Início',
      route: '/inicio',
      selected: true,
    },
    {
      title: 'Transferências',
      route: '/inicio',
      selected: false,
    },
    {
      title: 'Investimentos',
      route: '/inicio',
      selected: false,
    },
    {
      title: 'Outros serviços',
      route: '/home',
      selected: false,
    },
  ];

  const renderMiddleContent = useCallback(() => {
    return (
      <div id='middleContentContainer' className={cn(styles.middleContentContainer, styles.borderTest)}>
        <Summary/>
        <NewTransaction/>
      </div>
    );
  }, [styles]);

  return (
    <div id='mainContainer' className={cn(styles.flexColumnCenterContainer)}>
      <Header items={menuItems}/>
      <div id='mainContentContainer' className={cn(styles.mainContentContainer, styles.borderTest)}>
        <Menu items={menuItems}/>
        {renderMiddleContent()}
        <Statement />
      </div>
    </div>
  );
}

interface MainPageProps {
}