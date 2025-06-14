import styles from "./Button.module.css";

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: "primary" | "secondary";
    shape?: "square" | "rounded" | "circle";
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
