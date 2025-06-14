import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { translations, type SupportedLanguage } from "../i18n/i18n";

const languageStorageKey = "lang";

interface LanguageContextType {
    language: SupportedLanguage;
    setLanguage: (lang: SupportedLanguage) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<SupportedLanguage>(
        () =>
            (localStorage.getItem(languageStorageKey) as SupportedLanguage) ||
            "en"
    );

    useEffect(() => {
        localStorage.setItem(languageStorageKey, language);
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
