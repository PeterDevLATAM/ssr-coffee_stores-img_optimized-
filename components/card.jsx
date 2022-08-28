import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames"

export default function Card({ name, imgUrl, href }) {
  return (
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={cls("glass",styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <img src={imgUrl} alt="Card Image" className={styles.cardImage} />
          </div>
        </div>
      </a>
    </Link>
  );
}
 