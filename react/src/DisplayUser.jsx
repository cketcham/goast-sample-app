import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({ first: 'John', last: 'Smith' });

  if (!username || (username.first === '' && username.last === '')) {
    return <div>No user selected</div>;
  }

  return (
    <>
      <div>Firstname: {username.first}</div>
      <div>Lastname: {username.last}</div>
      <button onClick={() => setUsername({ first: '', last: '' })}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
