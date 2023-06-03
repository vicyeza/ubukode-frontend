import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="Vanessa" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Vanessa icyeza" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="vanessa@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
