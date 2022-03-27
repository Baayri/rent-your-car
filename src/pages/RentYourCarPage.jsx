import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import BrandService from '../services/brandService'
import CarService from '../services/carService'
import ColorService from '../services/colorService'
import GearTypeService from '../services/gearTypeService'
import InsuranceService from '../services/insuranceService'

export default function RentYourCarPage() {

    const authUserId = useSelector((state) => state.auth.id)

    let carService = new CarService()

    const formik = useFormik({
        initialValues: {
            brand: { id: "1" },
            color: { id: "1" },
            insurance: { id: "" },
            gearType: { id: "" },
            user: { id: authUserId },
            kilometers: "",
            modelYear: "",
            dailyPrice: "",
            vehicleDefects: "",
        },

        onSubmit: values => {
            formik.values.brand.id = parseInt(values.brand.id)
            formik.values.color.id = parseInt(values.color.id)
            formik.values.insurance.id = parseInt(values.insurance.id)
            formik.values.gearType.id = parseInt(values.gearType.id)
            formik.values.user.id = parseInt(values.user.id)
            formik.values.modelYear = parseInt(values.modelYear)
            formik.values.dailyPrice = parseInt(values.dailyPrice)
            formik.values.kilometers = parseInt(values.kilometers)
            console.log(values)
            carService.add(values)
        },
    })

    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])
    const [gearTypes, setGearTypes] = useState([])
    const [insurances, setInsurances] = useState([])

    useEffect(() => {
        let brandService = new BrandService()
        brandService.getAll().then(result => setBrands(result.data.data))

        let colorService = new ColorService()
        colorService.getAll().then(result => setColors(result.data.data))

        let gearTypeService = new GearTypeService()
        gearTypeService.getAll().then(result => setGearTypes(result.data.data))

        let insuranceService = new InsuranceService()
        insuranceService.getAll().then(result => setInsurances(result.data.data))

    }, [])

    const brandOption = brands.map((brand, index) => ({
        key: index,
        text: brand.brandName,
        value: brand.id,
    }))

    const colorOption = colors.map((color, index) => ({
        key: index,
        text: color.colorName,
        value: color.id,
    }))

    const gearTypesOption = gearTypes.map((gearType, index) => ({
        key: index,
        text: gearType.gearType,
        value: gearType.id,
    }))

    const insuranceOption = insurances.map((insurance, index) => ({
        key: index,
        text: insurance.insuranceCompany,
        value: insurance.id,
    }))

    return (
        <div>
            <Card text='light' border='secondary' bg='dark' className='p-4'>
                <form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Marka</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="brand"
                                name='brand.id'
                                value={formik.values.brand.id}

                            >
                                {
                                    brandOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Renk</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id='color'
                                name='color.id'
                                value={formik.values.color.id}
                            >
                                {
                                    colorOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Vites Tipi</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id='gearType'
                                name='gearType.id'
                                value={formik.values.gearType.id}
                            >
                                {
                                    gearTypesOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Sigorta</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id='insurance'
                                name='insurance.id'
                                value={formik.values.insurance.id}
                            >
                                {
                                    insuranceOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Model Yılı</Form.Label>
                            <Form.Control
                                placeholder="Model Yılı"
                                id='modelYear'
                                name='modelYear'
                                value={formik.values.modelYear}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kilometre</Form.Label>
                            <Form.Control
                                placeholder="Kilometre"
                                id='kilometers'
                                name='kilometers'
                                value={formik.values.kilometers}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>


                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Günlük Fiyat</Form.Label>
                            <Form.Control
                                placeholder="Günlük Fiyat"
                                id='dailyPrice'
                                name='dailyPrice'
                                value={formik.values.dailyPrice}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Araç kusurları</Form.Label>
                            <Form.Control
                                placeholder="Araç Kusurları"
                                id='vehicleDefects'
                                name='vehicleDefects'
                                value={formik.values.vehicleDefects}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                    </Row>
                    <Button
                        disabled={!formik.dirty || formik.isSubmitting}
                        variant='outline-light' type='submit'
                        onSubmit={formik.onSubmit}
                    >
                        Onayla
                    </Button>
                </form>
            </Card>
        </div >
    )
}
