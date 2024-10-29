'use client'
import { useEffect, useState } from "react";

import styles from "./Select.module.scss"


export default function Select(props: SelectProps) {
  const {value, options, placeholder, onChange} = props;
  const [selectValue, setSelectValue] = useState<string|undefined>(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);
  
  return (
    <select
      className={styles.transactionSelect}
      value={selectValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option className={styles.transactionOption} disabled selected>
        Selecione o tipo de transação
      </option>
      {options.map(option => 
        <option key={option} value={option}>
          {option}
        </option>
      )}
    </select>
  );
}


interface SelectProps {
  value: string|undefined;
  onChange: (option: string|undefined) => void;
  options: string[];
  placeholder?: string;
  style?: any;
}