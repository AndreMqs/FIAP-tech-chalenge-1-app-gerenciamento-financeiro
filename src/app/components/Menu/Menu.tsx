import cn from 'classnames';

import styles from "./Menu.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Menu(props: MenuProps) {
  const {} = props;

  return (
    <div id='menu' className={cn(styles.menuContainer, globalStyles.borderTest)}>
      Menu
    </div>
  );
}

interface MenuProps {
}