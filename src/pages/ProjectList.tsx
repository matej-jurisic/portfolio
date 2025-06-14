import ProjectListItem from "../components/ProjectListItem";
import Stack from "../ui/Stack";

const projects = [
    {
        name: "lvgl_f32c",
    },
    {
        name: "weather-app",
    },
    {
        name: "face-recognition-attendance",
    },
    {
        name: "iot-temperature-logger",
    },
    {
        name: "todo-cli",
    },
];

export default function ProjectList() {
    return (
        <Stack>
            {projects.map((p) => (
                <ProjectListItem projectName={p.name} />
            ))}
        </Stack>
    );
}
