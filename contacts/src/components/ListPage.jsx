import User from "./User"

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(user => <User key={user.name} user={user} />)

    const content = results?.length ? results : <article><p>No Matching Users</p></article>

    return (
        <main>{content}</main>
    )
}

export default ListPage
