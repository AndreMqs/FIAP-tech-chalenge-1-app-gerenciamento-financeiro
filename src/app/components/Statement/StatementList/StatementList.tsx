'use client'
import { capitalize } from "lodash";

import SingleStatement from "../SingleStatement/SingleStatement";

import { Statement } from "@/app/models/Statement";

import styles from "./StatementList.module.scss"


export default function StatementList(props: SingleStatementProps & {
  selectedStatement: Statement | null;
  setSelectedStatement: (s: Statement | null) => void;
}) {
  const {statementsByMonth, isEditing, selectedStatement, setSelectedStatement} = props;

  const renderSingleStatement = (month: string) => {
    return (
      statementsByMonth.get(month)?.map((statement, index) =>
        <SingleStatement 
          statement={statement} 
          isEditing={isEditing} 
          key={index} 
          selectedStatement={selectedStatement}
          setSelectedStatement={setSelectedStatement}
        />
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