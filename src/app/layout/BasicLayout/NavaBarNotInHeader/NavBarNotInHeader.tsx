import { Outlet } from "react-router-dom"
import BasicHeader from "../../../organism/Common/Header/BasicHeader/BasicHeader"
import styles from './style.module.css'
import NavBarTwoLevels from "../../../organism/Common/Navigation/NavBarTwoLevels/NavBarTwoLevels"
import { FC } from "react"
import CTABanner from "../../../organism/Common/Banner/CTABanner/CTABanner"

interface Props {
  hasBanner?: boolean
}

const BasicLayoutNavNotInHedear: FC<Props> = (props: Props) => {
  const { hasBanner } = props
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
      <footer>
        {hasBanner && <CTABanner />}
      </footer>
    </>
  )
}

export default BasicLayoutNavNotInHedear