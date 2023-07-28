// src/services/studentService.js
import axios from 'axios';

const API_URL = 'https://64c21131fa35860baea120c4.mockapi.io/Students';

export const getAllStudents = () => {
  return axios.get(API_URL);
};

export const addStudent = (student) => {
  return axios.post(API_URL, student);
};

export const updateStudent = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
