import React, { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormField } from '../../custom-hooks/useFormField';

const styles = require("./CustomForm.module.scss");

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}


export const CustomForm: React.FC = (props) => {
    // const emailField = useFormField(); //one way used to change forms  and then submit values using emailField.value
    // const ageField = useFormField(); 
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`formData:`, formData)
        //    console.log(`${emailField.value}, ${ageField.value}`);
    }

    const handleOnChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }


    return (
        <div className={styles['form-container']}>

            <Form className={styles['form']} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleOnChange} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
  </Button>
            </Form>


        </div>

    )

}