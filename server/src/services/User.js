import User from "../models/User.js";

// Query Create User
const queryCreateUser = async (data) => {
  try {
    const user = new User(data);
    return await user.save();
  } catch (error) {
    console.error(error.message);
    throw new Error("Error creating user");
  }
};

// Query get User
const queryGetUser = async (data) => {
  try {
    const user = await User.findOne(data);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error querying user");
  }
};

// Query Update User
const queryUpdateUser = async (data) => {
  try {
    const user = await User.updateOne(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error updating user");
  }
};

// Query Delete User
const queryDeleteUser = async (data) => {
  try {
    const user = User.findOneAndDelete(data);
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error deleting user");
  }
};

export { queryCreateUser, queryGetUser, queryUpdateUser, queryDeleteUser };
