import "./addUser.css";

const AddUser = () => {
  return (
    <div className="AddUser">
    <form>
        <input type="text" placeholder="Username" name="username"/>
        <button>Search</button>
    </form>
    <div className="user">
        <div className="detail">
            <img src="./avatar.png" alt=""/>
            <h2>Ali Adam</h2>
        </div>
          <button>AddUser</button>
    </div>
    </div>
  )
}

export default AddUser