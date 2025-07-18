/*
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';
*/

export const login = async (credentials) => {
 /*  try {
    const response = await axios.post(`${API_URL}/login`, credentials); 
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  } */
  const mockUser = {
    email: credentials.email,
    token: 'mock-jwt-token',
    id: Date.now().toString(),
    name: credentials.email.split('@')[0] // Usamos la parte antes del @ como nombre
  };
  
  // Simulamos un retraso de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Guardamos el usuario en localStorage
  localStorage.setItem('user', JSON.stringify(mockUser));
  
  return mockUser;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// ============================================
// Configuración de interceptores
// ============================================

export const setupAxiosInterceptors = () => {
  /* axios.interceptors.request.use(
    (config) => {
      const user = getCurrentUser();
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    } 
  );*/
  return () => {}; // Retornamos una función vacía para mantener la compatibilidad
};


