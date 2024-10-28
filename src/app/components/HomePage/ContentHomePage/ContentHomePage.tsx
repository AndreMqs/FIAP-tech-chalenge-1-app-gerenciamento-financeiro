'use client'
import Image from "next/image";

import Dispositivos from "@/app/images/Dispositivos.svg";
import Estrela from "@/app/images/Estrela.svg";
import IlustracaoBanner from "@/app/images/IlustracaoBanner.svg";
import Presente from "@/app/images/Presente.svg";
import Saque from "@/app/images/Saque.svg";

import styles from "./ContentHomePage.module.scss"


export default function ContentHomePage() {

  const goToInit = () => {
    window.location.href = "/inicio";
  }

  return (
    <div id='contentContainer' className={styles.contentContainer}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <span className={styles.bannerText}>
            Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
          </span>
          <Image 
            src={IlustracaoBanner}
            alt="Banner"
          />
        </div>
        <div className={styles.benefitsContainer}>
          <span className={styles.titleText}>
            Vantagens do nosso banco:
          </span>
          <div className={styles.iconsContainer}>
            <div className={styles.iconItemContainer}>
              <Image 
                src={Presente}
                alt="Presente"
              />
              <span className={styles.itemTitle}>Conta e cartão gratuitos</span>
              <span className={styles.itemText}>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</span>
            </div>

            <div className={styles.iconItemContainer}>
              <Image 
                src={Saque}
                alt="Saque"
              />
              <span className={styles.itemTitle}>Saques sem custo</span>
              <span className={styles.itemText}>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</span>
            </div>

            <div className={styles.iconItemContainer}>
              <Image 
                src={Estrela}
                alt="Pontos"
              />
              <span className={styles.itemTitle}>Programa de pontos</span>
              <span className={styles.itemText}>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</span>
            </div>

            <div className={styles.iconItemContainer}>
              <Image 
                src={Dispositivos}
                alt="Dispositivos"
              />
              <span className={styles.itemTitle}>Seguro Dispositivos</span>
              <span className={styles.itemText}>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}