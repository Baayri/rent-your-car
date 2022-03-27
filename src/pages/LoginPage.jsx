import React, { useEffect, useState } from 'react'
import "../App.css"
import * as Yup from 'yup';
import { Button, Card, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import UserService from '../services/userService';
import { useDispatch } from 'react-redux';
import { login, userId } from '../store/features/authentication/authenticationSlice';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

    const dispatch = useDispatch()

    const [users, setUser] = useState([])

    let navigate = useNavigate()

    function toHome() {
        navigate('/')
    }

    useEffect(() => {
        let userService = new UserService()
        userService.getAll().then(result => setUser(result.data.data))
    }, [])


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email Zorunludur'),
            password: Yup.string().required('Şifre Zorunlu')
        }),
        onSubmit: values => {
            users.map(user => {
                if (user.email === values.email && user.password === values.password) {
                    dispatch(login())
                    dispatch(userId(user.id))
                    toHome()
                    return null
                }
                return null
            })
        },
    })

    return (
        <div className='my-auto mx-auto' style={{ maxWidth: "500px" }}>
            <form onSubmit={formik.handleSubmit}>
                <Card bg='light' border='dark'>
                    <Card.Header className='text-center'>
                        Giriş Yap
                    </Card.Header>
                    <Card.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                id='individualCustomer.email'
                                name='email'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                id='individualCustomer.password'
                                name='password'
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password" placeholder="Şifre" />
                        </Form.Group>

                    </Card.Body>
                    <Card.Footer className='p-3'>
                        <Button variant='outline-dark' type='submit' >Giriş Yap</Button>
                    </Card.Footer>
                </Card>
            </form>
        </div>
    )
}
