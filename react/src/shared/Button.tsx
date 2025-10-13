import "./Button.css"

type ButtonProps = {
  label: string
  type?: "button" | "submit" | "reset"
  onClick?: VoidFunction //VoidFunction- это функция, которая не принимает аргументов и ничего не возвращает
}

function Button(props: ButtonProps) {
  const label = props.label
  const type = props.type ?? "button"
  const onClick = props.onClick

  return (
    <button className="button" type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button
