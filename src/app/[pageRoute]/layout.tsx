import styles from "@/app/globals.module.scss";

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
    <>{children}</>
  )
}
