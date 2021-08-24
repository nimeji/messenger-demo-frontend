import { CSSProperties, ReactNode } from 'react';
import './FormButton.scss';

type FormButtonProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: ()=>void;
  disabled?: boolean;
}

export function FormButton({
  className='',
  style,
  children,
  onClick,
  disabled=false,
}: FormButtonProps) {
  return (
    <button className={`FormButton ${className}`} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}