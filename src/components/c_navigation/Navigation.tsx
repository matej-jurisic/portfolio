import { useEffect, useRef, useState, type RefObject } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/ApplicationContext";
import Button from "../../ui/ui_button/Button";
import styles from "./Navigation.module.css";

function useOutsideAlert(
    ref: RefObject<HTMLElement | null>,
    onOutsideClick: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onOutsideClick]);
}

export default function Navigation() {
    const { t } = useLanguage();
    const [linkListVisible, setLinkListVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLinkListVisible(window.innerWidth > 1100);
    }, [window.innerWidth]);

    useOutsideAlert(navRef, () => setLinkListVisible(false));

    const pages = [
        {
            name: t("aboutMe"),
            link: "/",
        },
        {
            name: t("projects"),
            link: "/projects",
        },
        {
            name: t("posts"),
            link: "/blog",
        },
    ];

    return (
        <div className={styles.navigation} ref={navRef}>
            <div className={styles.navigationHamburger}>
                <Button
                    variant="glass"
                    onClick={() => setLinkListVisible((prev) => !prev)}
                >
                    <GiHamburgerMenu />
                </Button>
            </div>
            {linkListVisible && (
                <div className={styles.navigationLinkList}>
                    {pages.map((p) => (
                        <span className={styles.navigationLink}>
                            <NavLink
                                key={p.link}
                                to={p.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navigationLink} ${styles.activeLink}`
                                        : styles.navigationLink
                                }
                                onClick={() => setLinkListVisible(false)}
                            >
                                {p.name}
                            </NavLink>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
