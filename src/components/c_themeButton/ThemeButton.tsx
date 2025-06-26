import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Button, { type ButtonVariant } from "../../ui/ui_button/Button";

const themeStorageKey = "theme";

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
} as const;

const HighlightThemes = {
    LIGHT: "atom-one-light",
    DARK: "atom-one-dark",
} as const;

interface ThemeButtonProps {
    buttonVariant?: ButtonVariant;
}

export default function ThemeButton(props: ThemeButtonProps) {
    const [theme, setTheme] = useState(
        localStorage.getItem(themeStorageKey) || Theme.LIGHT
    );

    const loadHighlightTheme = async (themeName: string) => {
        const existingLinks = document.querySelectorAll(
            "link[data-highlight-theme]"
        );
        existingLinks.forEach((link) => link.remove());

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${themeName}.min.css`;
        link.setAttribute("data-highlight-theme", themeName);
        document.head.appendChild(link);
    };

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        localStorage.setItem(themeStorageKey, newTheme);
        document.documentElement.className = newTheme;
        setTheme(newTheme);
    };

    useEffect(() => {
        const highlightTheme =
            theme === Theme.LIGHT
                ? HighlightThemes.LIGHT
                : HighlightThemes.DARK;
        loadHighlightTheme(highlightTheme);
    }, [theme]);

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
