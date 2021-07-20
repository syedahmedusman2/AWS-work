import React from 'react';
import {Amplify} from 'aws-amplify';
import awsmobile from './../aws-exports';

export default ({element}) => {
    Amplify.configure(awsmobile)

    return <div>{element}</div>
}