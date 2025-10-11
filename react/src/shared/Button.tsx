type Props = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction; //VoidFunction- это функция, которая не принимает аргументов и ничего не возвращает
};

function Button (props: Props) {
  const label = props.label;
  const type = props.type ?? 'button';
  const onClick = props.onClick;

  return <button type={type} onClick={onClick}>{label}</button>;
}

export default Button;