import classNames from 'classnames';
import "./Button.scss";

function Button({ label, handleClick, handleDisable, next, previous }) {
    const classes = classNames({
        "button": true,
        "button--new": next,
        "button--previous": previous,
        "button--disabled": handleDisable
    })


    return (
        <button className={classes} onClick={handleClick} disabled={handleDisable}>{label}</button>
    );
}

export default Button;