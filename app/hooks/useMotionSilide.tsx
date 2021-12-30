import React from 'react';
import { useMediaQuery } from 'react-responsive';
interface IPropUseSlide {
  data: any[];
}

interface IRUseSlider {
  loadingText: string;
  handleClick: (direction: number) => void;
  currentSlide: number;
  isMobile: boolean;
}
const useMotionSlide = ({ data }: IPropUseSlide): IRUseSlider => {
  const isMobile = useMediaQuery({ query: '(max-width: 770px' });

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleClick = (direction: number): void =>
    setCurrentSlide((prevState) => {
      const translate = (data?.length + prevState + direction) % data?.length;
      return isNaN(translate) ? prevState : translate;
    });

  const loadingText = '';
  return {
    loadingText,
    handleClick,
    currentSlide,
    isMobile,
  };
};

export default useMotionSlide;
