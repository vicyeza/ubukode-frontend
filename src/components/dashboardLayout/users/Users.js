import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UbukodeService from "../../apis/UbukodeService";
import "./users.css";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUser] = useState([]);

  const deleteUser = (e, id) => {
    e.preventDefault();
    axios.delete("" + id).then((res) => {
      console.log("User Deleted Successfully");
      toast.success("User Deleted Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if (users) {
        setUser((prevElement) => {
          return prevElement.filter((users) => users.id !== id);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (e) => {
    UbukodeService.getAllUsers()
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="headers">
      <button className="UserBtn">
        <Link to="/newUser"> Add New User</Link>
      </button>

      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody className="content" key={user.id}>
              <tr>
                <td>{user.firstName} </td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td>
                  <BsFillTrashFill
                    onClick={(e, id) => deleteUser(e, user.id)}
                    className="delete-btn"
                  />
                  <BsFillPencilFill
                    className="edit-btn"
                    // onClick={() => editRow(idx)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
