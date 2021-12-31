import { RefObject, useState } from 'react';
import { useEventListener } from 'usehooks-ts/dist/useEventListener';

function useFocus<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const [value, setValue] = useState<boolean>(false);

  const focus = () => setValue(true);
  const blur = () => setValue(false);

  useEventListener('focus', focus, elementRef);
  useEventListener('blur', blur, elementRef);

  return value;
}

export default useFocus;
