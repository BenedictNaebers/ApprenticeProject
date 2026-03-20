import useGetUsers, { User } from "../../hooks/useGetUsers";
import "./OverviewPage.css"

function OverviewPage() {
  const { userData, loading } = useGetUsers();

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="user-list-container">
      <h1>Persons List</h1>
      <table className="user-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user: User) => (
            <tr key={user.id}>
              <td>
                <a href={`/detail/${user.id}`}>{user.name}</a>
              </td>
              <td>
                {user.gender}
              </td>
              <td>
                {user.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewPage;
