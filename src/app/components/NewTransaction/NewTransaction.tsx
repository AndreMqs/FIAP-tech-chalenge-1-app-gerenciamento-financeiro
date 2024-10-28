'use client'
import { useState } from 'react';

import Select from '../Select/Select';

import styles from "./NewTransaction.module.scss"


export default function NewTransaction(props: NewTransactionProps) {
  const transactionOptions = [
    'Câmbio de Moeda',
    'DOC/TED',
    'Empréstimo e Financiamento',
  ];
  
  const {} = props;
  const [selectedValue, setSelectValue] = useState<string|undefined>();


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

      </div>
    </div>
  );
}

interface NewTransactionProps {
}