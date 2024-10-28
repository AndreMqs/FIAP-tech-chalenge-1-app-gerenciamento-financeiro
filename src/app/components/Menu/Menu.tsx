import cn from 'classnames';

import styles from "./Menu.module.scss"
import globalStyles from "../../globals.module.scss";


export default function Menu(props: MenuProps) {
  const {items} = props;

  return (
    <div id='menu' className={cn(styles.menuContainer, globalStyles.borderTest)}>
      {items.map((item) => (
        <a className={cn({[styles.itemSelected]: item.selected}, styles.menuItem)} href={item.route}>
          {item.title}
        </a>
      ))}
    </div>
  );
}

interface MenuProps {
  items: {
    title: string;
    route: string;
    selected: boolean;
  }[]
}