// 1. Basic types
const userName: string = 'Jaden';
const tasksLeft: number = 3;
const isDone: boolean = false;

console.log(userName, tasksLeft, isDone);

// 2. A custom type describes the shape of an object
type Task = {
  id: number
  title: string
  time: string
  done: boolean
};

const task: Task = {
  id: 1,
  title: 'Call Mom',
  time: '19:00',
  done: false,
};

console.log(task.title);

// 3. Arrays
const tasks: Task[] = [
  { id: 2, title: 'Pay the electricity bill', time: '', done: true },
  { id: 1, title: 'Call Mom', time: '19:00', done: false }
]

// 4. A function with types input and output
function countLeft(list: Task[]): number {
  return list.filter((t) => !t.done).length
}

console.log(countLeft(tasks));

// Function that prints out all the titles
function listTitles(list: Task[]): string[] {
  return list.map((t) => t.title);
}

console.log(listTitles(tasks));