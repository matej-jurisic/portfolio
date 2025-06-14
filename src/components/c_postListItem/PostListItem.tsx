import { Link } from "react-router-dom";
import styles from "./PostListItem.module.css";

interface PostProps {
    postName: string;
}

export default function PostListItem(props: PostProps) {
    return (
        <Link className={styles.postListItem} to={props.postName}>
            {props.postName}
        </Link>
    );
}
