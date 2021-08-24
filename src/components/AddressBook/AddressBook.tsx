import React from 'react';
import { animated, config, useChain, useSpring, useSpringRef } from 'react-spring';
import { ReactComment } from '../ReactComment';
import { InfiniteList } from '../InfiniteList/InfiniteList';
import './AddressBook.scss';

const AnimatedInfiniteList = animated(InfiniteList);

type AddressBookProps = {
  className?: string;
  title?: string;
  data?: string[];
  target?: string;
  reversed?: boolean;
}

export const AddressBook = React.memo(({
  className='',
  title='',
  data=[],
  target,
  reversed=false,
}: AddressBookProps) => {
  const xRef = useSpringRef()
  const { x } = useSpring({
    loop: target ? false : true,
    from: {x: 0},
    to: {x: target ? ((data.length + 1) * 7 + (reversed ? 3.5 : -3.5)) : data.length},
    config: target ? config.molasses : { duration: 5000 },
    reset: !target,
    ref: xRef,
  });

  const colorRef = useSpringRef();
  const { color } = useSpring({
    from: {color: 'black'},
    to: {color: target ? 'red' : 'black'},
    ref: colorRef,
  });

  useChain([xRef, colorRef], [0, target ? 1 : 0]);

  const elements = data.map((hash, hashIndex) => <div key={hashIndex}>{hash}</div>)
  if(target) {
    elements.push(<animated.div key="t" style={{color: color}}>{target}</animated.div>)
  }


  return (
    <svg className={className} viewBox="0 -20 180 148">
      <text x="50%" y="-5" className="AddressBook-SVGTitle">{title}</text>
      <ReactComment text={`
        book, education, knowledge, study icon by MD Badsha Meah
        https://freeicons.io/education/book-education-knowledge-study-icon-38358
        Licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/)
        Scale modified
      `} />
      <path 
        className="AddressBook-SVG"
        d="M 167.3858 32.7182 a 3.8374 2.741 0 0 0 -3.8203 -2.4825 h -5.6742 l -0.6822 -5.1161 L 155.0359 8.7206 c -22.9746 1.0227 -45.1006 4.7393 -65.4339 14.164 C 69.2647 13.4599 47.1388 9.7432 24.1641 8.7206 L 21.9908 25.1197 l -0.6821 5.1161 H 15.6306 a 3.8374 2.741 0 0 0 -3.8203 2.4826 l -9.3597 70.601 l 87.1474 15.96 l 87.1514 -15.96 Z M 31.7509 25.1197 l 1.1779 -8.8865 c 16.3595 1.3399 30.2918 4.2294 42.7805 8.8865 q 4.4141 1.6444 8.6021 3.5863 l 3.2997 1.5297 l 1.9909 0.9235 l 1.9909 -0.9235 l 3.2957 -1.5297 q 4.194 -1.9462 8.5981 -3.5863 c 12.4927 -4.6571 26.425 -7.5466 42.7845 -8.8865 l 1.1779 8.8865 l 0.6782 5.1161 l 0.2221 1.6827 l 0.9042 6.7987 l 7.0038 52.829 A 176.7779 126.2699 0 0 0 122.3447 94.0136 C 109.4673 95.9852 98.68 99.192 89.602 103.767 a 87.7069 62.6478 0 0 0 -32.7467 -9.7534 a 176.4604 126.0431 0 0 0 -33.9127 -2.4674 l 7.0038 -52.829 l 0.9042 -6.7987 l 0.2221 -1.6827 Z M 14.1581 98.4441 c 28.7173 -0.1133 55.6381 1.9631 74.6468 13.674 Z m 76.245 13.6711 c 19.0048 -11.708 45.9255 -13.7844 74.6388 -13.6711 Z"
      />
      <defs>
        <clipPath id="book-clippath">
          <path d="M 31.7509 25.1197 l 1.1779 -8.8865 c 16.3595 1.3399 30.2918 4.2294 42.7805 8.8865 q 4.4141 1.6444 8.6021 3.5863 l 3.2997 1.5297 l 1.9909 0.9235 l 1.9909 -0.9235 l 3.2957 -1.5297 q 4.194 -1.9462 8.5981 -3.5863 c 12.4927 -4.6571 26.425 -7.5466 42.7845 -8.8865 l 1.1779 8.8865 l 0.6782 5.1161 l 0.2221 1.6827 l 0.9042 6.7987 l 7.0038 52.829 A 176.7779 126.2699 0 0 0 122.3447 94.0136 C 109.4673 95.9852 98.68 99.192 89.602 103.767 a 87.7069 62.6478 0 0 0 -32.7467 -9.7534 a 176.4604 126.0431 0 0 0 -33.9127 -2.4674 l 7.0038 -52.829 l 0.9042 -6.7987 l 0.2221 -1.6827 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#book-clippath)">
        <foreignObject className="AddressBook-Content">
          <AnimatedInfiniteList idx={x.to(x => reversed ? -x : x)}>
            {elements}
          </AnimatedInfiniteList>
        </foreignObject>
      </g>
    </svg>
  );
});
