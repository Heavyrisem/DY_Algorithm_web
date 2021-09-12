import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { PathContext } from '../Main';

interface Challenge_RouteParams {
    id: string
}
function Challenge({match}: RouteComponentProps<Challenge_RouteParams>) {
    const {path, setPath} = useContext(PathContext);

    useEffect(() => {

        setPath([match.params.id]);
        console.log(path);

    },[])

    return (
        <PathContext.Consumer>
            {({path, setPath}) => (
                <div>
                    <h2>Challenge - {match.params.id}</h2>
                </div>
            )}
        </PathContext.Consumer>
    )
}

export default Challenge