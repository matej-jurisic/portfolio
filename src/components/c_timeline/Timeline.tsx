import { useLanguage } from "../../context/ApplicationContext";
import type { TimelineEvent } from "../../types/TimelineEvent";
import styles from "./Timeline.module.css";

interface TimelineProps {
    events: TimelineEvent[];
}

export default function Timeline(props: TimelineProps) {
    const { t } = useLanguage();

    return (
        <>
            <p className={styles.now}>{new Date().getFullYear()}</p>
            <div className={styles.timeline}>
                {props.events
                    .sort((a, b) => b.date.getTime() - a.date.getTime())
                    .map((event, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot} />
                            <div className={styles.timelineContent}>
                                <h3>{t(event.name)}</h3>
                                <p>{t(event.description)}</p>
                                {event.notes &&
                                    event.notes.length > 0 &&
                                    event.notes.map((n) => <li>{t(n)}</li>)}
                                <span className={styles.timelineDate}>
                                    {event.date.toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
