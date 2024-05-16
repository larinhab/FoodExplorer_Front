import { Container } from "./styles";

export function Input({ placeholder, icon: Icon, onChange, value, ...rest }) {

  return (
    <Container>
      {Icon && <Icon size={32} />}
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </Container>
  );
}