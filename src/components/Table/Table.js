//import
import React, { useState } from 'react';
import {  RegisterButton } from '../../lib/style/generalStyles';
import ModalForm from '../Modal/ModalForm';
import {
    Form
} from '../../lib/style/generalStyles';
//structure Table
const Table = ({
    buttonText
}) => {
    const [open, setOpen] = useState(false);
    const openForm = () => setOpen(true);

    return (
        <Form>
            <ModalForm 
                isOpen={open}
                handleClose={() => setOpen(false)}
            />
            <RegisterButton onClick={() => setOpen(true)}>{buttonText}</RegisterButton>
        </Form>
        );
}

export default Table;