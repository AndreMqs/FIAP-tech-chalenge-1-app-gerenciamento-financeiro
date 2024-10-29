'use client'
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

import Eye from "@/app/images/Eye.svg";
import Saldo from "@/app/images/SaldoBackground.svg";

import { parseDateString } from "@/app/utils/dateUtils";

import styles from "./Summary.module.scss"
import { parseMoneyValue } from "@/app/utils/stringUtils";


export default function Summary(props: SummaryProps) {
  const {username, money} = props;
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const date = new Date();

  const getMoneyValue = () => {
    if (isBalanceVisible) {
      return parseMoneyValue(money);
    }

    return '.';
  }

  const renderTitle = () => {
    return (
      <div className={styles.summaryTitle}>
        <span className={styles.userName}>
          {`Olá, ${username}! :)`}
        </span>
        <span className={styles.date}>
          {parseDateString(date)}
        </span>
      </div>
    );
  }

  const renderMoney = () => {
    return (
      <div className={styles.moneyContainer}>
        <span className={styles.moneyHeader}>
          <span className={styles.balance}>
            Saldo
          </span>
          <Image 
            src={Eye}
            alt='eye'
            height={20}
            width={20}
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
          />
        </span>
        <span className={styles.balanceContainer}>
          <span className={styles.accountType}>
            Conta Corrente
          </span>
          <span className={cn(styles.moneyText, {[styles.hideMoney]: !isBalanceVisible})}>
            {getMoneyValue()}
          </span>
        </span>
      </div>
    );
  }

  const renderImage = () => {
    return (
      <div className={styles.saldoImgContainer}>
        <Image 
          src={Saldo}
          alt=""
        />
      </div>
    );
  }

  return (
    <div id='summary' className={styles.summaryContainer}>
      {renderTitle()}
      {renderMoney()}
      {renderImage()}
    </div>
  );
}

interface SummaryProps {
  username: string;
  money: number;
}