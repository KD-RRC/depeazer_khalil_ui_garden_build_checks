export interface TextProps {
  /** The text content to display */
  content: string;
  /** Text color */
  textColor?: string;
  /** Background color (transparent by default) */
  backgroundColor?: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Whether the text is disabled (visually muted) */
  disabled?: boolean;
}
