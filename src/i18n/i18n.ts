export type SupportedLanguage = "en" | "hr";

export const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {
        headerText: "Welcome to my portfolio website!",
        projects: "Projects",
        aboutMe: "About me",
        markdownNotFound: "The markdown file has not been found.",
        loading: "Loading",
        posts: "Blog",
    },
    hr: {
        headerText: "Dobrodošli na moj web portfolio!",
        projects: "Projekti",
        aboutMe: "O meni",
        markdownNotFound: "Markdown datoteka nije pronađena",
        loading: "Učitavanje",
        posts: "Objave",
    },
};
