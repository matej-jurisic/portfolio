interface StackProps {
    children?: React.ReactNode;
    direction?: "row" | "column";
    gap?: string;
    justifyContent?:
        | "flex-start"
        | "center"
        | "flex-end"
        | "space-between"
        | "space-around";
    alignItems?: "flex-start" | "center" | "flex-end";
    width?: string;
    height?: string;
}

export default function Stack(props: StackProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: props.direction || "column",
                gap: props.gap || "12px",
                justifyContent: props.justifyContent || "flex-start",
                alignItems: props.alignItems || "flex-start",
                width: props.width || "auto",
                height: props.height || "auto",
            }}
        >
            {props.children}
        </div>
    );
}
