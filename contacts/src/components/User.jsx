const User = ({ user }) => {
    return (
        <article>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.phone}</p>
            <p>Address: {user.address.city},</p>
            <p>{user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
        </article>
    )
}
export default User