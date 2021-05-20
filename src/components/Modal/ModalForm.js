import React, { useState } from 'react';
import { Field, Formik, useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import Select, { Option, ReactSelectProps } from 'react-select'
import DatePicker from 'react-datepicker';
//Components
import Section from '../Section/Section';
import {
    Form,
    FormRow,
    CheckBoxWrapper,
    InputLabel,
    InputText,
    InputError,
    RegisterButton
} from '../../lib/style/generalStyles';
import { date } from 'yup/lib/locale';
const ModalForm = () => {
    const options = [
        { value: 'marketing', label: 'Marketing' },
        { value: 'design', label: 'Design' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' }
      ]
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik ({
        initialValues: {
            title: '',
            description: '',
            category: '',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            firm: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title name is required'),
            description: Yup.string()
                .required('Description is required'),
            category: Yup.string()
                .required('Category is required'),
            date: Yup.string()
                .required('Date is required'),
            timeFrom: Yup.string()
                .required('Time from is required'),
            timeTo: Yup.string()
                .required('Time to is required'),
            capacity: Yup.string()
                .required('Capacity is required'),
            firm: Yup.string()
                .required('Firm is required')
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
        <Section title="Add new event">
            {!isLoading
                ? <Form>
                    <FormRow>
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <InputText
                            id='title'
                            type='text'
                            {...formik.getFieldProps('title')}
                        />
                        {formik.touched.title && formik.errors.title 
                        ? <InputError>{formik.errors.title}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='description'>Description</InputLabel>
                        <InputText
                            id='description'
                            type='textarea'
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description 
                        ? <InputError>{formik.errors.description}</InputError>
                        : null
                        }
                    </FormRow>
                    <FormRow>
                        <InputLabel htmlFor='category'>Category</InputLabel>
                        <Select
                            as='select'
                            options={options}
                            id='category'
                            type='select'
                            {...formik.getFieldProps('category')}
                        />
                        {formik.touched.category && formik.errors.category 
                        ? <InputError>{formik.errors.category}</InputError>
                        : null
                        }
                        <InputLabel htmlFor='date'>Date</InputLabel>
                            <DatePicker 
                                name="from"
                                inputPlaceholder="Select a day"
                                {...formik.getFieldProps('date')}
                            />
                    </FormRow>
                    <RegisterButton
                        {...formik.getFieldProps('submit')}
                        route="/"
                        type='submit'
                    >Submit</RegisterButton>
                        {formik.touched.submit && formik.errors.submit 
                        ? <InputError>{formik.errors.submit}</InputError>
                        : null
                        }
                </Form>
            :isLoading}
        </Section>
        </>
    )
};

export default ModalForm;