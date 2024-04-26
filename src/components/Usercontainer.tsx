import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
import { useEffect } from "react";

function Usercontainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.data &&
          userData.data.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercontainer);
