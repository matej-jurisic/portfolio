import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MarkdownFile from "../components/c_markdownFile/MarkdownFile";
import { useLanguage } from "../context/ApplicationContext";

const BASE_TITLE = "Matej Jurisic";

export default function ProjectDetails() {
    const { projectName } = useParams();
    const { language } = useLanguage();

    useEffect(() => {
        return () => {
            document.title = BASE_TITLE;
        };
    }, []);

    return (
        <MarkdownFile
            filePath={`/content/projects/${projectName}/${projectName}.${language}.md`}
            onTitle={(title) => {
                document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
            }}
        />
    );
}
