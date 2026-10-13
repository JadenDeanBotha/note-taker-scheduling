import './TaskItem.css';
import type { Task } from '../types';

type TaskItemProps = {
  task: Task
  color: string
}

function TaskItem({ task, color }: TaskItemProps) {
  const checkboxStyle = {
    borderColor: task.done ? color : '#b3b8b0',
    background: task.done ? color : '#ffffff',
  }

  return (
    <li className={task.done ? 'task task--done' : 'task'}>
      <button 
        type='button'
        className='task__check'
        aria-pressed={task.done}
        aria-label={(task.done ? 'Mark as not done: ' : 'Mark as done: ' + task.title)}
      >
        <span className='task__box' style={checkboxStyle}>
          {task.done && (
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#ffffff'
              strokeWidth='3.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M5 12.5l4.5 4.5L19 7.5' />
            </svg>
          )}
        </span>
      </button>

      <div className='task__body'>
        <span className='task__title'>{task.title}</span>
        {task.time !== '' && (
          <span className='task__item'>
            <svg
              width='13'
              height='13'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
              strokeLinecap='round'
              aria-hidden='true'
            >
              <circle cx='12' cy='12' r='9' />
              <path d='M12 7v513 2' />
            </svg>
            {task.time}
          </span>
        )}
      </div>

      <button
        type='button'
        className='task__delete'
        aria-label={'Delete task: ' + task.title}
      >
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0' />
        </svg>
      </button>
    </li>
  )
}

export default TaskItem;