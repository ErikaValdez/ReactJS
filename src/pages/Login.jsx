import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/'); 
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center p-4 bg-light text-dark">
        <Card.Header>Iniciar Sesión</Card.Header>
        <Card.Body>
          {error && (
            <div className="text-danger mb-3">{error}</div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                Los campos obligatorios están marcados con un asterisco (*)
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña*</Form.Label>
              <div style={{ position: 'relative' }}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#888' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                label="Recuerdame"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              INICIAR SESIÓN
            </Button>
          </Form>
          <div className="mt-3">
            <span>¿No tienes cuenta? </span>
            <Button variant="link" onClick={() => navigate('/register')} style={{padding: 0}}>Regístrate aquí</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          Si ya tienes una cuenta creada, por favor inicia sesión.
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
