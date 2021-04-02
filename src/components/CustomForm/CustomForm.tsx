import React, { useReducer, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
// import { useFormField } from '../../custom-hooks/useFormField';

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
    const [loader, setLoader] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);
        console.log(`formData:`, formData)
        setTimeout(() => {
            setLoader(false);
        }, 3000);
        
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
                <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control name="age" type="number" placeholder="Age" onChange={handleOnChange} />
                </Form.Group>
                <Form.Group controlId="formBasicIncome">
                    <Form.Label>Income</Form.Label>
                    <Form.Control name="income"  type="number" placeholder="Income" onChange={handleOnChange} />
                </Form.Group>
                <Button className={styles['submit-button']} variant="info" type="submit" onClick={handleSubmit}>
                    {loader && <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />}
                    {loader ? ' Loading...' : 'Submit'}

                </Button>
            </Form>


        </div>

    )

}