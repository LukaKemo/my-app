//import
import React, { useState } from 'react';
import {  RegisterButton,OpenModule } from '../../lib/style/generalStyles';
import ModalForm from '../Modal/ModalForm';
import {Modal} from 'react-responsive-modal'
import {
    Form
} from '../../lib/style/generalStyles';
//structure Table
const Table = ({
    buttonText
}) => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    return (
        <Form>
        <Modal  open={open} onClose={onCloseModal}>
        <ModalForm />
        </Modal>
            
            <OpenModule onClick={(e) =>{e.preventDefault();onOpenModal()}}>{buttonText}</OpenModule>
        </Form>
        );
}

export default Table;