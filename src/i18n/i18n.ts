export type SupportedLanguage = "en" | "hr";

export const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {
        headerText: "Welcome to my portfolio website!",
        projects: "Projects",
        experience: "Experience",
        projectNotFound: "The project description has not been found.",
        loading: "Loading",
    },
    hr: {
        headerText: "Dobrodošli na moje web sjedište!",
        projects: "Projekti",
        experience: "Iskustvo",
        projectNotFound: "Projekt nije pronađen",
        loading: "Učitavanje",
    },
};
