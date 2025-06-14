import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Frontpage from "../pages/Frontpage";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectList from "../pages/ProjectList";
import "./App.css";
import "./Colors.css";

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
            <Navigation />
            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route
                    path="/projects/:projectName"
                    element={<ProjectDetails />}
                />
            </Routes>
        </>
    );
}

export default App;
