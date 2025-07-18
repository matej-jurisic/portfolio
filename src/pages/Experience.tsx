import Timeline from "../components/c_timeline/Timeline";
import type { TimelineEvent } from "../types/TimelineEvent";
import Stack from "../ui/ui_stack/Stack";

const events: TimelineEvent[] = [
    {
        name: "ferStart",
        description: "ferDesc",
        date: new Date("2022-10-01"),
    },
    {
        name: "tsrbEnd",
        description: "tsrbDesc",
        date: new Date("2022-05-15"),
        notes: ["tsrbFinProj"],
    },
    {
        name: "adnetStart",
        description: "adnetDesc",
        date: new Date("2023-12-01"),
        notes: ["adnetRailways"],
    },
    {
        name: "ferEnd",
        description: "univ. bacc. eng. comp",
        date: new Date("2025-07-01"),
        notes: ["ferBaccFinProj"],
    },
    {
        name: "ferMStart",
        description: "compSci",
        date: new Date("2025-07-01"),
    },
];

export default function Experience() {
    return (
        <Stack height="100%" justifyContent="center">
            <Timeline events={events} />
        </Stack>
    );
}
