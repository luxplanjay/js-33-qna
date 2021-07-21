import axios from 'axios';

axios.defaults.baseURL = 'https://60a6676cb970910017eb17d7.mockapi.io/api/v1';

const fetchConnections = async () => {
  const response = await axios.get('/connections');
  return response.data;
};

// const handleClick = async () => {
//   try {
//     const data = await fetchConnections();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchConnections()
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

const fetchConnectionById = async id => {
  const response = await axios.get(`/connections/${id}`);
  return response.data;
};

// fetchConnectionById(2)
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

const createConnection = async data => {
  const response = await axios.post('/connections', data);
  return response.data;
};

// createConnection({
//   name: 'Adrian Cross',
//   email: 'a.cross@mail.com',
//   phone: '322-22-22',
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

// Для fetch надо рукам и добавить content type
// fetch('https://60a6676cb970910017eb17d7.mockapi.io/api/v1/connections', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Solomon Fokes',
//     email: 's.fokes@mail.com',
//     phone: '322-22-22',
//   }),
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

const updateConnection = async (id, data) => {
  const response = await axios.put(`/connections/${id}`, data);
  return response.data;
};

// updateConnection(80, { name: 'Adrian Cross' })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

const deleteConection = async id => {
  const response = await axios.delete(`/connections/${id}`);
  return response.data;
};

// deleteConection(80)
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));
