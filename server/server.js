const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Simulación de credenciales válidas
  const validCredentials = {
    email: 'usuario@example.com',
    password: 'password123'
  };

  if (email === validCredentials.email && password === validCredentials.password) {
    // Generar token JWT
    const token = jwt.sign({ email }, 'tu-secreto-seguro', { expiresIn: '1h' });
    
    res.json({
      token,
      user: {
        email,
        role: 'user'
      }
    });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

// Ruta protegida
app.get('/api/protected', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'tu-secreto-seguro');
    
    res.json({ message: 'Acceso permitido' });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
