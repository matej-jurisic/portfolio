import ThemeButton from "../components/ThemeButton";
import { useLanguage } from "../context/ApplicationContext";
import type { SupportedLanguage } from "../i18n/i18n";
import RadioButtonList from "../ui/RadioButtonList";
import Stack from "../ui/Stack";

export default function Frontpage() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="frontpage">
            <Stack alignItems="center">
                <h1>{t("headerText")}</h1>
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
