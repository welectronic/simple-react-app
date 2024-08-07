// src/components/button/Button.jsx
import React, { useRef } from 'react';
import './Button.css';

function Button(props) {
    const buttonRef = useRef(null);

    const handleMouseDown = () => {
        props.onClick(props.value);

        if (buttonRef.current) {
            buttonRef.current.classList.add('pressed');
            setTimeout(() => {
                if (buttonRef.current) {
                    buttonRef.current.classList.remove('pressed');
                }
            }, 200); // Remover la clase después de 200ms
        }
    };

    const classNames = `button ${props.className ? props.className : ''}`.trim();

    return (
        <button
            ref={buttonRef}
            className={classNames}
            value={props.value}
            onMouseDown={handleMouseDown}
            data-testid={`button-${props.value}`}
        >
            {props.value}
        </button>
    );
}

export default Button;
