export const getTokenFromStorage = () => localStorage.getItem('token');

export const getRoleFromStorage = () => localStorage.getItem('role');

export const saveTokenAndRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
};
