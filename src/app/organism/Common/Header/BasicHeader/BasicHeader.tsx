import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.css'
import logo from '../../../../../assets/images/logo.jpg'
import TextWithIcon from '../../../../components/Common/Introduction/TextWithIcon/TextWithIcon';
import clockIcon from '../../../../../assets/images/clock.webp';
import heartIcon from '../../../../../assets/images/heart.webp';
import calculateIcon from '../../../../../assets/images/calculate.webp';

interface informationHeaderType {
  imgSrc?: string;
  headerText?: string;
  detailText?: string;
  specialDetailText?: boolean;
}

const informationHeader: informationHeaderType[] = [
  {
    imgSrc: heartIcon,
    headerText: "Địa chỉ phòng khám:",
    detailText: "Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội"
  },
  {
    imgSrc: clockIcon,
    headerText: "Giờ làm việc:",
    detailText: "8h00 - 21h00, thứ 2 - CN (Kể cả lễ, Tết)"
  },
  {
    imgSrc: calculateIcon,
    headerText: "Hotline tư vấn:",
    detailText: "1900 6750",
    specialDetailText: true,
  }
]

const BasicHeader = () => {
  return (
    <>
      <div className={styles["intro"]}>
        <span className={styles["intro__text"]}>Chào mừng bạn đến với Phòng Khám Đa Khoa Quốc Tế Medisan!</span>
        <div className={styles["intro__icon-list"]}>
          <FontAwesomeIcon icon={faTwitter} className={styles["intro__icon-list__icon"]} />
          <FontAwesomeIcon icon={faFacebook} className={styles["intro__icon-list__icon"]} />
          <FontAwesomeIcon icon={faGooglePlusG} className={styles["intro__icon-list__icon"]} />
          <FontAwesomeIcon icon={faYoutube} className={styles["intro__icon-list__icon"]} />
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["information"]}>
          <img src={logo} alt="logo" className='information__logo' />
          <div className={styles["information__detail"]}>
            {informationHeader.map((item, index) => (
              <TextWithIcon
                key={index}
                imgSrc={item.imgSrc}
                headerText={item.headerText}
                detailText={item.detailText}
                specialDetailText={item.specialDetailText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicHeader