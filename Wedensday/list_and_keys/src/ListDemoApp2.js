import React, { useState } from "react";

function MemberTable({ members }) {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
      </thead>

      <tbody>
        {members.map(data => {
          return (
            <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          );
        })}
      </tbody>
      <tbody></tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
