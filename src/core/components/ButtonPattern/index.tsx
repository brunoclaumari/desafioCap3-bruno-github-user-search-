import React from 'react';
import './styles.scss';

type Props = {
    text: string;

}



const ButtonPattern = ({ text }: Props) => (
    <button className="button-style"    >
        {text}
    </button>
);

export default ButtonPattern;