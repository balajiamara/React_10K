import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <h3>Student List:</h3>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
