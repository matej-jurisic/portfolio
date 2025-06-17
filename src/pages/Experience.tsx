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
    // {
    //     name: "Kraj prijediplomskog studija na FER-u",
    //     description: "Inžinjer računarstva",
    //     date: new Date("2025-07-01"),
    //     notes: [
    //         "Završni rad: Prilagodba grafičke biblioteke LVGL za FPGA razvojnu pločicu ULX3S",
    //     ],
    // },
];

export default function Experience() {
    return (
        <Stack height="100%" justifyContent="center">
            <Timeline events={events} />
        </Stack>
    );
}
