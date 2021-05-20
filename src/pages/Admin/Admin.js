import React from 'react';

//Components
import Section from '../../components/Section/Section';
import Table from '../../components/Table/Table';
//structure Home Page
const Admin = () => {

  return (
    <>
        <Section title="Admin page">
            <Table
              buttonText="Add Event"
            />
        </Section>
    </>
  )
};

export default Admin;