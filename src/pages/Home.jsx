import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

export default function Home() {

    return (
        <div>
            <Carousel style={{ marginBottom: '3px' }}>
                <Carousel.Item style={{ maxHeight: '500px' }}>
                    <img
                        style={{ bottom: '140px', position: 'relative' }}
                        className="d-block w-100"
                        src="merso.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>
                            Fiyat Eşitleme Garantisi</h3>
                        <p>Aynı fırsatı daha ucuza mı buldunuz? Fiyat eşitlemesi yapacağız.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '500px' }}>
                    <img
                        style={{ bottom: '140px', position: 'relative' }}
                        className="d-block w-100"
                        src="mustang.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Gizli ücret yok</h3>
                        <p>Tam olarak ne ödediğinizi bilirsiniz

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '500px' }}>
                    <img
                        style={{ bottom: '140px', position: 'relative' }}
                        className="d-block w-100"
                        src="merso2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Esnek kiralamalar</h3>
                        <p>Teslim alımdan 48 saat öncesine kadar çoğu rezervasyonu ücretsiz olarak değiştirebilir veya iptal edebilirsiniz</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Card bg='dark' text='white'>
                <Card.Body>
                    <Card.Title as={'h2'} style={{ textAlign: 'center' }}>Rent Your Car ile Türkiye'de ister kendi aracınızı kiralık ilan koyun, ister günlük araba kiralayın!
                        Eşsiz araç kiralama deneyimi için Rent Your Car'a hoş geldiniz!</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
