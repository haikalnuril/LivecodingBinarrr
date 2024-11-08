export const Input = (props) => {
    const { type = 'text', placeholder = 'Enter text', name } = props;
    return (
        <input type={type} placeholder={placeholder} name={name} id={name} />
    )
}