import {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

interface ReactCommentProps {
  text?: string;
}

export function ReactComment(props:ReactCommentProps) {
  const { text } = props;
  const domRef = useRef(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const el = ReactDOM.findDOMNode(domRef.current) as Element;
    ReactDOM.unmountComponentAtNode(el);
    el.outerHTML = `<!--${text}-->`;
  }, [])

  return <div ref={domRef} />;
}

export default ReactComment;