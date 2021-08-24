import { CSSProperties, ReactNode } from 'react';
import './StaticTextBox.scss';

type StaticTextBoxProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export function StaticTextBox({className='', children, style}: StaticTextBoxProps) {
  return (
    <div className={`StaticTextBox-Container ${className}`} style={style}>
      {children}      
    </div>
  )
}