const ProfileTable = ({ profiles }) => {
    return (
      <table className="text-white">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Secondary Mobile Number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {profiles && profiles?.data?.map((profile, index) => (
            <tr key={index}>
              <td>{profile.firstName}</td>
              <td>{profile.lastName}</td>
              <td>{profile.mobile}</td>
              <td>{profile.secondaryMobile}</td>
              <td>{profile.email}</td>
              <td>{profile.userAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

  export default ProfileTable