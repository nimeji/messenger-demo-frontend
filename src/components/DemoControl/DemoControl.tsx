import axios from 'axios';
import { useEffect, useState } from 'react';
import { animated, useTransition, useSpringRef } from 'react-spring';
import { FormButton } from '../FormButton/FormButton';
import { FormInput } from '../FormInput/FormInput';
import { FormText } from '../FormText/FormText';
import './DemoControl.scss';

type DemoControlProps = {
  className?: string;
  onShowDemo?: (hash: string) => void;
  onFindHash?: () => void;
  onContinue?: () => void;
  onReset?: () => void;
}

export function DemoControl({
  className='',
  onShowDemo=()=>{},
  onFindHash=()=>{},
  onContinue=()=>{},
  onReset=()=>{},
}: DemoControlProps) {
  const [name, setName] = useState('');
  const [hash, setHash] = useState('');
  const [pageIndex, setPageIndex] = useState(0);


  const transRef = useSpringRef();
  const transitions = useTransition(pageIndex, {
    ref: transRef,
    keys: null,
    from: {opacity: 0},
    enter: {opacity: 1, delay: 400},
    leave: {opacity: 0},
  });
  useEffect(() => {
    transRef.start();
  }, [pageIndex, transRef]);

  const nextPage = () => {
    setPageIndex(pageIndex + 1)
  }
  const isDisabled = (i: number) => {
    return pageIndex !== i;
  }
  const confirmName = (name: string) => {
    axios.post(`${process.env.REACT_APP_API_ENCODE}`, {value: name})
    .then(response => {
      setHash(response.data.hash);
    })
  }
  const findHash = () => {
    onFindHash();
    nextPage();
  }
  const reset = () => {
    setName('');
    setHash('');
    setPageIndex(0);
    onReset();
  }

  return (
    <div className={`DemoControl-Container ${className}`}>
      {
        transitions(({opacity}, i) => {
          let Page;

          switch(i) {
            case 0:
              Page = (       
                <>
                  <h2>Gib deinen Namen ein</h2>
                  <FormInput placeholder="Name" onValueChange={(name) => setName(name)} disabled={isDisabled(i)} />
                  <FormButton 
                    onClick={() => {
                      if(name !== '') {
                        confirmName(name);
                        nextPage();
                      }
                    }} 
                    disabled={isDisabled(i)}
                  >
                    Bestätigen
                  </FormButton>
                </>
              );
              break;
            case 1:
              Page = (
                <>
                  <h2>Um die Adressbücher zu durchsuchen, müssen wir nun deinen Namen verschlüsseln</h2>
                  <FormButton onClick={nextPage} disabled={isDisabled(i)}>Namen verschlüsseln</FormButton>
                </>
              );
              break;
            case 2:
              Page = (
                <>
                  <h2>Der Hash deines Namens lautet</h2>
                  <FormText>{hash}</FormText>
                  <FormButton
                    onClick={()=>{
                      onShowDemo(hash);
                      nextPage();
                    }}
                    disabled={isDisabled(i)}
                  >
                    Weiter
                  </FormButton>
                </>
              );
              break;
            case 3:
              Page = (
                <>
                  <h2>Suche jetzt deinen Namen in den verschlüsselten Adressbüchern</h2>
                  <div className="DemoControl-LabeledText">
                    <span>Name</span>
                    <FormText>{name}</FormText>
                    <span>Hash</span>
                    <FormText>{hash}</FormText>
                  </div>
                  <FormButton onClick={findHash} disabled={isDisabled(i)}>Durchsuchen</FormButton>
                  <FormButton onClick={reset} disabled={isDisabled(i)}>Demo Zurücksetzen</FormButton>
                </>
              );
              break;
            case 4:
              Page = (
                <>
                  <div className="DemoControl-LabeledText">
                    <span>Name</span>
                    <FormText>{name}</FormText>
                    <span>Hash</span>
                    <FormText>{hash}</FormText>
                  </div>
                  <FormButton onClick={reset} disabled={isDisabled(i)}>Demo Zurücksetzen</FormButton>
                  <div className="DemoControl-Spacer" />
                  <h2>Wie funktioniert das?</h2>
                  <FormButton onClick={onContinue} disabled={isDisabled(i)}>Jetzt Ansehen</FormButton>
                </>
              );
              break;
          }

          return (
            <animated.div className="DemoControl-Wrapper" style={{opacity}}>
              {Page}
            </animated.div>
          )
        })
      }
    </div>
  );
}