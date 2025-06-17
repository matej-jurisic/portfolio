import { Link } from "react-router-dom";
import type { ProjectInfo } from "../../types/ProjectInfo";
import styles from "./ProjectListItem.module.css";

interface ProjectProps {
    projectInfo: ProjectInfo;
}

export default function ProjectListItem(props: ProjectProps) {
    return (
        <Link
            className={styles.projectListItem}
            to={props.projectInfo.pathName}
        >
            {props.projectInfo.name}
        </Link>
    );
}
