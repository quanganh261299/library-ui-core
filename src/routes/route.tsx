import Common from "../app/pages/Common/Common";
import BasicLayout from "../app/layout/BasicLayout/BasicLayout";

export const route = [
  {
    path: "/",
    // Layout
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Common />
      },
    ]
  }
]