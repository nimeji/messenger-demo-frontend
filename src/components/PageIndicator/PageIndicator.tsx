import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './PageIndicator.scss';

type PageIndicatorProps = {
  className?: string;
  numPages?: number;
  selectedPage?: number;
  onPageChange?: (pageNumber: number) => void;
  onPagePrevious?: () => void;
  onPageNext?: () => void;
}

export function PageIndicator({
  className='', 
  numPages=1, 
  selectedPage=0, 
  onPageChange=()=>{},
  onPagePrevious,
  onPageNext,
}: PageIndicatorProps) {
  const indicators: JSX.Element[] = [];
  for(let i = 0; i < numPages; i++) {
    indicators[i] = <button 
                      key={i} 
                      className={`PageIndicator-PageButton ${selectedPage === i ? 'PageIndicator-PageButtonSelected' : ''}`} 
                      onClick={() => onPageChange(i)} 
                    />
  }

  return (
    <div className={`PageIndicator-Container ${className}`}>
      <button className="PageIndicator-Control" onClick={onPagePrevious}><ChevronLeft className="PageIndicator-Chevron"/></button>
      {
        indicators
      }
      <button className="PageIndicator-Control" onClick={onPageNext}><ChevronRight className="PageIndicator-Chevron"/></button>
    </div>
  );
}