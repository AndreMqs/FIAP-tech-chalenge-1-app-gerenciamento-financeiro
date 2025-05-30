import styles from './MyCards.module.scss';
import Image from 'next/image';
import CardPhysical from '@/app/images/CardBlue.svg';
import CardDigital from '@/app/images/CardGray.png';

export default function MyCards({ onBack }: { onBack: () => void }) {
  return (
    <div className={styles.myCardsContainer}>
      <span className={styles.title}>
        <button className={styles.backButton} onClick={onBack} aria-label="Voltar">←</button>
        Meus cartões
      </span>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Cartão físico</span>
        <div className={styles.cardRow}>
          <Image src={CardPhysical} alt="Cartão físico" className={styles.cardImage} />
          <div className={styles.cardActions}>
            <button className={styles.configButton}>Configurar</button>
            <button className={styles.blockButton}>Bloquear</button>
            <span className={styles.cardFunction}>Função: Débito/Crédito</span>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Cartão digital</span>
        <div className={styles.cardRow}>
          <Image src={CardDigital} alt="Cartão digital" className={styles.cardImage} />
          <div className={styles.cardActions}>
            <button className={styles.configButton}>Configurar</button>
            <button className={styles.blockButton}>Bloquear</button>
            <span className={styles.cardFunction}>Função: Débito</span>
          </div>
        </div>
      </div>
    </div>
  );
} 