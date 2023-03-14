import { getUsers } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ListPage from './components/ListPage'

function App() {
  const [users, setUsers] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getUsers().then(json => {
      setUsers(json)
      return json

    }).then(json => {
      setSearchResults(json)
    })
  }, [])


  return (
    <>
      <SearchBar users={users} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default App;
