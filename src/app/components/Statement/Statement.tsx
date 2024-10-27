import cn from 'classnames';

import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StatementList from './StatementList/StatementList';

import { getStatementByMonth } from '@/app/utils/statementUtils';

import styles from "./Statement.module.scss"
import globalStyles from "../../globals.module.scss";


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
    <div id='statement' className={cn(styles.statementContainer, globalStyles.borderTest)}>
      <div className={styles.statementHeader}>
        <span className={styles.headerTitle}>Extrato</span>
        <span>
          <IconButton className={styles.headerButton}>
            <EditIcon />
          </IconButton>
          <IconButton className={styles.headerButton}>
            <DeleteIcon />
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