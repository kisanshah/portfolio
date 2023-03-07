declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export { ReactComponent };
}

declare module "*.svg" {
  const value: any;
  export default value;
}
