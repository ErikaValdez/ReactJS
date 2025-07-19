import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'cliente',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        email: form.email,
        role: form.role,
      });
      navigate('/');
    } catch (err) {
      setError('No se pudo registrar el usuario. ' + (err.message || ''));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center p-4 bg-light text-dark">
        <Card.Header>Registro de Usuario</Card.Header>
        <Card.Body>
          {error && <div className="text-danger mb-3">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select name="role" value={form.role} onChange={handleChange} required>
                <option value="cliente">Cliente</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
