import ProjectListItem from "../components/c_projectListItem/ProjectListItem";
import Stack from "../ui/ui_stack/Stack";

const projects = [
    {
        name: "lvgl_f32c",
    },
];

export default function ProjectList() {
    return (
        <Stack height="100%" justifyContent="center">
            {projects.map((p) => (
                <ProjectListItem projectName={p.name} />
            ))}
        </Stack>
    );
}
