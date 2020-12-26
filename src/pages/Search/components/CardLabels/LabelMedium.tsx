import React from 'react';
import './styles.scss';

type Props = {
    title:string,
    info: string
}

const LabelMedium = ( {title, info}:Props )=>(
    <div className="text-medium-conteiner text-medium">
        <strong>{title}</strong>: {info}
    </div>
);

export default LabelMedium;