import Common from "../app/pages/Common/Common";
import BasicLayoutNavNotInHedear from "../app/layout/BasicLayout/NavaBarNotInHeader/NavBarNotInHeader";

export const route = [
  {
    path: "/",
    // Layout
    element: <BasicLayoutNavNotInHedear />,
    // Page inside layout
    children: [
      {
        path: "/",
        element: <Common />
      },
    ]
  }
]