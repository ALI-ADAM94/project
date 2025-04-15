import "./addUser.css";

const addUser = () => {
  return (
    <div className="addUser">
    <form>
        <input type="text" placeholder="Username" name="username"/>
        <button>Search</button>
    </form>
    <div className="user">
        <div className="detail">
            <img src="./avatar.png" alt=""/>
            <span>Ali Adam</span>
        </div>
        <button>Add User</button>
    </div>
    </div>
  )
}

export default addUser