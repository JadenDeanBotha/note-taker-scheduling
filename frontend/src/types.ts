export type CategoryId = 'personal' | 'work' | 'school';

export type Task = {
  id: number 
  category: CategoryId
  title: string
  time: string
  done: boolean
}

export type Category = {
  id: CategoryId
  name: string
  color: string
  softColor: string
}