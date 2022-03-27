import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/features/authentication/authenticationSlice'

export default function MyNavbar() {

    const auth = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Rent Your Car</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">
                            <Button variant='outline-light'>Anasayfa</Button>
                        </Link>
                    </Nav>

                    {!auth ?
                        <Nav className="ms-auto">
                            <Link className='me-2' to="/signin">
                                <Button variant='outline-light'>Kayıt ol</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant='outline-light'>Giriş yap</Button>
                            </Link>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <Link className='me-2' to="/rentcar">
                                <Button variant='outline-light'>Kiralık Araçlar</Button>
                            </Link>
                            <Link className='me-2' to="/rentyourcar">
                                <Button variant='outline-light'>Aracını Kirala</Button>
                            </Link>
                            <Button onClick={() => dispatch(logout())} variant='outline-light'>Çıkış Yap</Button>
                        </Nav>
                    }

                </Container>
            </Navbar>
        </div>
    )
}
