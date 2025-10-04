import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
      });
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl pb-2">Hello world!</p>
      <Button>Send!</Button>
    </div>
  );
}

export default App;
