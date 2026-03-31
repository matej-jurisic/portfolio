import { useLanguage } from "../../context/ApplicationContext";
import type { TimelineEvent } from "../../types/TimelineEvent";
import styles from "./Timeline.module.css";

interface TimelineProps {
    events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
    const { t } = useLanguage();
    const sorted = events.sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <div className={styles.list}>
            {sorted.map((event, i) => (
                <div key={i} className={styles.item}>
                    <div className={styles.row}>
                        <span className={styles.year}>
                            {event.date.getFullYear()}
                        </span>
                        <span>{t(event.name)}</span>
                    </div>
                    <div className={styles.detail}>
                        <p>{t(event.description)}</p>
                        {event.notes && (
                            <ul>
                                {event.notes.map((note, j) => (
                                    <li key={j}>{t(note)}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
