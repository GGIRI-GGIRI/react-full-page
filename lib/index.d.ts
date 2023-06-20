import { InferType } from "prop-types";

declare module 'react-full-page' {
  interface FullPageState {
    activeSlide: number;
    slidesCount: number;
  }

  type ControlsProps = InferType<typeof Controls.propTypes>;
  type FullPageProps = InferType<typeof FullPage.propTypes>;
  type SlideProps = InferType<typeof Slide.propTypes>;

  export class Controls extends React.Component<ControlsProps> {
    renderSlidesNumbers(currentSlideIndex: number): HTMLButtonElement[];
    render(): React.ReactNode;
  }

  export const Slide= (props: SlideProps) => React.ReactNode;

  export class FullPage extends React.Component<FullPageProps, FullPageState> {
    static getChildrenCount: (children: React.ReactNode[]) => number;
    _isScrollPending: boolean;
    _isScrolledAlready: boolean;
    _slides: number[];
    _touchSensitivity: number;
    _touchStart: number;
    _isMobile: boolean | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<FullPageProps>, prevState: Readonly<FullPageState>, snapshot?: any): void;
    componentWillUnmount(): void;
    updateSlides: () => void;
    onResize: () => void;
    onTouchStart: (evt: TouchEvent) => void;
    onTouchMove: (evt: TouchEvent) => void;
    onScroll: (evt: Event) => void;
    getSlidesCount: () => number;
    getCurrentSlideIndex: () => number;
    scrollNext: () => void;
    scrollPrev: () => void;
    scrollToSlide: (slide: number) => void;
    renderControls(): React.ReactNode;
    render(): React.ReactNode;
  }

  export function isMobileDevice(): boolean | null;
  export const getObjectValues: (obj: { [key: string]: any }) => any[];
  export function easeInOutCubic(currentTime: number, startValue: number, changeInValue: number, duration: number): number;
  export function animatedScrollTo(scrollTo: number, duration: number, callback: () => void): void;
}

