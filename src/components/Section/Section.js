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
            <Loader
            style = { style }
            type="TailSpin"
            color='#e4b43c'
            height={100}
            width={100}
            timeout={1000}
        />
            { children }
        </SectionWrapper>
    );
}

export default Section;