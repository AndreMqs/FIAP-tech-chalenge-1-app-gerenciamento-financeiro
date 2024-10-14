import cn from 'classnames';

import styles from "./Header.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Header(props: HeaderProps) {
  const {} = props;

  return (
    <div id='header' className={cn(styles.header, globalStyles.borderTest)}>
      Header
    </div>
  );
}

interface HeaderProps {
}