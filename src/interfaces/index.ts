export interface IRoute {
  path: string;
  component: JSX.Element;
}

export interface ISideHeader {
  title: string;
  path: string;
  icon: JSX.Element;
}

export interface ITopHeader{
  name: string;
  path: string;
}