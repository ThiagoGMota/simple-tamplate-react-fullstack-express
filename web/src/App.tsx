import { useEffect, useState } from 'react'
import './App.css'

interface Item {
  id:       number;
  saudacao: string
}

function App() {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    async function loadData() {
      const data = await fetch('http://localhost:3000').then(res => res.json())
      setData(data)
    }
    loadData()
  }, [])
  

  return (
    <>
      {data?.map(post => (
        <div key={post.id}>
          <h1>{post.saudacao}</h1>
           <h3>{post.id}</h3>
        </div>
      ))}
    </>
  )
}

export default App
