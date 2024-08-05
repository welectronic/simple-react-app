// src/components/buttonpanel/ButtonPanel.js
import React from 'react';
import Button from '../button/Button';
import './ButtonPanel.css';

function ButtonPanel(props) {
    const handleClick = (buttonName) => {
        props.onClick(buttonName);
    };

    const isSelected = (buttonName) => {
        return props.selectedOperator === buttonName ? 'selected' : '';
    };

    return (
        <div className="button-panel">
            <div className="row">
                <Button value="C" onClick={handleClick} className="special" />
                <Button value="+/-" onClick={handleClick} className="special" />
                <Button value="%" onClick={handleClick} className="special" />
                <Button value="/" onClick={handleClick} className={`operator ${isSelected('/')}`} />
            </div>
            <div className="row">
                <Button value="7" onClick={handleClick} />
                <Button value="8" onClick={handleClick} />
                <Button value="9" onClick={handleClick} />
                <Button value="x" onClick={handleClick} className={`operator ${isSelected('x')}`} />
            </div>
            <div className="row">
                <Button value="4" onClick={handleClick} />
                <Button value="5" onClick={handleClick} />
                <Button value="6" onClick={handleClick} />
                <Button value="-" onClick={handleClick} className={`operator ${isSelected('-')}`} />
            </div>
            <div className="row">
                <Button value="1" onClick={handleClick} />
                <Button value="2" onClick={handleClick} />
                <Button value="3" onClick={handleClick} />
                <Button value="+" onClick={handleClick} className={`operator ${isSelected('+')}`} />
            </div>
            <div className="row">
                <Button value="0" onClick={handleClick} className="button-zero" />
                <Button value="." onClick={handleClick} />
                <Button value="=" onClick={handleClick} className="operator" />
            </div>
        </div>
    );
}

export default ButtonPanel;
