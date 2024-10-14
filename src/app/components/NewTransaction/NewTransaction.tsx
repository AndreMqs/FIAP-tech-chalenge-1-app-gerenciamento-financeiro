import cn from 'classnames';

import styles from "./NewTransaction.module.scss"
import globalStyles from "../../globals.module.scss";


export default function NewTransaction(props: NewTransactionProps) {
  const {} = props;

  return (
    <div id='newTransaction' className={cn(styles.transactionContainer, globalStyles.borderTest)}>
      New Transaction
    </div>
  );
}

interface NewTransactionProps {
}