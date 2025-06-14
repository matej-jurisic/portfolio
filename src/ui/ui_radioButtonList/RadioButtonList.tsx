import type { ButtonVariant } from "../ui_button/Button";
import buttonStyles from "../ui_button/Button.module.css";
import styles from "./RadioButtonList.module.css";

interface ButtonListProps {
    options?: string[];
    onChange?: (value: string) => void;
    activeValue?: string;
    activeVariant?: ButtonVariant | undefined;
    inactiveVariant?: ButtonVariant | undefined;
}

export default function RadioButtonList(props: ButtonListProps) {
    const getButtonClass = (isActive: boolean): string => {
        const variant = isActive
            ? props.activeVariant ?? "primary"
            : props.inactiveVariant ?? "secondary";
        return buttonStyles[variant] ?? "";
    };

    return (
        <>
            <div className={styles.radioButtonList}>
                {props.options?.map((option) => (
                    <button
                        key={option}
                        onClick={() => props.onChange?.(option)}
                        aria-pressed={props.activeValue === option}
                        className={`${buttonStyles.button} ${getButtonClass(
                            props.activeValue === option
                        )}`}
                        type="button"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </>
    );
}
