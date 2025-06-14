export type SupportedLanguage = "en" | "hr";

export const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {
        headerText: "Welcome to my portfolio website!",
    },
    hr: {
        headerText: "Dobrodošli na moje web sjedište!",
    },
};
