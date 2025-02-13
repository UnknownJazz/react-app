import { Fragment } from "react"

interface Props {
    color?: 'primary' | 'secondary' | 'success' | 'danger',
    label: string,
    onClickButton: () => void
}

function Button({color = 'primary', label, onClickButton}: Props) {
    return (
        <Fragment>
            <button type="button" className={'btn btn-' + color} onClick={onClickButton}>{label}</button>
        </Fragment>
    )
}

export default Button