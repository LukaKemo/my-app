import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../components/Context/AuthContext';
//Components
import Section from '../../components/Section/Section';

import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    RegisterButton,
    SuccessMessage
} from '../../lib/style/generalStyles';
import { loginUser } from '../../API/login';
import { getAllUsers } from '../../API/user';

const Login = props => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const handleAuth = () => {
      setIsLoggedIn(isLoggedIn=true);
    }

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [isRequestFinished, setIsRequestFinished] = useState(false);

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
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            setIsError(false);
            setIsRequestFinished(false);
            try {
                const response = await loginUser(values); 
                const users = await getAllUsers(response.token);
                const isAdmin = users.find(user => user.email === values.email).isAdmin;
                
                localStorage.setItem("authToken", response.token);
                localStorage.setItem("isAdmin", isAdmin);

                resetForm({});
                setSuccessMessage("You've logged in!");
                setTimeout(() => {
                    setIsRequestFinished(false);
                }, 4000);
            } catch (error) {
                setIsError(true);
                setSuccessMessage("Something went wrong!");
            } finally {
                setIsLoading(false);
                setIsRequestFinished(true);
            }
    }
});

    return (
        <>
        <Section title="Login">
        <p>Logged in status: {props.user}</p>
        <button onClick={props.handleLogout}>Log Out</button>
            {isRequestFinished &&
                <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
            }
            {!isLoading
                ? <Form onSubmit={formik.handleSubmit}>
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
                    <RegisterButton
                        onClick={props.handleLogin, handleAuth}
                        {...formik.getFieldProps('login')}
                        type='submit'
                    >Login</RegisterButton>
                        {formik.touched.login && formik.errors.login 
                        ? <InputError>{formik.errors.login}</InputError>
                        : null
                        }            
                    </FormRow>
                </Form>
            :isLoading
            }
        </Section>
    </>
    )
};

export default Login;

