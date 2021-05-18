import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
//Components
import Section from '../../components/Section/Section';

import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    RegisterButton
} from '../../lib/style/generalStyles';
import { yupToFormErrors } from 'formik';

const Login = () => {
    const [ isLoading, setIsLoading ] =useState(false);
    const formik = useFormik ({
        initialValues: {
            email: '',
            password: ''
    },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email adress')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        }),
        onSubmit: values => {
            setIsLoading (true);

            setTimeout (() => {
                setIsLoading(false);
                alert(JSON.stringify(values));
            }, 1000);
    },
});

    return (
        <>
        <Section title="Login">
            {isLoading
                ? <Form onSubmit={Formik.handleSubmit}>
                    <FormRow>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <InputText
                                id='email'
                                type='email'
                                {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email 
                            ? <InputError>{formik.errors.email}</InputError>
                            : null
                        }                    
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <InputText
                            id='password'
                            type='password'
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password 
                            ? <InputError>{formik.errors.password}</InputError>
                            : null
                        }
                    </FormRow>
                    <FormRow>
                        <RegisterButton type="submit" >Prijavi se</RegisterButton>
                    </FormRow>
                </Form>
                :isLoading
            }
        </Section>
    </>
    )
};

export default Login;

