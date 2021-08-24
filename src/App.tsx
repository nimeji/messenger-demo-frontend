import { animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { useSpringRef, useTransition } from 'react-spring';
import { PageIndicator } from './components/PageIndicator/PageIndicator';
import { Demo } from './components/Demo/Demo';
import { Landing } from './components/Landing/Landing';
import { Intro } from './components/Intro/Intro';
import { Explanation } from './components/Explanation/Explanation';


import './App.scss';
import { TitelPage } from './components/TitelPage/TitelPage';
import { OutroPage } from './components/OutroPage/OutroPage';

const pages: ((props: { onContinue: () => void }) => React.ReactElement)[] = [
  ({ onContinue }) => <TitelPage onContinue={onContinue}>Datenschutzfreundliche Duplikaterkennung</TitelPage>,
  ({ onContinue }) => <Intro onContinue={onContinue} />,
  ({ onContinue }) => <Landing onClick={onContinue} />,
  ({ onContinue }) => <Demo 
                        onContinue={onContinue} 
                        icons={['Telegram-Logo.svg', 'Signal-Logo.svg', 'Threema-Logo.svg', 'Viber-Logo.svg']} 
                        titles={['Telegram', 'Signal', 'Threema', 'Viber']}
                      />,
  ({ onContinue }) => <Explanation onContinue={onContinue} />,
  ({ onContinue }) => <OutroPage onContinue={onContinue} />,
];

function App() {
  const [index, setIndex] = useState(0);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {opacity: 0, transform: 'translate3d(0, 100%, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0%, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, -100%, 0)'},
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  useEffect(() => {
    let resetTimer: NodeJS.Timeout;
    if (index === pages.length-1) {
      resetTimer = setTimeout(() => setIndex(0), 1000*30);
    }

    return () => {
      if(resetTimer) {
        clearTimeout(resetTimer);
      }
    }
  }, [index])

  const setPage = (i: number) => {
    if(index === i) return;
    setIndex(Math.min(pages.length - 1, Math.max(0, i)));
  }

  return (
    <div className="App-OuterContainer">
      <div className="App-InnerContainer">
        <div className="App-ContentContainer">
          {
            transitions((style, i) => {
              const Page = pages[i];
              return (
                <animated.div className="App-ContentWrapper" style={style}>
                  <Page onContinue={() => {
                    if (i === pages.length - 1) {
                      setPage(0);
                    } else {
                      setPage(i+1)
                    }
                  }} 
                  />
                </animated.div>
              )
            })
          }
        </div>
        <PageIndicator
          numPages={pages.length}
          selectedPage={index}
          onPageChange={(pageNumber) => setIndex(pageNumber)}
          onPageNext={() => setPage(index+1)}
          onPagePrevious={() => setPage(index-1)}
        />
      </div>
    </div>
  );
}

export default App;
