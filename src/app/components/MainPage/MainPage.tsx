"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Header = dynamic(() => import("../Header/Header"), { ssr: false });
import Menu from "../Menu/Menu";
import Summary from "../Summary/Summary";
const NewTransaction = dynamic(
  () => import("../NewTransaction/NewTransaction"),
  { ssr: false }
);
const Investments = dynamic(() => import("../Investments/Investments"), {
  ssr: false,
});
import Statement from "../Statement/Statement";
const OtherServices = dynamic(() => import('../OtherServices/OtherServices'), { ssr: false });

import styles from "./MainPage.module.scss";

export default function MainPage(props: MainPageProps) {
  const user = {
    name: "Joana",
    money: 2500,
  };

  const [selectedMenu, setSelectedMenu] = useState("Início");

  const menuItems = [
    {
      title: "Início",
      route: "/inicio",
      selected: selectedMenu === "Início",
    },
    {
      title: "Transferências",
      route: "/inicio",
      selected: selectedMenu === "Transferências",
    },
    {
      title: "Investimentos",
      route: "/inicio",
      selected: selectedMenu === "Investimentos",
    },
    {
      title: "Outros serviços",
      route: "/home",
      selected: selectedMenu === "Outros serviços",
    },
  ];

  function mainContent() {
    switch (selectedMenu) {
      case "Investimentos":
        return <Investments />;
      case "Outros serviços":
        return <OtherServices />;
      default:
        return <NewTransaction />;
    }
  }

  const renderMiddleContent = () => {
    return (
      <div
        id="middleContentContainer"
        className={styles.middleContentContainer}
      >
        <Summary username={user.name} money={user.money} />
        {mainContent()}
      </div>
    );
  };

  return (
    <div id="mainContainer" className={styles.flexColumnCenterContainer}>
      <Header items={menuItems} onMenuClick={setSelectedMenu} />
      <div id="mainContentContainer" className={styles.mainContentContainer}>
        <Menu items={menuItems} onMenuClick={setSelectedMenu} />
        {renderMiddleContent()}
        <Statement />
      </div>
    </div>
  );
}

interface MainPageProps {}
