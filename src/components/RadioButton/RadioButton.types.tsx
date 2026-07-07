export interface RadioButtonProps {
  /** The text label displayed next to the radio button */
  label: string;
  /** The name attribute, used to group radio buttons together */
  name: string;
  /** The value this radio button represents */
  value: string;
  /** Whether this radio button is currently selected */
  checked?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Background color of the label text area */
  backgroundColor?: string;
  /** Called when this radio button is selected */
  onChange?: (value: string) => void;
}
