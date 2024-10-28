'use client'
import cn from "classnames";
import { useEffect, useState } from "react";

import { MenuItem, Select as MuiSelect, SelectChangeEvent, TextFieldVariants} from "@mui/material";

import styles from "./TextField.module.scss"


export default function Select(props: SelectProps) {
  const {value, options, placeholder, onChange} = props;
  const [selectValue, setSelectValue] = useState<string|undefined>(value);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);
  
  return (
    <MuiSelect
      value={selectValue}
      onChange={(e) => onChange(e.target.value)}
      displayEmpty
      placeholder={placeholder}
    >
      {options.map(option => 
        <MenuItem key={option} value={option}>
          <em>{option}</em>
        </MenuItem>
      )}
    </MuiSelect>
  );
}


interface SelectProps {
  value: string|undefined;
  onChange: (option: string|undefined) => void;
  options: string[];
  placeholder?: string;
  style?: any;
}