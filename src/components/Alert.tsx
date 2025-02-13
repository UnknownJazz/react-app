import { Fragment, ReactNode } from "react";

interface Props{
    children: ReactNode;
}

const Alert = ({children}: Props) => {
  return (
    <Fragment>
        <div className={"alert alert-primary"}>{children}</div>
    </Fragment>
  )
}

export default Alert