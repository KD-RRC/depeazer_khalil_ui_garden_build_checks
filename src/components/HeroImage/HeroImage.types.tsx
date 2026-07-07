export interface HeroImageProps {
  /** Background image URL */
  imageUrl: string;
  /** Headline text overlaid on the image */
  heading: string;
  /** Optional smaller text below the heading */
  subheading?: string;
  /** Color of the overlaid text */
  textColor?: string;
  /** Whether the hero image is disabled (dimmed) */
  disabled?: boolean;
}
