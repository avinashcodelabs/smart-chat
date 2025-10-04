import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello").then(res => res.json()).then((res) => {
      setMessage(res.message)
    })
  }, [])

  return (
    <div>
      {message}
    </div >
  );
}

export default App
