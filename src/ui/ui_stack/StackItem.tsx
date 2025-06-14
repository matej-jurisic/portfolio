interface StackItemProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function StackItem(props: StackItemProps) {
    return (
        <div
            style={{
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
}
