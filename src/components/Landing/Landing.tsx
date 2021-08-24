import { useEffect } from 'react';
import { animated, config, useSpring, useSprings } from 'react-spring';
import { BackgroundClouds } from '../BackgroundClouds/BackgroundClouds';
import { IconButton } from '../IconButton/IconButton';
import { PhoneScrollText } from '../PhoneScrollText/PhoneScrollText';
import { StaticTextBox } from '../StaticTextBox/StaticTextBox';
import './Landing.scss';

const AnimatedPhoneScrollText = animated(PhoneScrollText);
const AnimatedStaticTextBox = animated(StaticTextBox);
const AnimatedIconButton = animated(IconButton);

type LandingProps = {
  onClick?: () => void;
};

const revealDelay = 1000;

export function Landing({onClick}: LandingProps) {

  const [phoneSprings, phoneSpringsApi] = useSprings(3, index => ({opacity: 0}));
  const [textBoxStyle, textBoxStyleApi] = useSpring(() => ({opacity: 0}));
  const [continueButtonStyle, continueButtonStyleApi] = useSpring(() => ({opacity: 0}));

  useEffect(() => {
    phoneSpringsApi.start(index => ({
      opacity: 1, 
      delay: (0.5+index)*revealDelay,
      config: config.molasses,
    }));
    textBoxStyleApi.start(() => ({
      opacity: 1,
      delay: 4*revealDelay,
      config: config.molasses,
    }));
    continueButtonStyleApi.start(() => ({
      opacity: 1,
      delay: 4*revealDelay + 4000,
      config: config.molasses,
    }));
  }, [phoneSpringsApi, textBoxStyleApi, continueButtonStyleApi]);

  return (
    <div className="Landing-Container">
      <h1 className="Landing-Heading">ChooseYourMessenger.com</h1>
      <div className="Landing-Phones">
        {phoneSprings.map((styles, index) => <AnimatedPhoneScrollText key={index} style={styles} />)}
      </div>      
      <AnimatedStaticTextBox className="Landing-TextBox" style={textBoxStyle}>
        <h2>
          Tausende Menschen haben ihre Messenger-Adressbücher verschlüsselt hochgeladen.<br /><br />
          Durchsuche sie nach deinem Namen!
        </h2>
      </AnimatedStaticTextBox>
      <AnimatedIconButton 
        className="Landing-ContinueButton"
        style={continueButtonStyle}
        icon="ArrowRight"
        label="Los"
        onClick={onClick}
      />

      
      <BackgroundClouds />
    </div>
  );
}