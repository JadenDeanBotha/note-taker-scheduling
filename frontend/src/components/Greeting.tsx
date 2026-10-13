import './Greeting.css';

type GreetingProps = {
  name: string
}

function getGreeting(hour: number): string {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good Afternoon';

  return 'Good evening'
}

function Greeting({ name }: GreetingProps) {
  const now = new Date();
  const today = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  return (
    <div className='greeting'>
      <p className='greeting__hello'>
        {getGreeting(now.getHours())}, {name}
      </p>
      <h1 className='greeting__date'>{today}</h1>
    </div>
  )
}

export default Greeting;