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
      <Header/>
      <div id='mainContentContainer' className={cn(styles.mainContentContainer, styles.borderTest)}>
        <Menu />
        {renderMiddleContent()}
        <Statement />
      </div>
    </div>
  );
}

interface MainPageProps {
}