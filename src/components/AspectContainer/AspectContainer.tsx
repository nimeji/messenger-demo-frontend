import { ReactNode, useEffect, useRef } from 'react';
import './AspectContainer.scss';

type AspectContainerProps = {
  children?: ReactNode;
  className?: string;
  aspect?: number;
};

export function AspectContainer({children, className='', aspect=1}:AspectContainerProps) {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const resizeObserver = useRef(new ResizeObserver((entries) => {
    const {width, height} = entries[0].contentRect;

    const outerAspect = width / height;

    if(innerContainerRef.current) {
      const inner = innerContainerRef.current;
      if (aspect > outerAspect) {
        inner.style.width = `${width}px`;
        inner.style.height = `${(width / aspect)}px`;
      } else {
        inner.style.width = `${(height * aspect)}px`;
        inner.style.height = `${height}px`; 
      }
    }
  }));

  useEffect(() => {
    const observer = resizeObserver.current;

    observer.disconnect();

    if(outerContainerRef.current) {
      observer.observe(outerContainerRef.current);
    }

    return () => observer.disconnect();
  }, [resizeObserver, outerContainerRef]);

  return (
    <div ref={outerContainerRef} className={`AspectContainer-Outer ${className}`}>
      <div ref={innerContainerRef} className="AspectContainer-Inner">
        {children}
      </div>
    </div>
  );
}