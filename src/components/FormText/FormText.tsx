import { ReactNode } from 'react';
import './FormText.scss';

type FormTextProps = {
  children?: ReactNode;
}

export function FormText({children}: FormTextProps) {
  return(
    <div className="FormText">
      {children}
    </div>
  );
}