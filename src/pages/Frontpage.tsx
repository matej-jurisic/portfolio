import { useLanguage } from "../context/ApplicationContext";

export default function Frontpage() {
    const { t } = useLanguage();

    return <h1>{t("headerText")}</h1>;
}
