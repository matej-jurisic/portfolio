import PostListItem from "../components/c_postListItem/PostListItem";
import Stack from "../ui/ui_stack/Stack";

const posts = [
    {
        name: "lvgl",
    },
];

export default function PostList() {
    return (
        <Stack height="100%" justifyContent="center">
            {posts.map((p) => (
                <PostListItem postName={p.name} />
            ))}
        </Stack>
    );
}
