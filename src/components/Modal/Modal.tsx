import { ReactNode } from 'react';
import { animated, useTransition } from 'react-spring';
import './Modal.scss';

type ModalProps = {
  show?: boolean;
  showInitial?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Modal({show=false, showInitial=false, children, className=''}: ModalProps) {
  const transitions = useTransition(show, {
    initial: { opacity: showInitial ? 1 : 0 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
  });

  return transitions(
    (styles, item) => item && <animated.div className={`Modal ${className}`} style={styles}>{children}</animated.div>
  )
}