import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CarService from '../services/carService'

export default function RentCarPage() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        let carService = new CarService()
        carService.getAll().then(result => setCars(result.data.data))
    }, [])

    let x = ['Merso.jpg', 'merso2.jpg', 'mustang.jpg']

    return (
        <div>
            <Row sm={1} md={2}>
                {
                    cars.map((car) => {
                        return (
                            <Col className='mb-3' key={car.id}>
                                <Card border='dark'>
                                    <Card.Img variant="top" src={x[Math.floor(Math.random() * 3)]} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center' }}>{car.brand.brandName}</Card.Title>
                                        <Card.Body>
                                            <Row className='mb-3'>
                                                <Col>
                                                    <Card border="dark" >
                                                        <Card.Header>Renk</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.color.colorName}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card border="dark">
                                                        <Card.Header>Vites Tipi</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.gearType.gearType}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card border="dark" >
                                                        <Card.Header>Model Yılı</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.modelYear}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <Row className='mb-3'>
                                                <Col>
                                                    <Card border="dark" >
                                                        <Card.Header>Kilometre</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.kilometers}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card border="dark">
                                                        <Card.Header>Günlük Fiyat</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.dailyPrice}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <Row >
                                                <Col>
                                                    <Card border="dark">
                                                        <Card.Header>Sigorta</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.insurance.insuranceCompany}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card border="dark" >
                                                        <Card.Header>Araç Sahibi</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{car.user.firstName}</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card.Body>
                                    <Card.Footer>

                                        <Button className='ms-3' variant="outline-dark">Kirala</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
