import { Home } from "./Home";
import { Directory } from "./Directory";
import { Editor } from "./Editor";

export interface Route {
  path: string;
  component: React.ComponentClass;
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/directory/:path",
    component: Directory,
    exact: true,
  },
  {
    path: "/editor/:path",
    component: Editor,
    exact: true,
  },
];
