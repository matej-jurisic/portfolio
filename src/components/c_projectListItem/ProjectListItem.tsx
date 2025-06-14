import { Link } from "react-router-dom";
import styles from "./ProjectListItem.module.css";

interface ProjectProps {
    projectName: string;
}

export default function ProjectListItem(props: ProjectProps) {
    return (
        <Link className={styles.projectListItem} to={props.projectName}>
            {props.projectName}
        </Link>
    );
}
