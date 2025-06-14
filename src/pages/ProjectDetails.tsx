import { useParams } from "react-router-dom";
import MarkdownFile from "../components/MarkdownFile";
import { useLanguage } from "../context/ApplicationContext";

export default function ProjectDetails() {
    const { projectName } = useParams();
    const { t, language } = useLanguage();

    return (
        <>
            {projectName && <h2>{t(projectName)}</h2>}
            {
                <MarkdownFile
                    filePath={`/content/projects/${language}/${projectName}.md`}
                />
            }
        </>
    );
}
