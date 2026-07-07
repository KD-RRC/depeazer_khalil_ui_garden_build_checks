export interface ImgProps {
    /** Image source URL */
    src: string;
    /** Alt text for accessibility */
    alt: string;
    /** Width of the image (CSS value, e.g. "100%", "300px") */
    width?: string;
    /** Whether the image is disabled (greyed out) */
    disabled?: boolean;
  }