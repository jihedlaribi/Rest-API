// import { ADD, DELETE, EDIT, GET } from "../type/index";
import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "../type";

export const addUser = (fullName, email, phone) => async (dispatch) => {
  try {
    const newUser = { fullName, email, phone };
    let res = await axios.post('/users/add', newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });

  } catch (error) {
    alert("post error");
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/users/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
  }
};
export const getUser = () => async (dispatch) => {
  try {
    let res = await axios.get("/users/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
export const editUser = (id, fullName, phone, email) => async (dispatch) => {
  try {
    const editedUser = { fullName, phone, email };
    let res = axios.put(`/users/put/${id}`, editedUser);
    dispatch({
      type: EDIT,
      payload: res.data,
    });
  } catch (error) {
    alert("edit error");
  }
};
