import { Statement } from "../models/Statement";

export function getStatementByMonth(statementsList: Statement[]) {
  const monthMap = new Map<string, Statement[]>();
  statementsList.forEach((statement) => {
    const month = statement.date.toLocaleString('pt-BR', { month: 'long' });
    const year = statement.date.getFullYear();
    const key = `${month}/${year}`;
    const prevItem = monthMap.get(key);
    monthMap.set(key, [...(prevItem ?? []), statement]);
  });
  return monthMap;
}