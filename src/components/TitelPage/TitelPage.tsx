import { ReactNode } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { StaticTextBox } from '../StaticTextBox/StaticTextBox';
import './TitelPage.scss';

type TitelPageProps = {
  children?: ReactNode;
  onContinue?: ()=>void;
}

export function TitelPage({children, onContinue}: TitelPageProps) {
  return (
    <div className="TitelPage-Container">
      <StaticTextBox className="TitelPage-TextBox">
        <h1>
          {children}
        </h1>
      </StaticTextBox>
      <IconButton
        className="TitelPage-Button"
        icon="ArrowRight"
        label="Starten"
        onClick={onContinue}
      />
    </div>
  )
}