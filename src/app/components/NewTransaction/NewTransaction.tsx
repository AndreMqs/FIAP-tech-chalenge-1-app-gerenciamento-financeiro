'use client'
import { useState } from 'react';

import Select from '../Select/Select';
import Image from 'next/image';

import TransactionBG from "@/app/images/TransactionBackground.svg";

import { parseMoneyValue } from '@/app/utils/stringUtils';

import styles from "./NewTransaction.module.scss"


export default function NewTransaction(props: NewTransactionProps) {
  const transactionOptions = [
    'Câmbio de Moeda',
    'DOC/TED',
    'Empréstimo e Financiamento',
  ];
  
  const {} = props;
  const [selectedValue, setSelectValue] = useState<string|undefined>();
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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

  const getButtonText = () => {
    return window.screen.width <= 425 ? 'Concluir' : 'Concluir transação';
  }

  const getInputValue = () => {
    if (isFocused) {
      return inputValue;
    }

    const value = parseFloat(inputValue);
    if (Number.isNaN(value)) {
      return parseMoneyValue(0);
    }

    return parseMoneyValue(value);
  }

  return (
    <div id='newTransaction' className={styles.transactionContainer}>
      <div className={styles.transactionContent}>
        <span className={styles.title}>Nova transação</span>
        <span className={styles.selectContainer}>
          <Select 
            value={selectedValue}
            placeholder="Selecione o tipo de transação"
            options={transactionOptions}
            onChange={setSelectValue}
          />
        </span>
        <span className={styles.inputContainer}>
          <label 
            htmlFor="value" 
            id='value' 
            className={styles.inputLabel}
          >
            Valor
          </label>
          <input 
            type="text" 
            value={getInputValue()}
            onChange={e => setInputValue(e.target.value)}
            className={styles.inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </span>
        <button className={styles.finishTransaction}>{getButtonText()}</button>
        {renderImage()}
      </div>
    </div>
  );
}

interface NewTransactionProps {
}