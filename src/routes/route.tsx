import BasicLayoutNavNotInHedear from "../app/layout/BasicLayout/NavaBarNotInHeader/NavBarNotInHeader";
import Contact from "../app/pages/Config/Landingpage/Medisan/Contact/Contact";
import HomePage from "../app/pages/Config/Landingpage/Medisan/Home/HomePage";
import IntroductionPage from "../app/pages/Config/Landingpage/Medisan/Introduction/IntroductionPage";
import News from "../app/pages/Config/Landingpage/Medisan/News/News";
import Price from "../app/pages/Config/Landingpage/Medisan/Price/Price";
import Services from "../app/pages/Config/Landingpage/Medisan/Services/Services";
import TreatmentCategories from "../app/pages/Config/Landingpage/Medisan/TreatmentCategories/TreatmentCategories";
import Cardiovascular from "../app/pages/Config/Landingpage/Medisan/TreatmentCategories/Cardiovascular/Cardiovascular";


export const route = [
  {
    path: "/",
    // Layout
    element: <BasicLayoutNavNotInHedear hasBanner />,
    // Page inside layout
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/introduction",
        element: <IntroductionPage />
      },
      {
        path: "/treatment-categories",
        element: <TreatmentCategories />,
        children: [
          {
            index: true,
            element: <h1>Test</h1>
          },
          {
            path: "/treatment-categories/cardiovascular",
            element: <Cardiovascular />
          }
        ]
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/price",
        element: <Price />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
]