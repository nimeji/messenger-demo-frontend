import axios from 'axios';
import { useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { DemoControl } from '../DemoControl/DemoControl'
import { Messenger } from '../Messenger/Messenger';
import './Demo.scss';

type DemoProps = {
  className?: string;
  onContinue?: () => void;
  titles?: string[];
  icons?: (string | undefined)[];
};

type DemoData = [Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, Array<string>, Array<string>];

const chooseN = (n: number, max: number): number[] => {
  const result = [];
  while(result.length < n) {
    const r = Math.floor(Math.random() * max);
    if(result.indexOf(r) === -1) {
      result.push(r);
    }
  }

  return result;
}

export function Demo({className = '', onContinue = () => {}, titles=['','','',''], icons=[]}: DemoProps) {
  const [hash, setHash] = useState<string | undefined>(undefined);
  const [displaySelection, setDisplaySelection] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [data, setData] = useState<DemoData>([[], [], [], [], [], [], [], []]);
  const [showClouds, setShowClouds] = useState(false);
  const [showFriends, setShowFriends] = useState(false);

  const cloudStyle = useSpring({
    opacity: showClouds ? 1 : 0,
    config: config.molasses,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HASHED_NAMES}?number=${process.env.REACT_APP_NUM_HASHES}`)
    .then((response) => {
      const hashesPerArray = Math.floor(parseInt(process.env.REACT_APP_NUM_HASHES!)/8);
      const result: DemoData = [[], [], [], [], [], [], [], []];
      
      for(let i = 0; i < 8; i++) {
        for(let j = 0; j < hashesPerArray; j++) {
          result[i][j] = response.data[hashesPerArray * i + j].hash;
        }
      }

      setData(result);
    });
  }, []);

  const updateSelection = () => {
    const indices = chooseN(5, 8);
    const selection = [false, false, false, false, false, false, false, false]

    indices.forEach((value) => selection[value] = true);
    setDisplaySelection(selection);
    setShowFriends(true);
  }

  return (
    <div className={`Demo-Container ${className}`}>
      <animated.div className="Demo-CloudContainer" style={cloudStyle}>
        <Messenger 
          className="Demo-Messenger Demo-TopLeft"
          icon={icons[0]}
          title={titles[0]}
          dataLeft={data[0]}
          dataRight={data[1]}
          targetLeft={displaySelection[0] ? hash : undefined}
          targetRight={displaySelection[1] ? hash : undefined}
          showFriends={showFriends}
        />
        <Messenger
          className="Demo-Messenger Demo-TopRight"
          icon={icons[1]}
          title={titles[1]}
          dataLeft={data[2]}
          dataRight={data[3]}
          targetLeft={displaySelection[2] ? hash : undefined}
          targetRight={displaySelection[3] ? hash : undefined}
          showFriends={showFriends}
        />
        <Messenger
          className="Demo-Messenger Demo-BottomLeft"
          icon={icons[2]}
          title={titles[2]}
          dataLeft={data[4]}
          dataRight={data[5]}
          targetLeft={displaySelection[4] ? hash : undefined}
          targetRight={displaySelection[5] ? hash : undefined}
          showFriends={showFriends}
        />
        <Messenger
          className="Demo-Messenger Demo-BottomRight"
          icon={icons[3]}
          title={titles[3]}
          dataLeft={data[6]}
          dataRight={data[7]}
          targetLeft={displaySelection[6] ? hash : undefined}
          targetRight={displaySelection[7] ? hash : undefined}
          showFriends={showFriends}
        />
      </animated.div>
      <DemoControl
        className="Demo-Controls"
        onShowDemo={(h)=>{
          setShowClouds(true);
          setHash(h);
        }}
        onFindHash={updateSelection}
        onReset={()=>{
          setHash('');
          setDisplaySelection([false, false, false, false, false, false, false, false]);
          setShowFriends(false);
          setShowClouds(false);
        }}
        onContinue={onContinue}
      />
    </div>
  );
}
