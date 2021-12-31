import React from 'react';

const useWidth = () => {
  const [width, setWidth] = React.useState<undefined | number>(undefined);

  const ref = React.useRef<any>(null);
  React.useEffect(() => {
    if (ref?.current) {
      ref?.current ? setWidth(ref?.current?.offsetWidth) : setWidth(0);
    }
  }, [ref.current]);

  return {
    ref,
    width,
  };
};

export default useWidth;
