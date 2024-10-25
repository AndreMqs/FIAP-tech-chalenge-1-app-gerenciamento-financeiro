import cn from 'classnames';

import SingleStatement from './SingleStatement/SingleStatement';

import styles from "./Statement.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Statement(props: StatementProps) {
  const {} = props;

  return (
    <div id='statement' className={cn(styles.statementContainer, globalStyles.borderTest)}>
      <div className={styles.statementHeader}>
        <span className={styles.headerTitle}>Extrato</span>
        <span>
          <button className={styles.headerButton}>E</button>
          <button className={styles.headerButton}>D</button>
        </span>
      </div>
      <SingleStatement 
        type='Depósito'
        date={new Date()}
        moneyValue={150}
        isEditing={true}
      />
    </div>
  );
}

interface StatementProps {
}