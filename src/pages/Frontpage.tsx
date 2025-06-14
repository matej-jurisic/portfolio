import { useLanguage } from "../context/ApplicationContext";
import Stack from "../ui/ui_stack/Stack";

export default function Frontpage() {
    const { t } = useLanguage();

    return (
        <Stack height="100%" justifyContent="center" alignItems="center">
            <p style={{ textAlign: "center" }}>{t("headerText")}</p>
        </Stack>
    );
}
