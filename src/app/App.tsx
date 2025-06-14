import { useEffect } from "react";
import { LanguageProvider } from "../context/ApplicationContext";
import Frontpage from "../pages/Frontpage";
import "./App.css";

function App() {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.documentElement.className = savedTheme;
        } else {
            document.documentElement.className = "light-theme";
        }
    });

    return (
        <>
            <LanguageProvider>
                <Frontpage />
            </LanguageProvider>
        </>
    );
}

export default App;
