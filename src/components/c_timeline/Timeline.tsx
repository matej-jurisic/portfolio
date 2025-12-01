import { useState } from "react";
import { useLanguage } from "../../context/ApplicationContext";
import type { TimelineEvent } from "../../types/TimelineEvent";
import styles from "./Timeline.module.css";

interface TimelineProps {
    events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
    const { t } = useLanguage();
    const sorted = events.sort((a, b) => b.date.getTime() - a.date.getTime());
    const [selected, setSelected] = useState(0);
    const current = sorted[selected];

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div
                    className={styles.line}
                    style={{
                        height: `${(selected / sorted.length) * 100}%`,
                    }}
                />
                {sorted.map((event, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className={styles.navItem}
                        style={{ opacity: selected === i ? 1 : 0.6 }}
                    >
                        <div className={styles.year}>
                            {event.date.getFullYear()}
                        </div>
                        <h3>{t(event.name)}</h3>
                    </button>
                ))}
            </nav>

            <article className={styles.detail}>
                <div>
                    <time className={styles.date}>
                        {current.date.toLocaleDateString("en-UK", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}
                    </time>
                    <h2>{t(current.name)}</h2>
                    <p>{t(current.description)}</p>
                    {current.notes && (
                        <ul>
                            {current.notes.map((note, i) => (
                                <li key={i}>{t(note)}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.buttons}>
                    <button
                        onClick={() => setSelected(selected + 1)}
                        disabled={sorted.length === selected + 1}
                    >
                        ← PREV
                    </button>
                    <span>
                        {String(sorted.length - selected).padStart(2, "0")} /{" "}
                        {String(sorted.length).padStart(2, "0")}
                    </span>
                    <button
                        onClick={() => setSelected(selected - 1)}
                        disabled={selected === 0}
                    >
                        NEXT →
                    </button>
                </div>
            </article>
        </div>
    );
}
