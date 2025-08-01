import { useParams } from "react-router-dom";
import MarkdownFile from "../components/c_markdownFile/MarkdownFile";
import { useLanguage } from "../context/ApplicationContext";

export default function PostDetails() {
    const { postName } = useParams();
    const { language } = useLanguage();

    return (
        <>
            <MarkdownFile
                filePath={`/content/blog/${postName}/${postName}.${language}.md`}
            />
        </>
    );
}
