function Button({ label, handleClick, handleDisable }) {
    return (
        <button onClick={handleClick} disabled={handleDisable}>{label}</button>
    );
}

export default Button;