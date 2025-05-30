import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import styles from './Investments.module.scss';
import { useEffect, useState } from 'react';

const data = [
  { name: 'Fundos de investimento', value: 20000, color: '#1976d2' },
  { name: 'Tesouro Direto', value: 10000, color: '#8e24aa' },
  { name: 'Previdência Privada', value: 8000, color: '#ff7043' },
  { name: 'Bolsa de Valores', value: 12000, color: '#ffb300' },
];

export default function Investments() {
  const rendaFixa = data[0].value + data[1].value;
  const rendaVariavel = data[2].value + data[3].value;
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 425);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className={styles.investmentsContainer}>
      <div className={styles.investmentsContent}>
        <span className={styles.title}>Investimentos</span>
        <span className={styles.total}>Total: R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
        <div className={styles.yields}>
          <div className={styles.yieldBox}>
            <span className={styles.yieldTitle}>Renda Fixa</span>
            <span className={styles.yieldValue}>R$ {rendaFixa.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          </div>
          <div className={styles.yieldBox}>
            <span className={styles.yieldTitle}>Renda variável</span>
            <span className={styles.yieldValue}>R$ {rendaVariavel.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          </div>
        </div>
        <span className={styles.statistics}>Estatísticas</span>
        <div className={styles.chartContainer}>
          {isMobile ? (
            <div className={styles.mobileChartAndLegend}>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={35}
                    label={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.mobileLegendWrapper}>
                {data.map((item, idx) => (
                  <div key={item.name} className={styles.mobileLegendItem}>
                    <span className={styles.mobileLegendDot} style={{ backgroundColor: item.color }} />
                    <span className={styles.mobileLegendText}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  innerRadius={40}
                  label={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  payload={data.map((item) => ({
                    value: item.name,
                    type: 'circle',
                    color: item.color,
                  }))}
                  wrapperStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
} 