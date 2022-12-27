import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGI1MTI4OWIyNWZkZTVhZjg0NjQ0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA3NDcxMiwiZXhwIjoxNjcwMzMzOTEyfQ.kDBr5AbTeNgJ12rhy6HpsTdCU_l_F_rB0nJNd51d__A';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
