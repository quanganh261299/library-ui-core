import { Children } from "react";
import Config from "../app/pages/Config/Config";
import Common from "../app/pages/Common/Common";

export const route = [
  {
    path: "/",
    // Layout
    element: <Config />,
    children: [
      {
        path: "/",
        element: <Common />
      },
    ]
  }
]