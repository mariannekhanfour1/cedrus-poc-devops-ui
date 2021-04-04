import React, { useReducer, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import * as service from "./../../services/eligibility";


const styles = require("./CustomForm.module.scss");

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export const CustomForm: React.FC = (props) => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [localFormData, setLocalFormData] = useReducer(formReducer, {});
    const [loader, setLoader] = useState(false);
    const [resultPage, setResultPage] = useState(false);
    const [result, setResult] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);
        console.log(`formData:`, formData);
        let answer = await service.getEligibility(formData);
        setLoader(false);
        setResultPage(true);
        setResult(answer);
    }

    const handleBack = async (e: React.FormEvent) => {
        e.preventDefault();
        setResultPage(false);
    }

    const handleOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name !== 'age') {
            setFormData({
                name: name,
                value: value,
            });
        } else if (name === 'age' && value >0) {
            setFormData({
                name: name,
                value: 65,
            });
        } else {
            setFormData({
                name: name,
                value: 63,
            });
        }
    }

    const localHandleOnChange = (event) => {
        setLocalFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <div>
            { !resultPage &&
            <div>
                <div className={styles['title']}>
                    <h1>Apply For Benefits</h1>
                </div>
                <div className={styles['form-container']}>
                    <Form className={styles['first-form']} >
                        <Form.Group className={styles['first-group']} controlId="formBasicFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="first" placeholder="First Name" onChange={localHandleOnChange}/>
                        </Form.Group>
                        <Form.Group className={styles['first-group']} controlId="formBasicLast">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="last" placeholder="Last Name" onChange={localHandleOnChange}/>
                        </Form.Group>
                        <Form.Group className={styles['first-group']} controlId="formBasicApp">
                            <Form.Label>Application Number</Form.Label>
                            <Form.Control name="app" placeholder="Application Number" />
                        </Form.Group>
                    </Form>
                </div>
                <fieldset className={`${styles['title-border']}`}>
                    <legend  className={`${styles['legend-style']}`}>People in your Home</legend>
                    <div className={`${styles['question']}`} >Please enter the following information about people living in your household. Be sure to include yourself.</div>
                    <div className={styles['form-container']}>
                        <Form className={styles['form']} >
                            <div style={{display: "flex", width: "100%"}}>
                                <Form.Group className={styles['first-group']}>
                                    <Form.Label>Persons age 18 and younger</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                </Form.Group>
                                <Form.Group className={styles['first-group']}>
                                    <Form.Label>Persons age 26 to 64</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                </Form.Group>
                            </div>
                            <div style={{display: "flex", width: "100%"}}>
                                <Form.Group className={styles['first-group']}>
                                    <Form.Label>Persons age 19 to 20</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                </Form.Group>
                                <Form.Group className={styles['first-group']}>
                                    <Form.Label>Persons age 65 and older</Form.Label>
                                    <Form.Control type="text" pattern="[0-9]*" placeholder="0" name="age" onChange={handleOnChange} />
                                </Form.Group>
                            </div>
                            <div style={{display: "flex", width: "100%"}}>
                                <Form.Group className={styles['first-group']}>
                                    <Form.Label>Persons age 21 to 25</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                </fieldset>
                <fieldset className={`${styles['title-border']}`}>
                    <legend className={`${styles['legend-style']}`}>Additional Information</legend>
                    <div className={`${styles['radio-div']}`}>
                        <div className={`${styles['question-radio']}`} >Is anyone is the household pregnant? </div>
                        <div style={{marginRight: "200px"}}>
                            <input type="radio" value="YES" name="pregnant"/> Yes
                            <input style={{marginLeft:"50px"}} type="radio" value="NO" name="pregnant"/> No
                        </div>
                    </div>
                    <div className={`${styles['radio-div']}`}>
                        <div className={`${styles['question-radio']}`} >Is an adult or child is the household disabled or blind? </div>
                        <div style={{marginRight: "200px"}}>
                            <input type="radio" value="YES" name="blind"/> Yes
                            <input style={{marginLeft:"50px"}} type="radio" value="NO" name="blind"/> No
                        </div>
                    </div>
                    <div className={`${styles['radio-div']}`}>
                        <div className={`${styles['question-radio']}`} >Is anyone is the household receiving Suplemental Security Income? </div>
                        <div style={{marginRight: "200px"}}>
                            <input type="radio" value="YES" name="sup"/> Yes
                            <input style={{marginLeft:"50px"}} type="radio" value="NO" name="sup"/> No
                        </div>
                    </div>
                    <div className={`${styles['radio-div']}`}>
                        <div className={`${styles['question-radio']}`} >Was anyone in the home in foster care in Alaska at age 18? </div>
                        <div style={{marginRight: "200px"}}>
                            <input type="radio" value="YES" name="foster"/> Yes
                            <input style={{marginLeft:"50px"}} type="radio" value="NO" name="foster"/> No
                        </div>
                    </div>
                </fieldset>
                <fieldset className={`${styles['title-border']}`}>
                    <legend className={`${styles['legend-style']}`}>Financial Information</legend>
                    <Form>
                        <div className={`${styles['radio-div']}`}>
                            <div className={`${styles['question-radio']}`} >How much money (before taxes) does the household earn each month from working? (If you child pays taxes, their income should be included)</div>
                            <div style={{display: "flex", flexDirection:"column", marginLeft:"50px"}}>
                                <Form.Control className={`${styles['income-control']}`} type="text" pattern="[0-9]*" placeholder="0" name="income" onChange={handleOnChange} />
                                <div>Ex 3000 or 3000.00</div>
                            </div>
                        </div>
                        <div className={`${styles['radio-div']}`}>
                            <div className={`${styles['question-radio']}`} >How much money does the household receive rom other sources each month (such as Unemployment Insurance Benefits, Workers Compensation, etc.)?</div>
                            <div style={{display: "flex", flexDirection:"column", marginLeft:"50px"}}>
                                <Form.Control className={`${styles['income-control']}`} type="number" placeholder="0" name="benefits" />
                                <div>Ex 3000 or 3000.00</div>
                            </div>
                        </div>
                    </Form>
                </fieldset>
                <div style={{width: "80%", textAlign: "end", marginBottom: "20px"}}>
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
                </div>
            </div>
            }
            {
                resultPage &&
                <div>
                    <div className={styles['title']}>
                        <h1>Apply For Benefits Results</h1>
                    </div>
                    { result &&
                    <fieldset className={`${styles['title-border']}`}>
                        <legend className={`${styles['result-style']}`}>Your Results</legend>
                        <div>
                            <div className={`${styles['question-radio']}`} >Following individuals qualify for</div>
                            <div style={{color: "red"}}>MEDICAL ASSISTANCE</div>
                            <div>{localFormData['first']} {localFormData['last']}</div>
                        </div>
                    </fieldset>
                    }
                    {
                        !result && 
                        <fieldset className={`${styles['title-border']}`}>
                            <legend className={`${styles['result-style']}`}>Your Results</legend>
                            <div>
                                <div className={`${styles['question-radio']}`} >No individuals qualify for</div>
                                <div style={{color: "red"}}>MEDICAL ASSISTANCE</div>
                            </div>
                        </fieldset>
                    }
                    <div style={{width: "80%", textAlign: "end", marginBottom: "20px"}}>
                        <Button className={styles['submit-button']} variant="info" onClick={handleBack}>
                                    {loader && <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />}
                                    {loader ? ' Loading...' : 'Exit'}
                        </Button>
                    </div>

                </div>
            }
        </div>
    )

}