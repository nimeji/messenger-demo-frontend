import './InfiniteList.scss';

type InfiniteListProps = {
  idx?: number;
  children?: JSX.Element[];
}

function mod(n: number, m: number) {
  return (( n % m) + m) % m;
}

/**
 * Renders an infinitly repeatable list.
 * Assumes all elements are of equal height.
 * @param idx Index of the top most element 
 */
export function InfiniteList({idx = 0, children = []}: InfiniteListProps) {

  return (
    <div className="InfiniteList-Container">
      {children.map((child, index) => {
        const len = children.length;
        const x = mod(index - idx + 1, len);

        return (
          <div 
            key={index}
            className="InfiniteList-Element" 
            style={{transform: `translateY(calc(-100% + ${x} * 100%))`}}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
