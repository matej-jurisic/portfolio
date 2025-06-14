import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Button, { type ButtonVariant } from "../../ui/ui_button/Button";

const themeStorageKey = "theme";

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
} as const;

interface ThemeButtonProps {
    buttonVariant?: ButtonVariant;
}

export default function ThemeButton(props: ThemeButtonProps) {
    const [theme, setTheme] = useState(
        localStorage.getItem(themeStorageKey) || Theme.LIGHT
    );

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        localStorage.setItem(themeStorageKey, newTheme);
        document.documentElement.className = newTheme;
        setTheme(newTheme);
    };

    return (
        <Button
            onClick={toggleTheme}
            shape="square"
            variant={props.buttonVariant ?? "secondary"}
        >
            {theme === Theme.LIGHT ? (
                <FaMoon style={{ color: "var(--text-950)" }} />
            ) : (
                <FaSun style={{ color: "var(--text-950)" }} />
            )}
        </Button>
    );
}
