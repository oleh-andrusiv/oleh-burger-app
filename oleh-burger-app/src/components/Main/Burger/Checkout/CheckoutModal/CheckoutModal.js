import './CheckoutModal.css';

import OrderIngredient from './OrderIngredient/OrderIngredient.js';
import Loader from '../../../Loader/Loader.js';

import { TextField, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import "yup-phone";
import { useState } from 'react';

const initalValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

const CheckoutModal = ({ ingredients, ingredientsQuantity, burgerPrice, modalOpen, loader, sendOrderData, orderSaved, formOpen }) => {
    const [orderName, setOrderName] = useState('');
    const [orderEmail, setOrderEmail] = useState('');
    const [orderPhone, setOrderPhone] = useState('');
    const [orderAddress, setOrderAddress] = useState('');

    const collectFormData = (even) => {
        even.preventDefault();
        
        switch (even.target.name) {
            case 'name': setOrderName(even.target.value);
            break
            case 'email': setOrderEmail(even.target.value);
            break
            case 'phone': setOrderPhone(even.target.value);
            break
            case 'address': setOrderAddress(even.target.value);
            break
            default: console.log('Something went wrong with input values')
        }
    };

    const orderIngreds = () => {
        const orderedProducts = {};
        for (const ingredient in ingredientsQuantity) {
            if (ingredientsQuantity[ingredient] > 0) {
                orderedProducts[ingredient] = ingredientsQuantity[ingredient];
            }
        }
        return orderedProducts
      };
    
    const orderSubmit = () => {

        const orderData = {
            name: orderName,
            email: orderEmail,
            phone: orderPhone,
            address: orderAddress,
            products: orderIngreds(),
            price: burgerPrice,
        }

        sendOrderData(orderData)
    };

    if (ingredients !== null && !loader) {
        return (
            <div className={`container checkout-modal ${modalOpen}`}>
                <Button variant="outlined" color="error" btntype='checkout-modal_exit' sx={{marginLeft: 95, marginTop: 3}}>
                    Close
                </Button>
            <h2 className='checkout-modal_header'>Order</h2>
            <ul className='checkout-modal_ingredient-list'>
                {ingredients.map((element) => ingredientsQuantity[element.name] > 0 ? 
                    <OrderIngredient 
                        quantity={ingredientsQuantity[element.name]} 
                        key={'checkout' + element.name} 
                        ingredient={element.name} 
                    />
                    : null
                )}
            </ul>
            <p className={`total-price ${formOpen}`}>{`Total price: ${burgerPrice}`}</p>
            <p className={`saved-order-text ${formOpen}`}>{orderSaved}</p>
            <div className={`checkout-form ${formOpen}`}>
                <Formik
                    initialValues={initalValues}
                    validationSchema={object({
                    email: string().required("Please enter email").email("Invalid email"),
                    name: string().required("Please enter name").min(2, "Name too short"),
                    phone: string()
                        .phone()
                        .required(),
                    address: string()
                        .required("Please enter address")
                        .min(7, "Address should be at least 7 characters long"),
                    })}
                    onSubmit={(values, formikHelpers) => {
                    console.log(values);
                    formikHelpers.resetForm();
                    }}
                >
                    {({ errors, isValid, touched, dirty }) => (
                    <Form onChange={collectFormData}>
                        <Field
                            name="name"
                            type="name"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Name"
                            error={Boolean(errors.name) && Boolean(touched.name)}
                            helperText={Boolean(touched.name) && errors.name}
                            autoComplete='off'
                        />
                        <Field
                            name="email"
                            type="email"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Email (name@mailbox.com"
                            autoComplete='off'
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                        />
                        <Field
                            name="phone"
                            type="phone"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Phone (+380123456789)"
                            autoComplete='off'
                            error={Boolean(errors.phone) && Boolean(touched.phone)}
                            helperText={Boolean(touched.phone) && errors.phone}
                        />
                        <Field
                            name="address"
                            type="address"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Address (street, building number)"
                            autoComplete='off'
                            error={Boolean(errors.address) && Boolean(touched.address)}
                            helperText={Boolean(touched.address) && errors.address}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={orderSubmit}
                            disabled={!isValid || !dirty}
                        >
                            Order
                        </Button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
        )
    } 
    if (ingredients !== null && loader) {
        return (
          <div className={`container checkout-modal ${modalOpen}`}>
            <div className='checkout-modal_loader'>
                <Loader />
            </div>
          </div>
        )  
      }
};

export default CheckoutModal

