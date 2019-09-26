import React from 'react';

const data = {
  abc: {
    name: 'ㅁㅁㅁ',
    description: 'ㅇㅇㅇㅇ',
  },
  cde: {
    name: 'bbb',
    description: 'dddd',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
