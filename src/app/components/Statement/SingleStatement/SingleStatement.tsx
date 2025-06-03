'use client'
import { useEffect, useState } from "react";

import { parseMoneyValue } from "@/app/utils/stringUtils";

import { Statement } from "@/app/models/Statement";

import styles from "./SingleStatement.module.scss"
import Delete from '@/app/images/Delete.svg';


export default function SingleStatement(props: SingleStatementProps & {
  selectedStatement: Statement | null;
  setSelectedStatement: (s: Statement | null) => void;
}) {
  const {statement, isEditing, selectedStatement, setSelectedStatement} = props;
  const {type, date, moneyValue} = statement;
  const [inputValue, setInputValue] = useState<string>(moneyValue.toString());
  const [isFocused, setIsFocused] = useState(false);

  const isSelected =
    selectedStatement &&
    selectedStatement.type === type &&
    selectedStatement.moneyValue === moneyValue &&
    selectedStatement.date.getTime() === date.getTime();

  useEffect(() => {
    setInputValue(moneyValue.toString());
  }, [moneyValue]);

  const getInputValue = () => {
    if (isEditing && isFocused) {
      return inputValue;
    }

    const value = parseFloat(inputValue);
    if (Number.isNaN(value)) {
      return parseMoneyValue(0);
    }

    return parseMoneyValue(value);
  }

  return (
    <div 
      id='singleStatement' 
      className={styles.singleStatementContainer + (isSelected ? ' ' + styles.selected : '')}
      style={{
        background: isSelected ? '#E4EDE3' : undefined,
        cursor: !isEditing ? 'pointer' : 'default',
        borderRadius: isSelected ? 8 : undefined,
        transition: 'background 0.2s',
        height: '100%',
      }}
      onClick={() => {
        if (!isEditing) setSelectedStatement(isSelected ? null : statement);
      }}
    >
      <span className={styles.typeAndDateContainer}>
        <span className={styles.type}>{type}</span>
        <span className={styles.date}>{date.toLocaleDateString('pt-BR')}</span>
      </span>

      <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
        <input 
          className={styles.inputMoney}
          type="text" 
          id="money" 
          name="money" 
          readOnly={!isEditing} 
          value={getInputValue()}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        {isEditing && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedStatement(null);
            }}
            style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
            title="Excluir transação"
          >
            <img src={Delete.src} alt="Excluir" height={20} width={20} />
          </button>
        )}
      </div>
    </div>
  );
}

interface SingleStatementProps {
  statement: Statement;
  isEditing: boolean;
}