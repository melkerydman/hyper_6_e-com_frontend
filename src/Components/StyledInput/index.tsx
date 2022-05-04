import { HorizontalDivider } from "../Divider";
import { Input, InputWrapper } from "./styled";

interface IProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const StyledInput: React.FC<IProps> = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <HorizontalDivider bottom />
    </InputWrapper>
  );
};

export default StyledInput;
