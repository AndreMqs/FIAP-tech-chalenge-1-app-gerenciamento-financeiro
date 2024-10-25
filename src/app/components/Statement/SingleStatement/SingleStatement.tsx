import { useEffect, useState } from "react";

import TextField from "../../TextField/TextField";

import { parseMoneyValue } from "@/app/utils/stringUtils";

import styles from "./SingleStatement.module.scss"


export default function SingleStatement(props: SingleStatementProps) {
  const {type, moneyValue, date, isEditing} = props;

  return (
    <div id='singleStatement' className={styles.singleStatementContainer}>
      <span className={styles.month}>{date.toLocaleString('default', { month: 'long' })}</span>
      <span className={styles.typeAndDateContainer}>
        <span className={styles.type}>{type}</span>
        <span className={styles.date}>{date.toLocaleDateString()}</span>
      </span>

      {!isEditing && <span className={styles.moneyValue}>{parseMoneyValue(moneyValue)}</span>}
      {isEditing && <TextField variant="standard" value={parseMoneyValue(moneyValue)}/>}

      <span className={styles.border}/>
    </div>
  );
}

interface SingleStatementProps {
  type: string;
  moneyValue: number;
  date: Date;
  isEditing: boolean;
}