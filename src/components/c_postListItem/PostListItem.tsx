import { Link } from "react-router-dom";
import { useLanguage } from "../../context/ApplicationContext";
import type { PostInfo } from "../../types/PostInfo";
import styles from "./PostListItem.module.css";

interface PostProps {
    postInfo: PostInfo;
}

export default function PostListItem(props: PostProps) {
    const { t } = useLanguage();

    return (
        <Link className={styles.postListItem} to={props.postInfo.pathName}>
            {t(props.postInfo.name)}
            <span className={styles.postItemDate}>
                {props.postInfo.date.toLocaleDateString()}
            </span>
        </Link>
    );
}
