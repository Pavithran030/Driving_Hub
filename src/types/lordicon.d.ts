declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      trigger?: string;
      state?: string;
      colors?: string;
      delay?: string;
      stroke?: string;
      style?: React.CSSProperties;
    };
  }
}
