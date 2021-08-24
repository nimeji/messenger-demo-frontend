import { CSSProperties } from 'react';
import './FormInput.scss';

type FormInputProps = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

export function FormInput({
  className='',
  style,
  placeholder,
  value,
  onValueChange=()=>{},
  disabled=false,
}: FormInputProps) {
  return (
    <input 
      className={`FormInput ${className}`}
      style={style}
      type="text"
      placeholder="Name"
      onChange={(event) => onValueChange(event.target.value)}
      disabled={disabled}
    />
  );
}