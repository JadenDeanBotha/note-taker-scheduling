import './ProgressSummary.css';
import type { Category, Task } from '../types';

type ProgressSummaryProps = {
  tasks: Task[]
  categories: Category[]
}

function ProgressSummary({ tasks, categories }: ProgressSummaryProps) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return(
    <div className="progress">
      <div className="progress__text">
        <span className="progress__count">
          {done} of {total} done
        </span>
        <span className="progress__percent">{percent}%</span>
      </div>
      <div className="progress__bar">
        {categories.map((category) => {
          const doneInCategory = tasks.filter((task) => task.category === category.id && task.done).length;

          const width = total > 0 ? (doneInCategory / total) * 100 : 0;

          return (
            <div 
              className="progress__segment"
              key={category.id}
              style={{ width: width + '%', background: category.color }} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProgressSummary;