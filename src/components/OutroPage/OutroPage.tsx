import { IconButton } from '../IconButton/IconButton';
import { StaticTextBox } from '../StaticTextBox/StaticTextBox';
import './OutroPage.scss';

type OutroPageProps = {
  onContinue?: () => void;
}

export function OutroPage({onContinue}: OutroPageProps) {
  return (
    <div className="OutroPage-Container">
      <StaticTextBox className="OutroPage-TextBox">
        <h1>
          Mehr Informationen dazu findet ihr auf dem beiliegenden Poster
        </h1>
      </StaticTextBox>
      <IconButton 
        className="OutroPage-Button"
        label="Zurück zum Start" 
        icon="SkipBackwardFill"
        onClick={onContinue}
      />
    </div> 
  );
}