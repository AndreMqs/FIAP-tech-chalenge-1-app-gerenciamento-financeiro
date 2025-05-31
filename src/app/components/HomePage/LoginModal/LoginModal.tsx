import { useState } from 'react';
import Image from 'next/image';
import IllustrationLogin from '@/app/images/Login.svg';
import { useRouter } from 'next/navigation';
import styles from './LoginModal.module.scss';

export default function LoginModal({ open, onClose, onOpenRegister }: { open: boolean; onClose: () => void; onOpenRegister?: () => void }) {
  const router = useRouter();

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/inicio');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">×</button>
        <Image src={IllustrationLogin} alt="Login" className={styles.illustration} />
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="login-email">Email</label>
            <input id="login-email" className={styles.input} type="email" placeholder="Digite seu email" required />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="login-senha">Senha</label>
            <input id="login-senha" className={styles.input} type="password" placeholder="Digite sua senha" required />
          </div>
          <a href="#" className={styles.forgotPassword}>Esqueci a senha!</a>
          <button type="submit" className={styles.submitButton}>Acessar</button>
        </form>
      
      </div>
    </div>
  );
} 