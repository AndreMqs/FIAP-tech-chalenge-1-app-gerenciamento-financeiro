import { useState } from 'react';
import styles from './OtherServices.module.scss';
import Financial from '@/app/images/Financial.svg';
import Card from '@/app/images/Card.svg';
import Donation from '@/app/images/Donation.svg';
import Pix from '@/app/images/pix.svg';
import Insurance from '@/app/images/Insurance.svg';
import Phone from '@/app/images/phone.svg';
import Image from 'next/image';
import MyCards from './MyCards';

const services = [
  { key: 'emprestimo', label: 'Empréstimo', icon: Financial },
  { key: 'cartoes', label: 'Meus cartões', icon: Card },
  { key: 'doacoes', label: 'Doações', icon: Donation },
  { key: 'pix', label: 'Pix', icon: Pix },
  { key: 'seguros', label: 'Seguros', icon: Insurance },
  { key: 'celular', label: 'Crédito celular', icon: Phone },
];

export default function OtherServices() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showMyCards, setShowMyCards] = useState(false);

  if (showMyCards) {
    return <MyCards onBack={() => setShowMyCards(false)} />;
  }

  return (
    <div className={styles.otherServicesContainer}>
      <span className={styles.title}>Confira os serviços disponíveis</span>
      <div className={styles.grid}>
        {services.map((service) => (
          <div
            key={service.key}
            className={
              selected === service.key
                ? `${styles.card} ${styles.selected}`
                : styles.card
            }
            onClick={() => {
              setSelected(service.key);
              if (service.key === 'cartoes') setShowMyCards(true);
            }}
          >
            <Image src={service.icon} alt={service.label} width={60} height={60} />
            <span className={styles.cardLabel}>{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 