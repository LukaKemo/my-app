//route
import React from 'react';

//import
import {
    Footer as FooterWrapper,
    Text
}from './FooterStyle';

//main structure Footer
const Footer = ({text}) => {
    return ( 
        <FooterWrapper>
            <Text>Copyright &copy; 2021 Speck Academy</Text>
        </FooterWrapper>

     );
}
 
export default Footer;