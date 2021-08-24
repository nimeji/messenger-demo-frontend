import './IconButton.scss';
import * as RBI from 'react-bootstrap-icons';
import { CSSProperties } from 'react';

type IconButtonProps = {
  icon: keyof typeof RBI;
  label?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function IconButton({icon, label = '', className='', style, onClick}: IconButtonProps) {
  const Icon = RBI[icon]

  return (
    <div className={`IconButton-Container ${className}`} style={style}>
      <button className="IconButton-Button" onClick={onClick}>
        <Icon className="IconButton-Icon" />
      </button>
      <div>
        {label}
      </div>
    </div>
  );
}