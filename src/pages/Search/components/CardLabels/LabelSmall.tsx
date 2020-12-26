import React from 'react';
import './styles.scss';

type Props = {
    title:string,
    info: number
}

const LabelSmall = ( {title, info}:Props )=>(
    <div className="text-small-conteiner text-small">
        {title}: {info}
    </div>
);

export default LabelSmall;