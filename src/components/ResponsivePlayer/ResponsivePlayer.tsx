import ReactPlayer from 'react-player';
import { Modal } from '../Modal/Modal';
import { IconButton } from '../IconButton/IconButton';
import { useCallback, useRef, useState } from 'react';
import { AspectContainer } from '../AspectContainer/AspectContainer';
import './ResponsivePlayer.scss';


type ResponsivePlayerProps = {
  url: string;
  className?: string;
  onContinue?: () => void;
}

export function ResponsivePlayer({url, className='', onContinue}: ResponsivePlayerProps) {
  const [started, setStarted] = useState(false);
  const [play, setPlay] = useState(false);
  const [ended, setEnded] = useState(false);

  const playerRef = useRef<ReactPlayer>(null);

  const handleEnded = useCallback(() => {
    setEnded(true);
  }, []);

  return (
    <AspectContainer className={className} aspect={16/9}>
      <div className="ResponsivePlayer-PlayerContainer">
        <ReactPlayer
          url={url}
          controls={started && !ended}
          playing={play}
          onEnded={handleEnded}
          ref={playerRef}
          width="100%"
          height="100%"
        />
      </div>
      <Modal show={!started} showInitial={true} >
      <div className="ResponsivePlayer-Controls">
        <IconButton 
          className="ResponsivePlayer-IconButton"
          icon="PlayFill"
          label="Abspielen"
          onClick={() => {
            setStarted(true)
            setPlay(true);
          }}
        />
      </div>
      </Modal>
      <Modal show={ended}>
        <div className="ResponsivePlayer-Controls">
          <IconButton 
            className="ResponsivePlayer-IconButton"
            icon="ArrowRepeat"
            label="Wiederholen"
            onClick={() => {
              if (playerRef.current === null) return;
              playerRef.current.seekTo(0);
              setEnded(false);
              setPlay(true);
            }}
          />
          <IconButton 
            className="ResponsivePlayer-IconButton"
            icon="ArrowRightShort"
            label="Weiter"
            onClick={onContinue}
          />
        </div>
      </Modal>
    </AspectContainer>
  );
}
