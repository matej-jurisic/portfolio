import PostListItem from "../components/c_postListItem/PostListItem";
import type { PostInfo } from "../types/PostInfo";
import Stack from "../ui/ui_stack/Stack";

const posts: PostInfo[] = [
    // {
    //     name: "fibonacciCaching",
    //     date: new Date("2025-06-26T15:30:00"),
    //     pathName: "fibonacci_caching",
    // },
];

export default function PostList() {
    return (
        <Stack height="100%" justifyContent="center">
            {posts.map((p) => (
                <PostListItem postInfo={p} />
            ))}
        </Stack>
    );
}
