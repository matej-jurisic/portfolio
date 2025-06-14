import styles from "./RadioButtonList.module.css";

interface ButtonListProps {
    options?: string[];
    onChange?: (value: string) => void;
    activeValue?: string;
}

export default function RadioButtonList(props: ButtonListProps) {
    return (
        <>
            <div className={styles.radioButtonList}>
                {props.options?.map((option) => (
                    <label key={option}>
                        <button
                            key={option}
                            onClick={() => props.onChange?.(option)}
                            aria-pressed={props.activeValue === option}
                            className={`${styles.radioButton} ${
                                props.activeValue === option
                                    ? styles.active
                                    : ""
                            }`}
                            type="button"
                        >
                            {option}
                        </button>
                    </label>
                ))}
            </div>
        </>
    );
}
