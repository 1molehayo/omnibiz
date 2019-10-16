import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const FormInput = props => {
  if (props.type === 'tel') {
    return (
      <FormGroup
        className={classnames(`form__group ${props.className}`, {
          'is-disabled': props.isDisabled
        })}
      >
        <Label className="form__label" for={props.id}>
          {props.label}
        </Label>

        <div className="form__phone">
          <div className="form__phone-code">{`+${props.phoneCode}`}</div>
          <Input
            required={props.isRequired}
            className="form__input"
            id={props.id}
            disabled={props.isDisabled}
            name={props.id}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </FormGroup>
    );
  }

  if (props.type === 'select') {
    return (
      <FormGroup
        className={classnames(
          `form__group form__select-block ${props.className}`,
          {
            'is-disabled': props.isDisabled
          }
        )}
      >
        <Label className="form__label" for={props.id}>
          {props.label}
        </Label>
        <Input
          required={props.isRequired}
          className={classnames('form__input form__select', {
            'form__select--placeholder': props.value === ''
          })}
          id={props.id}
          disabled={props.isDisabled}
          name={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        >
          <option value="" disabled defaultValue hidden>
            {props.placeholder}
          </option>
          {props.children}
        </Input>
      </FormGroup>
    );
  }

  return (
    <FormGroup
      className={classnames(`form__group ${props.className}`, {
        'is-disabled': props.isDisabled
      })}
    >
      <Label className="form__label" for={props.id}>
        {props.label}
      </Label>
      <Input
        required={props.isRequired}
        className="form__input"
        id={props.id}
        disabled={props.isDisabled}
        name={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </FormGroup>
  );
};

FormInput.defaultProps = {
  className: '',
  isRequired: true,
  options: [],
  placeholder: '',
  phoneCode: 234,
  value: ''
};

FormInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  phoneCode: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
