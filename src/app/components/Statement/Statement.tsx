import cn from 'classnames';

import styles from "./Statement.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Statement(props: StatementProps) {
  const {} = props;

  return (
    <div id='statement' className={cn(styles.statementContainer, globalStyles.borderTest)}>
      Statement
    </div>
  );
}

interface StatementProps {
}