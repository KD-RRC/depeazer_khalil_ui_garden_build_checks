export interface DropdownOption {
    /** The value submitted/stored for this option */
    value: string;
    /** The text shown to the user for this option */
    label: string;
}

export interface DropdownProps {
    /** List of selectable options */
    options: DropdownOption[];
    /** Currently selected value */
    value?: string;
    /** Background color of the dropdown */
    backgroundColor?: string;
    /** Text color of the dropdown */
    textColor?: string;
    /** Whether the dropdown is disabled */
    disabled?: boolean;
    /** Called with the newly selected value when the user picks an option */
    onChange?: (value: string) => void;
  }