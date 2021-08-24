import { ResponsivePlayer } from '../ResponsivePlayer/ResponsivePlayer';
import './Explanation.scss';

type ExplanationProps = {
  onContinue?: () => void;
}

export function Explanation({onContinue}: ExplanationProps) {
  return (
    <div className="Explanation-Container">
      <div className="Explanation-PlayerWrapper">
        <ResponsivePlayer url="/videos/demonstrator_explanation.mp4" onContinue={onContinue} />
      </div>
    </div>
  );
}