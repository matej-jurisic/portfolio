import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Controls from "../components/c_controls/Controls";
import Navigation from "../components/c_navigation/Navigation";
import Frontpage from "../pages/Frontpage";
import PostDetails from "../pages/PostDetails";
import PostList from "../pages/PostList";
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
            {<Navigation />}
            <div id="application">
                <Routes>
                    <Route path="" element={<Frontpage />} />
                    <Route path="projects" element={<ProjectList />} />
                    <Route
                        path="projects/:projectName"
                        element={<ProjectDetails />}
                    />
                    <Route path="blog" element={<PostList />} />
                    <Route path="blog/:postName" element={<PostDetails />} />
                </Routes>
            </div>
            {<Controls />}
        </>
    );
}

export default App;
