'use client'
import { useState } from 'react';

import Select from '../Select/Select';

import { parseMoneyValue } from '@/app/utils/stringUtils';

import styles from "./NewTransaction.module.scss"


export default function NewTransaction(props: NewTransactionProps & { addStatement: (s: { type: string; moneyValue: number }) => void }) {
  const { addStatement } = props;
  const transactionOptions = [
    'Câmbio de Moeda',
    'DOC/TED',
    'Empréstimo e Financiamento',
  ];
  
  const {} = props;
  const [selectedValue, setSelectValue] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const getButtonText = () => {
    if (typeof window !== "undefined" && window.screen.width <= 425) {
      return 'Concluir';
    }

    return 'Concluir transação';
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

  const handleAdd = () => {
    if (!selectedValue || !inputValue) return;
    const value = parseFloat(inputValue.replace(/[^0-9\-.,]/g, '').replace(',', '.'));
    if (isNaN(value)) return;
    addStatement({ type: selectedValue, moneyValue: value });
    setSelectValue('');
    setInputValue('');
  };

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
        <button className={styles.finishTransaction} onClick={handleAdd}>{getButtonText()}</button>
      </div>
    </div>
  );
}

interface NewTransactionProps {
}