import type { Note } from "../types/types";


export const notes: Note[] = [
  {
    id: 1,
    title: "Call Jason about project timeline",
    content:
      "Discuss milestone 2 delivery.\nAsk if design review is finished.\nConfirm deadline for frontend handoff.",
    created: 1729922400000, // Oct 26, 2024
    done: false,
    favourite: true,
  },
  {
    id: 2,
    title: "Grocery list",
    content:
      "Milk\nEggs\nWhole wheat bread\nGreek yogurt\nBlueberries\nCoffee beans",
    created: 1729659600000, // Oct 23, 2024
    done: true,
    favourite: false,
  },
  {
    id: 3,
    title: "Ideas for notes app",
    content:
      "Add dark mode\nImplement full-text search\nCloud sync with Firebase\nDrag & drop note ordering",
    created: 1729396800000, // Oct 20, 2024
    done: false,
    favourite: true,
  },
  {
    id: 4,
    title: "Doctor appointment",
    content:
      "Appointment with Dr. Smith at 4:30 PM.\nBring insurance card and previous lab reports.",
    created: 1729825200000, // Oct 25, 2024
    done: false,
    favourite: false,
  },
  {
    id: 5,
    title: "Weekly work tasks",
    content:
      "Finish quarterly report\nFix login bug\nReview pull requests\nPrepare slides for Monday meeting",
    created: 1729041600000, // Oct 16, 2024
    done: false,
    favourite: false,
  },
  {
    id: 6,
    title: "Books to read",
    content:
      "Atomic Habits\nDeep Work\nThe Pragmatic Programmer\nClean Architecture",
    created: 1728706000000, // Oct 12, 2024
    done: true,
    favourite: true,
  },
]
