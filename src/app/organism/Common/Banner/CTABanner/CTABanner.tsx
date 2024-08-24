import bannerFooterImage from '../../../../../assets/images/bg_footer_subscribes.png'
import styles from './style.module.css'

const CTABanner = () => {
  return (
    <>
      <div className={styles["banner-container"]}>
        <img src={bannerFooterImage} alt='banner' className={styles["banner-img"]} />
        <span>Đăng ký khám trực tuyến</span>
        <span>Giảm ngay 30% phí trị liệu hoặc tiểu phẫu cho 50 người đăng kí đầu tiên</span>
      </div>
    </>
  )
}

export default CTABanner