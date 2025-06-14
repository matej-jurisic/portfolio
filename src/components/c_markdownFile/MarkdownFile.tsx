import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useLanguage } from "../../context/ApplicationContext";
import styles from "./MarkdownFile.module.css";

interface MarkdownFileProps {
    filePath: string;
}

export default function MarkdownFile(props: MarkdownFileProps) {
    const { t } = useLanguage();

    const [markdownContent, setMarkdownContent] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMarkdown = async () => {
            setError(null);

            try {
                await fetch(props.filePath).then(async (response) => {
                    const contentType = response.headers.get("Content-Type");
                    if (
                        !response.ok ||
                        (contentType && contentType.includes("text/html"))
                    ) {
                        throw new Error(t("markdownNotFound"));
                    }
                    const text = await response.text();
                    setMarkdownContent(text);
                });
            } catch (err: any) {
                setError(err.message);
                setMarkdownContent("");
            }
        };

        loadMarkdown();
    }, [t, props.filePath]);

    return (
        <div className={styles.markdownFile}>
            {error && <p className="error">{error}</p>}
            {markdownContent && <Markdown>{markdownContent}</Markdown>}
        </div>
    );
}
