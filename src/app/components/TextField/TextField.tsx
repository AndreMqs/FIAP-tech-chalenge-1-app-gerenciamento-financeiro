import { TextField as MuiTextField, TextFieldVariants} from "@mui/material";

import styles from "./TextField.module.scss"


export default function TextField(props: SingleStatementProps) {
  const {value, variant} = props;
  
  return (
    <MuiTextField 
      className={styles.textField}
      value={value}
      variant={variant ?? 'standard'}
    />
  );
}


interface SingleStatementProps {
  value?: string;
  variant?: TextFieldVariants;
}