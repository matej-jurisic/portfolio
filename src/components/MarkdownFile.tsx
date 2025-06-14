import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useLanguage } from "../context/ApplicationContext";

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
                        throw new Error(t("projectNotFound"));
                    }
                    const text = await response.text();
                    setMarkdownContent(text);
                });
            } catch (err: any) {
                setError(err.message);
            }
        };

        loadMarkdown();
    }, [t, props.filePath]);

    return (
        <>
            {error && <p className="error">{error}</p>}
            {markdownContent && <Markdown>{markdownContent}</Markdown>}
        </>
    );
}
