export type SupportedLanguage = "en" | "hr";

export const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {
        headerText: "Matej Jurišić",
        projects: "Projects",
        aboutMe: "About me",
        markdownNotFound: "The markdown file has not been found.",
        loading: "Loading",
        posts: "Blog",
    },
    hr: {
        headerText: "Matej Jurišić",
        projects: "Projekti",
        aboutMe: "O meni",
        markdownNotFound: "Markdown datoteka nije pronađena",
        loading: "Učitavanje",
        posts: "Objave",
    },
};
