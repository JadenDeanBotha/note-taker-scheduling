import type { Category, Task } from "./types";

export const categories: Category[] = [
  {id: 'personal', name: 'Personal', color: '#C2410C', softColor: '#FFF1E7'},
  {id: 'work', name: 'Work', color: '#1D4ED8', softColor: '#EAF0FF'},
  {id: 'school', name: 'School', color: '#15803D', softColor: '#E8F6EC'},
]

export const initialTasks: Task[] = [
  {id: 1, category: 'personal', title: 'Morning Run', time: '06:30', done: true},
  {id: 2, category: 'personal', title: 'Buy groceries for the next week', time: '17:30', done: false},
  {id: 3, category: 'personal', title: 'Call Mom', time: '19:00', done: false},
  {id: 4, category: 'personal', title: 'Pay the electricity bill', time: '', done: false},
  {id: 5, category: 'work', title: 'Reply to client emails', time: '08:30', done: true},
  {id: 6, category: 'work', title: 'Team stand-up', time: '09:30', done: true},
  {id: 7, category: 'work', title: 'Finish the project update slides', time: '14:00', done: false},
  {id: 8, category: 'work', title: 'Book flights for next week', time: '', done: false},
  {id: 9, category: 'school', title: 'Read Chapter 5 before class', time: '11:00', done: false},
  {id: 10, category: 'school', title: 'Study Group', time: '16:00', done: false},
  {id: 11, category: 'school', title: 'Submit assignment 2', time: '23:00', done: false},
]