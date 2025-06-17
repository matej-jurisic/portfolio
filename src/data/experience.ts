export const experienceData = [
    {
        id: "a1",
        message: "Initial commit",
        author: "Alice",
        date: "2023-01-01",
        parentIds: [],
    },
    {
        id: "b2",
        message: "Add README.md",
        author: "Alice",
        date: "2023-01-02",
        parentIds: ["a1"],
    },
    {
        id: "c3",
        message: "Feature A: Implement login",
        author: "Bob",
        date: "2023-01-03",
        parentIds: ["b2"],
    },
    {
        id: "d4",
        message: "Feature A: Fix authentication",
        author: "Bob",
        date: "2023-01-04",
        parentIds: ["c3"],
    },
    {
        id: "e5",
        message: "Feature B: Setup database",
        author: "Charlie",
        date: "2023-01-05",
        parentIds: ["b2"],
    },
    {
        id: "f6",
        message: "Feature B: Create user table",
        author: "Charlie",
        date: "2023-01-06",
        parentIds: ["e5"],
    },
    {
        id: "g7",
        message: "Merge Feature A",
        author: "Alice",
        date: "2023-01-07",
        parentIds: ["d4", "b2"],
    }, // Merge from d4 to b2 implicitly, b2 is main branch
    {
        id: "h8",
        message: "Refactor code",
        author: "Alice",
        date: "2023-01-08",
        parentIds: ["g7"],
    },
    {
        id: "i9",
        message: "Merge Feature B",
        author: "Alice",
        date: "2023-01-09",
        parentIds: ["f6", "h8"],
    }, // Merge from f6 into h8
    {
        id: "j10",
        message: "Final adjustments",
        author: "Alice",
        date: "2023-01-10",
        parentIds: ["i9"],
    },
];
