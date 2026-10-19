import './CategoryColumn.css';
import type { Category, Task } from '../types';
import TaskItem from './TaskItem';

type CategoryColumnProps = {
  category: Category
  tasks: Task[]
}

function CategoryColumn({ category, tasks }: CategoryColumnProps) {
  const doneCount = tasks.filter((task) => task.done).length;
  const leftCount = tasks.length - doneCount;
  const percent = tasks.length > 0 ? Math.round((doneCount / tasks.length) * 100) : 0;

  const leftLabel = leftCount === 0 && tasks.length > 0 ? 'All done' : leftCount + ' left';

  return (
    <section className='column' aria-label={category.name}>
      <div className="column__head">
        <div className="column__title">
          <span
            className='column__swatch'
            style={{ background: category.color }}
          />
          <h2 className="column__name">{category.name}</h2>
          <span
            className='column__pill'
            style={{ color: category.color, background: category.softColor }}
          >
            {leftLabel}
          </span>
        </div>
        <button type="button" className='column__open'>
          Open
        </button>
      </div>

      <div className="column__bar">
        <div className="column__bar-fill" style={{ width: percent + '%', background: category.color }} />
      </div>

      <ul className='column__list'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} color={category.color} />
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="column__empty">Nothing here yet. Add a task above.</p>
      )}
    </section>
  )
}

export default CategoryColumn;