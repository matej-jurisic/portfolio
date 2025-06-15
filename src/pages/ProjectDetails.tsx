import { useParams } from "react-router-dom";
import MarkdownFile from "../components/c_markdownFile/MarkdownFile";
import { useLanguage } from "../context/ApplicationContext";

export default function ProjectDetails() {
    const { projectName } = useParams();
    const { language } = useLanguage();

    return (
        <MarkdownFile
            filePath={`/portfolio/content/projects/${projectName}/${projectName}.${language}.md`}
        />
    );
}
