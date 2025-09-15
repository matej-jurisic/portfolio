import ProjectListItem from "../components/c_projectListItem/ProjectListItem";
import type { ProjectInfo } from "../types/ProjectInfo";
import Stack from "../ui/ui_stack/Stack";

const projects: ProjectInfo[] = [
    {
        name: "lvgl_f32c",
        pathName: "lvgl_f32c",
    },
    {
        name: "logisim_cpu",
        pathName: "logisim_cpu",
    },
    {
        name: "operum",
        pathName: "operum"
    }
];

export default function ProjectList() {
    return (
        <Stack height="100%" justifyContent="center">
            {projects.map((p) => (
                <ProjectListItem projectInfo={p} />
            ))}
        </Stack>
    );
}
