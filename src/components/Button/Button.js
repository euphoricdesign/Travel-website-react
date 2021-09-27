import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = (props) => {
    const checkButtonStyles = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <Link to="/sign-up" className="btn--mobile">
            <button
                className={`btn ${checkButtonStyles} ${checkButtonSize}`}
                onClick={props.onClick}
                type={props.type}
            >
                {props.children}
            </button>
        </Link>
    );
};

export default Button;