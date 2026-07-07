export interface ButtonProps {
  /** The text displayed inside the button */
  label: string;
  /** Background color of the button (any valid CSS color) */
  backgroundColor?: string;
  /** Text color of the button */
  textColor?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Function called when the button is clicked */
  onClick?: () => void;
}
