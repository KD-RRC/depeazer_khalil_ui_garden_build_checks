export interface CardProps {
  /** Title displayed at the top of the card */
  title: string;
  /** Description text displayed below the title */
  description: string;
  /** Optional image URL displayed above the title */
  imageUrl?: string;
  /** Background color of the card */
  backgroundColor?: string;
  /** Whether the card is disabled (visually muted) */
  disabled?: boolean;
}
