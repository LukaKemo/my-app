//import
import React from 'react';
import Loader from "react-loader-spinner";

import {
    Section as SectionWrapper,
    Title,
}from './SectionStyle';

//structure Section
const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const sectionClassName = withoutTopPadding ? 'Section Section_topPadding_none' : 'Section';
    return (
        <SectionWrapper>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionWrapper>
    );
}

export default Section;