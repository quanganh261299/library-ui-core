import { Outlet } from "react-router-dom"
import BasicHeader from "../../../organism/Common/Header/BasicHeader/BasicHeader"
import styles from './style.module.css'
import NavBarTwoLevels from "../../../organism/Common/Navigation/NavBarTwoLevels/NavBarTwoLevels"

const BasicLayoutNavNotInHedear = () => {
  return (
    <>
      <header className={styles["header"]}>
        <BasicHeader />
      </header>
      <nav className={styles["nav"]}>
        <NavBarTwoLevels search />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default BasicLayoutNavNotInHedear