import { Outlet } from 'react-router-dom'
import styles from './style.module.css'

const TreatmentCategories = () => {
  return (
    <div className={styles["container"]}>
      TreatmentCategories
      <Outlet />
    </div>
  )
}

export default TreatmentCategories