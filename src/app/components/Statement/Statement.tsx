import IconButton from '@mui/material/IconButton';

import Delete from "@/app/images/Delete.svg";
import Edit from "@/app/images/Edit.svg";
import StatementList from './StatementList/StatementList';
import Image from 'next/image';

import { getStatementByMonth } from '@/app/utils/statementUtils';

import styles from "./Statement.module.scss"


export default function Statement(props: StatementProps) {
  const {} = props;

  const statementsList = [
    {
      type: 'Depósito',
      date: new Date('2024-01-15'),
      moneyValue: 150,
    },
    {
      type: 'Depósito',
      date: new Date('2024-01-15'),
      moneyValue: 1501,
    },
    {
      type: 'Depósito',
      date: new Date('2024-02-15'),
      moneyValue: 1502,
    },
    {
      type: 'Depósito',
      date: new Date('2024-03-15'),
      moneyValue: 1503,
    },
    {
      type: 'Depósito',
      date: new Date('2024-03-15'),
      moneyValue: 1504,
    },
    {
      type: 'Depósito',
      date: new Date('2024-03-15'),
      moneyValue: 1504,
    },
    {
      type: 'Depósito',
      date: new Date('2024-04-15'),
      moneyValue: 1504,
    },
    {
      type: 'Depósito',
      date: new Date('2024-07-15'),
      moneyValue: 1504,
    },
    {
      type: 'Depósito',
      date: new Date(),
      moneyValue: 1504,
    },
  ]

  return (
    <div id='statement' className={styles.statementContainer}>
      <div className={styles.statementHeader}>
        <span className={styles.headerTitle}>Extrato</span>
        <span className={styles.headerButtonsContainer}>
          <IconButton className={styles.headerButton}>
            <Image 
              src={Edit}
              alt="Editar"
              height={22}
              width={22}
            />
          </IconButton>
          <IconButton className={styles.headerButton}>
            <Image 
              src={Delete}
              alt="Remover"
              height={40}
              width={40}
            />
          </IconButton>
        </span>
      </div>
      <div className={styles.statementsListContainer}>
      <StatementList 
        statementsByMonth={getStatementByMonth(statementsList)}
        isEditing={true}
      />
      </div>
    </div>
  );
}

interface StatementProps {
}