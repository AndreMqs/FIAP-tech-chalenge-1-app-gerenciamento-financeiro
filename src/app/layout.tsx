import styles from "./globals.module.scss";

export const metadata = {
  title: 'Gerenciamento Financeiro',
  description: 'App de gerenciamento financeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={styles.global} lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
