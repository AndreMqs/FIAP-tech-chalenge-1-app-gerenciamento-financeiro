'use client'
import { useState } from 'react';

import Select from '../Select/Select';
import Image from 'next/image';

import TransactionBG from "@/app/images/TransactionBackground.svg";


import styles from "./NewTransaction.module.scss"


export default function NewTransaction(props: NewTransactionProps) {
  const transactionOptions = [
    'Câmbio de Moeda',
    'DOC/TED',
    'Empréstimo e Financiamento',
  ];
  
  const {} = props;
  const [selectedValue, setSelectValue] = useState<string|undefined>();

  const renderImage = () => {
    return (
      <div className={styles.transactionImgContainer}>
        <Image
          src={TransactionBG}
          alt=""
          height={231}
          width={window.screen.width <= 425 ? 231 : 327}
        />
      </div>
    );
  }


  return (
    <div id='newTransaction' className={styles.transactionContainer}>
      <div className={styles.transactionContent}>
        <span className={styles.title}>Nova transação</span>
        <span>
          <Select 
            value={selectedValue}
            placeholder="Selecione o tipo de transação"
            options={transactionOptions}
            onChange={setSelectValue}
          />
        </span>
        <span>Valor</span>
        <span>0,00</span>
        <span>Concluir Transação</span>
        {renderImage()}
      </div>
    </div>
  );
}

interface NewTransactionProps {
}