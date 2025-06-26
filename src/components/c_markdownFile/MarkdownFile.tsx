import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/ApplicationContext";

interface MarkdownFileProps {
    filePath: string;
}

const marked = new Marked(
    markedHighlight({
        emptyLangClass: "hljs",
        langPrefix: "hljs language-",
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    })
);

export default function MarkdownFile(props: MarkdownFileProps) {
    const { t } = useLanguage();

    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMarkdown = async () => {
            setError(null);
            setHtmlContent(null);

            try {
                await fetch(props.filePath).then(async (response) => {
                    const contentType = response.headers.get("Content-Type");
                    if (
                        !response.ok ||
                        (contentType && contentType.includes("text/html"))
                    ) {
                        throw new Error(t("markdownNotFound"));
                    }
                    const markdownText = await response.text();
                    const rawHtml = await marked.parse(markdownText);
                    setHtmlContent(rawHtml);
                });
            } catch (err: any) {
                setError(err.message);
            }
        };

        loadMarkdown();
    }, [t, props.filePath]);

    return (
        <div className="markdownFile">
            {error && <p className="error">{error}</p>}
            {htmlContent && (
                <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            )}
        </div>
    );
}
