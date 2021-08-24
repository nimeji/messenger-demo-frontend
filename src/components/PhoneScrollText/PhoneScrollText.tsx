import { CSSProperties, useEffect, useState } from 'react';
import { Phone } from 'react-bootstrap-icons';
import { AspectContainer } from '../AspectContainer/AspectContainer';
import './PhoneScrollText.scss';

type PhoneScrollTextProps = {
  className?: string;
  style?: CSSProperties;
}

const fontSize = 0.75;
const pathLength = 35;
const numChars = Math.floor(pathLength / fontSize);
const path = `
M0.5,${5-pathLength}
L0.5,5
M0.5,${5-pathLength}
L0.5,5
`

export function PhoneScrollText({className='', style}: PhoneScrollTextProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    let result = '';
    const characters = '01';
    const charactersLength = characters.length;
    for(let i = 0; i < numChars; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    setText(result);
  }, []);

  return (
    <div className={`PhoneScrollText-Wrapper ${className}`} style={style}>
      <AspectContainer aspect={1/2}>
      

        <svg className="PhoneScrollText-TextContainer" viewBox="0 0 1 5">

          <path id="path" fill="none" d={path} />


          <text fontSize={fontSize}>
            <textPath href="#path" textLength={pathLength}>
              {text}
              <animate attributeType="XML" attributeName="startOffset" values={`${pathLength}; 0`} dur="10s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>

        <Phone className="PhoneScrollText-Phone" />
      
      </AspectContainer>
    </div>
  );
}

/*
          <text x="0.5" fontSize="1">01011011011100100111
            <animate attributeType="XML" attributeName="y" values="5; -30" dur="10s" repeatCount="indefinite"/>
          </text>
          <text x="0.5" fontSize="1">01000
            <animate attributeType="XML" attributeName="y" values="5; -30" dur="10s" begin="8s" repeatCount="indefinite"/>
          </text>
*/

/*
        <defs>  
          <linearGradient id="gradient" y2="1" x2="0">  
            <stop offset="0.89" stop-color="white" stop-opacity="0" />
            <stop offset="0.95" stop-color="white" stop-opacity="1" />
            <stop offset="1.0" stop-color="white" stop-opacity="1" />  
          </linearGradient>

          <mask id="gradient-mask" maskContentUnits="objectBoundingBox">  
            <rect x="0" y="0" width="1" height="1" fill="url(#gradient)"  />  
          </mask>  
        </defs>
*/