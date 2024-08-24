import { useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.css'
import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

interface subMenuType {
  activePage: string;
  content: string;
  linkPage: string;
}

interface menuType {
  content: string;
  activePage: string;
  linkPage: string;
  subItem?: subMenuType[];
}

interface Props {
  search?: boolean;
}

const NavBarTwoLevels: FC<Props> = (props: Props) => {
  const { search } = props
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('home');
  const location = useLocation();
  const goToPage = (event: any, activePage: string, link: string) => {
    event.stopPropagation();
    setActive(activePage)
    navigate(link)
  }

  // config menu
  const menuItems: menuType[] = [
    {
      content: "Trang chủ",
      activePage: 'home',
      linkPage: '/',
    },
    {
      content: "Giới thiệu",
      activePage: 'introduction',
      linkPage: '/introduction',
    },
    {
      content: "Hạng mục điều trị",
      activePage: 'treatment-categories',
      linkPage: '/treatment-categories',
      subItem: [
        {
          content: "Bệnh tim mạch",
          activePage: 'treatment-categories',
          linkPage: "/treatment-categories/cardiovascular"
        },
        {
          content: "Bệnh thận",
          activePage: 'treatment-categories',
          linkPage: "/treatment-categories/kidney"
        }
      ]
    },
    {
      content: "Dịch vụ",
      activePage: 'services',
      linkPage: '/services',
    },
    {
      content: "Bảng giá dịch vụ",
      activePage: 'price',
      linkPage: '/price',
    },
    {
      content: "Tin tức",
      activePage: 'news',
      linkPage: '/news',
      subItem: [
        {
          content: "Kỹ thuật hiện đại",
          activePage: 'news',
          linkPage: "/news/modern-technology"
        },
        {
          content: "Dịch vụ tiêu biểu",
          activePage: 'news',
          linkPage: "/news/typical-services"
        },
        {
          content: "Sức khỏe sinh sản",
          activePage: 'news',
          linkPage: "/news/reproductive-health"
        },
        {
          content: "Nhịp cầu nhân ái",
          activePage: 'news',
          linkPage: "/news/charity"
        }
      ]
    },
    {
      content: "Liên hệ",
      activePage: 'contact',
      linkPage: '/contact',
    },
  ]

  // set active link
  useEffect(() => {
    switch (true) {
      case location.pathname === '/': return setActive('home')
      case location.pathname.includes('/introduction'): return setActive('introduction')
      case location.pathname.includes('/treatment-categories'): return setActive('treatment-categories')
      case location.pathname.includes('/services'): return setActive('services')
      case location.pathname.includes('/price'): return setActive('price')
      case location.pathname.includes('/news'): return setActive('news')
    }
  }, [location])

  return (
    <>
      <div className={styles["nav-container"]}>
        <ul className={styles["list-container"]}>
          {menuItems.map((item) => {
            return (
              <li
                className={`${styles["list-item"]} ${active === item.activePage ? styles["list-item--active"] : ''}`}
                onClick={(e) => goToPage(e, item.activePage, item.linkPage)}
              >
                {item.content}
                {item.subItem && <FontAwesomeIcon icon={faCaretDown} />}
                {item.subItem && (
                  <ul className={styles["list-container-lv2"]}>
                    {item.subItem.map((subItem) => {
                      return (
                        <li
                          className={styles["list-item-lv2"]}
                          onClick={(e) => goToPage(e, subItem.activePage, subItem.linkPage)}
                        >
                          {subItem.content}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        {search && <div className={styles["search"]}><FontAwesomeIcon icon={faSearch} /></div>}
      </div>
    </>
  )
}

export default NavBarTwoLevels