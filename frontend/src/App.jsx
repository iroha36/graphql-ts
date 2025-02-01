import { useState } from 'react'
import './App.css'
import { gql, useQuery } from '@apollo/client'

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`
function Books() {
  const { loading, error, data} = useQuery(BOOKS);
  console.log(data);  return data.test.map(({title, author}) =>
    <div key={title} >{`${title}: ${author}`}</div>
  )

}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <h2>GraphQL client</h2>
        <Books />
      </div>
    </>
  )
}

export default App
