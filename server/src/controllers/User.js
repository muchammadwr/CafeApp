import User from "../models/User.js";
import {
  queryCreateUser,
  queryDeleteUser,
  queryGetUser,
  queryUpdateUser,
} from "../services/User.js";

// Login
const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await queryGetUser({ username, password });
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }
    res.send(user);
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
};

// Register
const userRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await User.findOne({
      username: username,
    });
    if (userExists) {
      return res.status(400).send("Username already exists");
    }
    const user = await queryCreateUser({
      username,
      password,
    });
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

// Update

const userUpdate = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await queryUpdateUser(username, password);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const updateUser = await User.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

// Delete
const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = queryDeleteUser(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};

export { userLogin, userRegister, userDelete, userUpdate };
