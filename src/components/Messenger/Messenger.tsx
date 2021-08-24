import { CloudSVG } from '../CloudSVG/CloudSVG';
import { AddressBook } from '../AddressBook/AddressBook';
import './Messenger.scss';
import { AspectContainer } from '../AspectContainer/AspectContainer';
import { animated, config, useSpring } from 'react-spring';

type MessengerProps = {
  className?: string;
  icon?: string;
  title?: string;
  dataLeft?: string[];
  targetLeft?: string;
  dataRight?: string[];
  targetRight?: string;
  showFriends?: boolean;
}

export function Messenger({
  className='',
  icon,
  title = '', 
  dataLeft = [],
  targetLeft,
  dataRight = [],
  targetRight,
  showFriends = false,
}: MessengerProps) {

  const subtitleStyle = useSpring({
    opacity: showFriends ? 1 : 0,
    config: config.molasses,
    delay: 2000,
  });

  return (
    <AspectContainer className={className} aspect={29/19}>
      <div className="Messenger-Container">
        <CloudSVG className="Messenger-Cloud" active={true}>
          {icon !== undefined && <image x="6" y="5" width="4" height="4" href={require(`../../assets/icons/${icon}`).default} />}
          <text x="16.5" y="8" className="Messenger-SVGTitle">{title}</text>
          <animated.text x="12" y="10" className="Messenger-SVGSubtitle" style={subtitleStyle}>Freunde: {(targetRight ? 1 : 0) + (targetLeft ? 1 : 0)}</animated.text>
        </CloudSVG>
        <div className="Messenger-Content">
          <AddressBook
            className="Messenger-AddressBook Messenger-AddressBook-Left"
            data={dataLeft}
            target={targetLeft}
          />
          <AddressBook
            className="Messenger-AddressBook Messenger-AddressBook-Right"
            data={dataRight}
            target={targetRight}
            reversed
          />
        </div>
      </div> 
    </AspectContainer>
  );
}