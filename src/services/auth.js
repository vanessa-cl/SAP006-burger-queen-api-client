const BASE_URL = 'https://lab-api-bq.herokuapp.com';
const TOKEN = localStorage.getItem('token');

export const createUser = (endpoint, values) => {
  return fetch(`${BASE_URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
      restaurant: 'Fight Club Burger',
    })
  });
};

export const loginUser = (endpoint, values) => {
  return fetch(`${BASE_URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: values.email,
      password: values.password,
    })
  });
};

export const getProducts = (endpoint) => {
  return fetch(`${BASE_URL}${endpoint}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': TOKEN
    },
  })
  .then(res => res.json())
}

export const sendOrder = (endpoint, orderInfo, addItem) => {
  return fetch(`${BASE_URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': TOKEN
    },
    body: JSON.stringify({
      client: orderInfo.client,
      table: orderInfo.table,
      products: addItem,  
    })
  })
}

export const getOrders = (endpoint) => {
  return fetch(`${BASE_URL}${endpoint}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': TOKEN
    },
  }).then((res) => res.json())
}

export const updateOrderStatus = (endpoint, id, status) => {
  id = id.toString();
  return fetch(`${BASE_URL}${endpoint}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': TOKEN,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST', 
    },
    body: JSON.stringify({
      status
    })
  }).then((res) => res.json())
}