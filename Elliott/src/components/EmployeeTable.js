import React from 'react';

const EmployeeTable = (props) => {
    const { users } = props;
    return (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th className="sort-option" onClick={props.handleReverseOrder}>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
            <tr>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.street.number + " " + user.location.street.name}</td>
              <td>{user.location.city}</td>
              <td>{user.location.state}</td>
              <td>{user.location.postcode}</td>
              <td>{user.email}</td>
            </tr>))}
          </tbody>
        </table>
    )
}


export default EmployeeTable;
