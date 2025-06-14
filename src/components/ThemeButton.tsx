import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Button from "../ui/Button";

const themeStorageKey = "theme";

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
} as const;

export default function ThemeButton() {
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
        <Button onClick={toggleTheme} shape="circle" variant="secondary">
            {theme === Theme.LIGHT ? <FaMoon /> : <FaSun />}
        </Button>
    );
}
