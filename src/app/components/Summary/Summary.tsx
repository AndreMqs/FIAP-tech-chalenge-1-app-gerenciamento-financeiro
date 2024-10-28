import styles from "./Summary.module.scss"


export default function Summary(props: SummaryProps) {
  const {username} = props;

  return (
    <div id='summary' className={styles.summaryContainer}>
      <span className={styles.userName}>
        {`Olá, ${username}! :)`}
      </span>
    </div>
  );
}

interface SummaryProps {
  username: string;
}