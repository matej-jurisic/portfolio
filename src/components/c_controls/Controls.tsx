import { useLanguage } from "../../context/ApplicationContext";
import type { SupportedLanguage } from "../../i18n/i18n";
import RadioButtonList from "../../ui/ui_radioButtonList/RadioButtonList";
import Stack from "../../ui/ui_stack/Stack";
import ThemeButton from "../c_themeButton/ThemeButton";
import styles from "./Controls.module.css";

export default function Controls() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.controls}>
            <Stack direction="row" gap="10px">
                <ThemeButton buttonVariant="glass" />
                <RadioButtonList
                    options={["en", "hr"]}
                    activeValue={language}
                    onChange={(value) => {
                        setLanguage(value as SupportedLanguage);
                    }}
                    inactiveVariant="glass"
                />
            </Stack>
        </div>
    );
}
