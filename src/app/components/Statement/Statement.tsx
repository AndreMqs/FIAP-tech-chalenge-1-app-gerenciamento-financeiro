'use client'
import { useState } from 'react';
import Image from 'next/image';

import IconButton from '@mui/material/IconButton';
import Delete from "@/app/images/Delete.svg";
import Edit from "@/app/images/Edit.svg";
import StatementList from './StatementList/StatementList';

import { getStatementByMonth } from '@/app/utils/statementUtils';
import { Statement as StatementType } from '@/app/models/Statement';

import styles from "./Statement.module.scss"


export default function Statement(props: StatementProps & { statementsList: StatementType[], deleteStatement: (s: StatementType) => void }) {
  const { statementsList = [], deleteStatement } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatement, setSelectedStatement] = useState<StatementType | null>(null);

  const handleDelete = () => {
    if (!isEditing && selectedStatement) {
      deleteStatement(selectedStatement);
      setSelectedStatement(null);
    }
  };

  return (
    <div id='statement' className={styles.statementContainer}>
      <div className={styles.statementHeader}>
        <span className={styles.headerTitle}>Extrato</span>
        <span className={styles.headerButtonsContainer}>
          <IconButton className={styles.headerButton} onClick={() => setIsEditing(!isEditing)}>
            <Image 
              src={Edit}
              alt="Editar"
              height={22}
              width={22}
            />
          </IconButton>
          <IconButton className={styles.headerButton} onClick={handleDelete} disabled={isEditing || !selectedStatement}>
            <Image 
              src={Delete}
              alt="Remover"
              height={40}
              width={40}
            />
          </IconButton>
        </span>
      </div>
      <div className={styles.statementsListContainer}>
        <StatementList 
          statementsByMonth={getStatementByMonth(statementsList)}
          isEditing={isEditing}
          selectedStatement={selectedStatement}
          setSelectedStatement={setSelectedStatement}
        />
      </div>
    </div>
  );
}

interface StatementProps {
}