import styles from './MyCards.module.scss';
import Image from 'next/image';
import { cardsMock } from '@/app/services/cardsMock';

export default function MyCards({ onBack }: { onBack: () => void }) {
  return (
    <div className={styles.myCardsContainer}>
      <span className={styles.title}>
        <button className={styles.backButton} onClick={onBack} aria-label="Voltar">←</button>
        Meus cartões
      </span>
      {cardsMock.map((card, idx) => (
        <div className={styles.section} key={card.type}>
          <span className={styles.sectionTitle}>{`Cartão ${card.type}`}</span>
          <div className={styles.cardRow}>
            <Image src={card.image} alt={`Cartão ${card.type}`} className={styles.cardImage} />
            <div className={styles.cardActions}>
              <button className={styles.configButton}>Configurar</button>
              <button className={styles.blockButton}>Bloquear</button>
              <span className={styles.cardFunction}>{`Função: ${card.function}`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 