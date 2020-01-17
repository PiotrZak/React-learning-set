import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import UserTable from './tables/UserTable'
import AddUserForm from './tables/AddUserForm'
import EditUserForm from './tables/EditUserForm'


function App2({ id }) {
  const [contacts, setContacts] = useState([]);

  let matches = [];

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://randomuser.me/api/?format=json&results=10&seed=${id}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setContacts(json.results));
      console.log(contacts);
    return () => controller.abort();
  }, [id]);

  return <ContactsList contacts={contacts} />
}

export class ContactsList extends React.Component {
  
  contactToContactItem = contact => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const key = contact.login.username;
    return <ContactItem key={key} avatarUrl={avatarUrl} name={name} />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.contacts.map(this.contactToContactItem)}
      </ul>
    );
  }
}


export const ContactItem = ({ avatarUrl, name, phone }) => {
  return (
    <li className="item">
      <img src={avatarUrl} className="ui mini rounded image" alt="" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{phone}</div>
      </div>
    </li>
  );
};



const App  = () => {

  const usersData = [
    {id: 0, name: 'Kacper', username: 'Test', },
    {id: 1, name: 'Rafał', username: 'Username2', }
]

const [users, setUsers] = useState(usersData);

const initialFormState = { id: null, name: '', username: '' }

const [editing, setEditing] = useState(false)
const [currentUser, setCurrentUser] = useState(initialFormState)

const updateUser = (id, updatedUser) => {
  setEditing(false)
  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}

const editRow = user => {
  setEditing(true)
  setCurrentUser({ id: user.id, name: user.name, username: user.username })
}

const addUser = user => {
  user.id = users.length + 1;
  setUsers([...users, user]);
}

const deleteUser = id => {
  setUsers(users.filter(user => user.id != id))
}

const InitialBookState ={
  title: '',
  available: false,
}

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
      
        <div className="flex-large">

        </div>
        <div className="flex-large">
          <h2>View users</h2>

          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
          
        </div>
      </div>
    </div>
  )
}

{/* 
function ApiCall() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?format=json&results=10")
    .then(res => res.json())
    .then(json => setContacts(json.results));
    return () => controller.abort();
  }, [id])
  return <ContactsList contacts={contacts} />
}
*/}
export default App
