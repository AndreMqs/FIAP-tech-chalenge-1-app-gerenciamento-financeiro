import cn from 'classnames';

import styles from "./Menu.module.scss"


export default function Menu(props: MenuProps & { onMenuClick?: (title: string) => void }) {
  const {items, onMenuClick} = props;

  return (
    <div id='menu' className={styles.menuContainer}>
      {items.map((item) => (
        <a 
          key={item.title}
          className={cn({[styles.itemSelected]: item.selected}, styles.menuItem)} 
          href={item.route}
          onClick={e => {
            if (onMenuClick) {
              e.preventDefault();
              onMenuClick(item.title);
            }
          }}
        >
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