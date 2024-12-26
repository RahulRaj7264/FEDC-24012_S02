let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
];

for (const student of students) {
    if (student.marks >= 50) {
        console.log(`${student.name} - ${student.subject}`);
    }
}

let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];

for (const word of words) {
    if (word === "grapefruit") {
        console.log(word);
    }
}
