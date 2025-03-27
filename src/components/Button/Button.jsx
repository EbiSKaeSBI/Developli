const Button = (props) => {
    return (
        <button className={props.className + " font-readex-pro"}>
            {props.content}
        </button>
    )
}

export default Button;