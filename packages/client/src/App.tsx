import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello").then(res => res.json()).then((res) => {
      setMessage(res.message)
    })
  }, [])

  return (
    <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
  );
}

export default App
