import { ReactNode } from "react";
import { animated, config, useSpring } from "react-spring";
import { ReactComment } from '../ReactComment';
import './CloudSVG.scss';

type CloudSVGProps = {
  active?: boolean;
  className?: string;
  children?: ReactNode;
}

const path = 'M 24.8829 8.3655 C 26.7133 9.1085 28 10.9036 28 13 C 28 15.7558 25.7617 18 23.0006 18 L 5.9994 18 C 3.2325 18 1 15.7614 1 13 C 1 10.9491 2.2397 9.1816 4.0119 8.4115 L 4.0119 8.4115 C 4.004 8.2754 4 8.1382 4 8 C 4 4.134 7.134 1 11 1 C 13.6128 1 15.8912 2.4314 17.0938 4.5529 C 17.8206 4.1987 18.6371 4 19.5 4 C 22.1487 4 24.36 5.8722 24.8829 8.3655 L 24.8829 8.3655 L 24.8829 8.3655 Z'

export function CloudSVG({active = false, className='', children}: CloudSVGProps) {
  const { gap } = useSpring({ gap: active ? 1 : 0, config: config.slow})

  const { x } = useSpring({
    loop: true,
    from: { x: 0 },
    to: { x: 1 },
    config:{ duration: 1000 },
  })

  return (
    <>
      <svg 
        viewBox="0 0 29 19"
        className={className}
      >
        <ReactComment text={`
          icon, cloud icon by Raj Dev
          https://freeicons.io/weather-icons/icon-cloud-icon-6706
          licensed under CC BY 3.0 (https://creativecommons.org/licenses/by/3.0/)
          Path modified
        `} />
        <animated.path
          className="CloudSVG"
          strokeDasharray={gap.to(gap => "8 " + (gap * 2))} 
          strokeDashoffset={x.to(x => -x * 10)} 
          d={path}
        />
        {children}
      </svg>
    </>
  )
}
