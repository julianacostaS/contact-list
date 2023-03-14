
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ users, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    // Display all users if the search value is empty
    const handleSearchChange = (e) => {
        if (!e.target.value)
            return setSearchResults(users)

        // Match search input and display only relevant values
        const resultsArray = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));


        setSearchResults(resultsArray)

    }
    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder="Type a contact name..."
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    < FaSearch />
                </button>
            </form>
        </header>
    )
}

export default SearchBar


