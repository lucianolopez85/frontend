import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <ul><li><dt> { props.name } </dt></li>
        <p><dd>Status: {  status ? <spam> OK</spam> : <spam> Pendente</spam>}
        </dd></p>
    </ul>
}