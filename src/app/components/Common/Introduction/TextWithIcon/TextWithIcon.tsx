import { FC } from "react"
import styles from './style.module.css'

interface Props {
  imgSrc?: string;
  headerText?: string;
  detailText?: string;
  specialDetailText?: boolean;
}

const TextWithIcon: FC<Props> = (props: Props) => {
  const { imgSrc, headerText, detailText, specialDetailText } = props;
  return (
    <>
      <div className={styles["container"]}>
        <img src={imgSrc} alt="icon" className={styles["icon"]} />
        <div className={styles["text-container"]}>
          <span className={styles["text-header"]}>{headerText}</span>
          <span className={`${styles["text-detail"]} ${specialDetailText ? styles["text-detail--special"] : ''}`}>{detailText}</span>
        </div>
      </div>
    </>
  )
}

export default TextWithIcon