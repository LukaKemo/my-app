import React, { useState } from 'react';
import { Field, Formik, useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import Select, { Option, ReactSelectProps } from 'react-select'
import DatePicker from 'react-date-picker';
//Components
import Section from '../Section/Section';
import {
    Form,
    FormRow,
    Wrapper,
    InputLabel,
    InputText,
    InputError,
    RegisterButton,
    TextArea,
    DateRow,
    InputCapacity
} from '../../lib/style/generalStyles';
const ModalForm = () => {
    const options = [
        { value: 'marketing', label: 'Marketing' },
        { value: 'design', label: 'Design' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' }
      ]
    const time = [
        { value: '10:00', label: '10:00' },
        { value: '12:00', label: '12:00' },
        { value: '14:00', label: '14:00' },
        { value: '16:00', label: '16:00' }
      ]

      const firms = [
        { value: 'speck', label: 'Speck' },
        { value: 'five', label: 'Five' },
        { value: 'bornfight', label: 'Bornfight' },
        { value: 'agency04', label: 'Agency 04' }
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
                .required('Title name is required!'),
            description: Yup.string()
                .required('Description is required!'),
            category: Yup.string()
                .required('Category is required!'),
            date: Yup.string()
                .required('Date is required!'),
            timeFrom: Yup.string()
                .required('Time from is required!'),
            timeTo: Yup.string()
                .required('Time to is required!'),
            capacity: Yup.number()
                .typeError('Capacity must be a number!')
                .positive('Capacity can not be negative!')
                .integer('Capacity can not include a decimal point')
                .required('Capacity is required'),
            firm: Yup.string()
                .required('Firm is required!')
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
        <Wrapper>
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
                        <TextArea
                            id='description'
                            type='textarea'
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description 
                        ? <InputError>{formik.errors.description}</InputError>
                        : null
                        }
                    </FormRow>
                    <DateRow>                        
                        <InputLabel htmlFor='date'>Date</InputLabel>
                        <InputLabel htmlFor='category'>Category</InputLabel>
                    </DateRow>
                    <DateRow>
                        <DatePicker
                            as='date'
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date 
                        ? <InputError>{formik.errors.date}</InputError>
                        : null
                        }
                        <Select
                            as='category'
                            options={options}
                            id='category'
                            type='select'
                            {...formik.getFieldProps('category')}
                        />
                        {formik.touched.category && formik.errors.category 
                        ? <InputError>{formik.errors.category}</InputError>
                        : null
                        }
                    </DateRow>
                    <DateRow>                        
                        <InputLabel htmlFor='timeFrom'>Time from</InputLabel>
                        <InputLabel htmlFor='timeTo'>Time to</InputLabel>
                    </DateRow>
                    <DateRow>
                    <Select
                            as='timeFrom'
                            options={time}
                            id='timeFrom'
                            type='select'
                            {...formik.getFieldProps('timeFrom')}
                        />
                        {formik.touched.timeFrom && formik.errors.timeFrom 
                        ? <InputError>{formik.errors.timeFrom}</InputError>
                        : null
                        }
                    <Select
                            as='timeTo'
                            options={time}
                            id='timeTo'
                            type='select'
                            {...formik.getFieldProps('timeTo')}
                        />
                        {formik.touched.timeTo && formik.errors.timeTo 
                        ? <InputError>{formik.errors.timeTo}</InputError>
                        : null
                        }
                    </DateRow>
                    <DateRow>                        
                        <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                        <InputLabel htmlFor='firm'>Firm</InputLabel>
                    </DateRow>
                    <DateRow>
                    <InputCapacity
                            id='capacity'
                            type='text'
                            {...formik.getFieldProps('capacity')}
                        />
                        {formik.touched.capacity && formik.errors.capacity 
                        ? <InputError>{formik.errors.capacity}</InputError>
                        : null
                        }
                    <Select
                            as='firm'
                            options={firms}
                            id='firm'
                            type='select'
                            {...formik.getFieldProps('firm')}
                        />
                        {formik.touched.firm && formik.errors.firm 
                        ? <InputError>{formik.errors.firm}</InputError>
                        : null
                        }
                    </DateRow>
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
        </Wrapper>
    )
};

export default ModalForm;