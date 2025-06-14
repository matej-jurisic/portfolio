import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "glass";
export type ButtonShape = "square" | "rounded" | "circle";

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    shape?: ButtonShape;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${
                styles[props.variant || "primary"]
            } ${styles[props.shape || "square"]}`}
            onClick={props.onClick}
        >
            {props.children ?? ""}
        </button>
    );
}
