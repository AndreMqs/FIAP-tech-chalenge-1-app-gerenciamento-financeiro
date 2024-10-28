import cn from "classnames";

import { TextField as MuiTextField, TextFieldVariants} from "@mui/material";

import styles from "./TextField.module.scss"


export default function TextField(props: TextFieldProps) {
  const {value, variant, style} = props;
  
  return (
    <MuiTextField 
      style={style}
      className={cn('textField', styles.textField)}
      value={value}
      variant={variant ?? 'standard'}
    />
  );
}


interface TextFieldProps {
  value?: string;
  variant?: TextFieldVariants;
  style?: any;
}