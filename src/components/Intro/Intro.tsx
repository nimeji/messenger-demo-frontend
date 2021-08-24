import { ResponsivePlayer } from '../ResponsivePlayer/ResponsivePlayer';
import './Intro.scss';

type IntroProps = {
  onContinue?: () => void;
}

export function Intro({onContinue}: IntroProps) {
  return (
    <div className="Intro-Container">
      <div className="Intro-PlayerWrapper">
        <ResponsivePlayer url="/videos/demonstrator_intro.mp4" onContinue={onContinue} />
      </div>
    </div>
  );
}