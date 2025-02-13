import { Fragment, ReactNode } from "react";

interface Props{
    children: ReactNode;
    type?: 'primary' | 'secondary' | 'success' | 'danger';
}

const Alert = ({children, type='primary'}: Props) => {
  return (
    <Fragment>
        <div className={'alert alert-' + type}>{children}</div>
    </Fragment>
  )
}

export default Alert