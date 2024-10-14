import cn from 'classnames';

import styles from "./Summary.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Summary(props: SummaryProps) {
  const {} = props;

  return (
    <div id='summary' className={cn(styles.summaryContainer, globalStyles.borderTest)}>
      Summary
    </div>
  );
}

interface SummaryProps {
}