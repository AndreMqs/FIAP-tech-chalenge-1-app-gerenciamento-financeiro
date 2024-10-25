import TextField from "../../TextField/TextField";
import { capitalize } from "lodash";

import { parseMoneyValue } from "@/app/utils/stringUtils";

import { Statement } from "@/app/models/Statement";

import styles from "./StatementList.module.scss"


export default function StatementList(props: SingleStatementProps) {
  const {statementsByMonth, isEditing} = props;

  const renderSingleStatement = (month: string) => {
    return (
      statementsByMonth.get(month)?.map(({type, date, moneyValue}, index) =>
        <div 
          id='singleStatement' 
          className={styles.singleStatementContainer}
          key={index}
        >
          <span className={styles.typeAndDateContainer}>
            <span className={styles.type}>{type}</span>
            <span className={styles.date}>{date.toLocaleDateString()}</span>
          </span>

          {!isEditing && <span className={styles.moneyValue}>{parseMoneyValue(moneyValue)}</span>}
          {isEditing && <TextField variant="standard" value={parseMoneyValue(moneyValue)}/>}
        </div>
      )
    );
  }

  return (
    Array.from(statementsByMonth.keys()).map((month, index) => (
      <div key={index}>
        <span className={styles.month}>{capitalize(month)}</span>
        <div className={styles.listContainer}>
          {renderSingleStatement(month)}
        </div>
      </div>
    ))
  );
}

interface SingleStatementProps {
  statementsByMonth: Map<string, Statement[]>;
  isEditing: boolean;
}