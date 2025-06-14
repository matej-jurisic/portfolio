import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/ApplicationContext";
import type { SupportedLanguage } from "../i18n/i18n";
import RadioButtonList from "../ui/RadioButtonList";
import Stack from "../ui/Stack";
import styles from "./Navigation.module.css";
import ThemeButton from "./ThemeButton";

export default function Navigation() {
    const { language, setLanguage, t } = useLanguage();

    const pages = [
        {
            name: t("experience"),
            link: "/",
        },
        {
            name: t("projects"),
            link: "/projects",
        },
    ];

    return (
        <div className={styles.navigation}>
            <Stack justifyContent="space-between" direction="row" width="100%">
                <Stack direction="row" gap="30px">
                    {pages.map((p) => (
                        <span className={styles.navigationLink}>
                            <NavLink
                                key={p.link}
                                to={p.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navigationLink} ${styles.activeLink}`
                                        : styles.navigationLink
                                }
                            >
                                {p.name}
                            </NavLink>
                        </span>
                    ))}
                </Stack>
                <Stack direction="row">
                    <ThemeButton />
                    <RadioButtonList
                        options={["en", "hr"]}
                        activeValue={language}
                        onChange={(value) => {
                            setLanguage(value as SupportedLanguage);
                        }}
                    />
                </Stack>
            </Stack>
        </div>
    );
}
