import React from 'react';
import withLogin from '../HOC/withLogin';
import SquareFiles from '../Components/SquareFiles';
import CircleFiles from '../Components/CircleFiles';

const Public = (props) => (
    <div>
        {console.log(props)}
        <h1>Pagina publica</h1>

        <SquareFiles props={props} />
        <CircleFiles props={props} />
    </div>
)

export default withLogin(Public)