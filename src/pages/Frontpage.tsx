import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/ApplicationContext";
import Stack from "../ui/ui_stack/Stack";

export default function Frontpage() {
    const { t } = useLanguage();

    return (
        <Stack height="100%" justifyContent="center" alignItems="center">
            <p style={{ textAlign: "center", margin: 0 }}>{t("headerText")}</p>
            <Stack direction="row" gap="8px">
                <a href="https://github.com/matej-jurisic">
                    <FaGithub size={25} />
                </a>
                <a href="https://linkedin.com/in/matej-jurišić-026586240">
                    <FaLinkedin size={25} />
                </a>
            </Stack>
        </Stack>
    );
}
