import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<any>;
        id?: string;
        src?: string;
        background?: string;
        speed?: string | number;
        [key: string]: any;
      };
    }
  }
}

declare module "@lottiefiles/lottie-player"; 