type Props = {
  value: string;
  onChange: (value: string) => void;
  variant?: "input" | "textarea";
};


function TextField(props: Props) {
  const variant = props.variant ?? "input";
  const value = props.value;

  function onChange (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    props.onChange(evt.target.value);
  }


  if (variant === "textarea") {
    return <textarea value={value} onChange={onChange}/>;
  } else {
    return <input type="text" value={value} onChange={onChange} />;
  }
}

export default TextField
