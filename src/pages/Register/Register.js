import React, { useState } from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
//Components
import Section from '../../components/Section/Section';

import {
    Form,
    FormRow,
    CheckBoxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    RegisterButton
} from '../../lib/style/generalStyles';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik ({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name is required'),
            lastName: Yup.string()
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email adress')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            passwordConfirmation: Yup.string()
                .test(
                    'password-match',
                    'Passwords must match',
                    function(value) {
                        return this.parent.password === value
                    }
                )
                .required('Password confirmation is required'),
            }),
            onSubmit: values => {
                setIsLoading(true);

                setTimeout(() => {
                    setIsLoading(false);
                    alert(JSON.stringify(values));
                }, 1000);
            },
        });

    return (
        <>
        <Section title="Register">
            {!isLoading
                ? <Form onSubmit={formik.handleSubmit}>
                    <FormRow>
                        <InputLabel htmlFor='firstName'>First name</InputLabel>
                        <InputText
                            id='firstName'
                            type='text'
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.fisrtName 
                        ? <InputError>{formik.errors.firstName}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='lastName'>Last name</InputLabel>
                        <InputText
                            id='lastName'
                            type='text'
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName 
                        ? <InputError>{formik.errors.lastName}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <InputText
                            id='email'
                            type='text'
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
                            type='text'
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password 
                        ? <InputError>{formik.errors.password}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='passwordConfirmation'>Confirm password</InputLabel>
                        <InputText
                            id='passwordConfirmation'
                            type='text'
                            {...formik.getFieldProps('passwordConfirmation')}
                        />
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation 
                        ? <InputError>{formik.errors.passwordConfirmation}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <CheckBoxWrapper>
                            <InputCheckbox type='checkbox'/> <InputLabel htmlFor='email'>Register as Admin</InputLabel>
                        </CheckBoxWrapper>
                    </FormRow>
                    <RegisterButton
                        {...formik.getFieldProps('register')}
                        route="/register"
                        type='submit'
                    >Register</RegisterButton>
                        {formik.touched.register && formik.errors.register 
                        ? <InputError>{formik.errors.register}</InputError>
                        : null
                        }
                </Form>
            :isLoading}
        </Section>
        </>
    )
};

export default Register;