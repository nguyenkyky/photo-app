import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';
import { Form } from 'react-router-dom';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

function InputField(props) {
    const {
        field,form,
        type,label,placeholder,disabled,
    } = props;
    const {name, value, onChange, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
           {label &&  <Label for={name}>{label}</Label>}
            <Input
                id = {name}
                {... field}
                placeholder = {placeholder}
                disabled={disabled}
                invalid={showError}
            />

            
            {/* {showError && <FormFeedback> {errors[name]} </FormFeedback> } */}
            <ErrorMessage name = {name} component={FormFeedback} />
            
            

        </FormGroup>
    );
}

export default InputField;
