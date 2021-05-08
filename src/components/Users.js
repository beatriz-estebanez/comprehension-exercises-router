import React from 'react';

const Users = (props) => {
  const { id } = props.match.params;
  const { greetingMessage } = props;
  return (
    <div>
      <h2> Users </h2>
      <p> {greetingMessage}, id={id}, this is my awesome Users component </p>
    </div>
  );
}

export default Users;