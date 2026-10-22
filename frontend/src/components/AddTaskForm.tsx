import './AddTaskForm.css';
import type { SubmitEvent } from 'react';
import type { Category, CategoryId } from '../types';

type AddTaskFormProps = {
  categories: Category[]
  selectedId: CategoryId
}

function AddTaskForm({ categories, selectedId } : AddTaskFormProps) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="add">
      <label htmlFor="new-task" className="sr-only">
        New Task
      </label>
      <input 
        type="text" 
        id='new-task' 
        className='add__title' 
        placeholder='Add a task...' 
      />

      {/* <div role='group' className="add__cats" aria-label='Category for the new task'>
        
      </div> */}

      <label htmlFor="new-category" className="sr-only">
        Category
      </label>

      <select id="new-category" className="add__select" defaultValue={selectedId}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="new-time" className="sr-only">
        Time (optional)
      </label>

      <input type="time" id="new-time" className="add__time" />

      <button type='submit' className="add__submit">
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          aria-hidden='true'
        >
          <path d='M12 5v14M5 12h14' />
        </svg>
        Add
      </button>
    </form>
  )
}

export default AddTaskForm;