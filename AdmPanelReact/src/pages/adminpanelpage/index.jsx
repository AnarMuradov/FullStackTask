import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const AdminPanel = () => {
  const [userData, setUserData] = useState([]);

  const getUsersData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUserData(data);
  };
  useEffect(() => {
    getUsersData()
  }, [])
  
  return (
    <section className='AdminPanel'>
        <div className="AdmPanelBtn">
      <Link to="/"><button>Go Home Page</button></Link>
      <Link to="/AddPage"><button>Add</button></Link>
    </div>
    <div className="AdmPanelContainer">
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>role</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        {userData.map((x) => (
            <tbody key={x._id}>
              <td>
              {x._id}
              </td>
              <td>
              {x.username}
              </td>
              <td>
              {x.role}
              </td>
              <td>
              Edit
              </td>
              <td>
              Delete
              </td>
            
          
            </tbody>
            ))}
      </table>
    </div>
    </section>
  )
}

export default AdminPanel