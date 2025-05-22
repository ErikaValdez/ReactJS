import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Login = () => 
{
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="text-center p-4 bg-light text-dark ">
                <Card.Header>Iniciar Sesión</Card.Header>
                <Card.Body>

                        <Form className="p-4 bg-light text-dark  w-100" > {/* el otro gris: bg-secondary ,es muy oscuro*/ }
                            <Form.Group className="mb-3">
                                <Form.Label className="mb-3 ">Correo </Form.Label>
                                {/* <Form.Label className="mb-3 d-flex align-items-center">Correo </Form.Label> */}
                                <Form.Control type="email" placeholder="Correo electronico*" className="w-100 border border-primary"/>
                                <Form.Text className="text-muted">
                                Los campos obligatorios están marcados con un asterisco (*)
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="mb-3 ">Contraseña*</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="w-100 border border-primary"/>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center">
                                <Form.Check type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                INICIAR SESIÓN
                            </Button>
                        </Form>
                </Card.Body>
                <Card.Footer className="text-muted">Si ya tienes una cuenta creada, por favor inicia sesión .</Card.Footer>
            </Card>
        </div>
    );
}
export default Login;


