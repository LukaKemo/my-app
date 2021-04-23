//scss
import './Grid.scss';
//route
import React from 'react';

//structure Grid
const Grid = (props) => {
    const gridClassName = `Grid Grid_${props.columns}`;
    return (
        <div className={gridClassName}>
            { props.children }
        </div>
    );
}

export default Grid;