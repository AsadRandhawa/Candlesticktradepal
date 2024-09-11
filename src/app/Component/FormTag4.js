import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { InputCurrency } from '../../reducers/InputSlice';

const FormTag4 = (props) => {
    const { Currency } = useSelector((state) => state.InputValue);
    const dispatch = useDispatch();
    const [currency, setCurrency] = useState(Currency);

    const CurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const options = ["$", "£", "฿", '€', '¥', '₣', '₹'].map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));

    useEffect(() => {
        dispatch(InputCurrency(currency));
    }, [currency]);

    const renderSwitch = (param) => {
        switch (param) {
            case 'green':
                return { color: '#71DD37', fontSize: '16px', textAlign: 'center', borderRadius: '4px' };
            case 'input_white':
                return { color: '#FFFFFF', fontSize: 14, textAlign: 'center' };
            case 'blue':
                return { color: '#03C3EC', fontSize: '16px', textAlign: 'center', borderRadius: '4px' };
            case 'red':
                return { color: '#FF3E1D', fontSize: '16px', textAlign: 'center', borderRadius: '4px' };
            default:
                return { color: '#FFFFFF', fontSize: '16px', textAlign: 'center' }; // Default to white for titles
        }
    };

    return (
        <>
            {props.color === 'input_white' ? (
                <div style={{ width: "80%", marginLeft: '10%' }}>
                    <div className="input-group">
                        {props.val === "m" ? (
                            <NumericFormat
                                thousandSeparator={true}
                                onKeyPress={props.onKeyPress}
                                ref={props.ref}
                                value={props.value}
                                style={{ color: "white", borderRadius: '6px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                className="form-control"
                                aria-describedby="basic-addon1"
                                onKeyDown={props.onKeyDown}
                                onChange={props.onChange}
                                name={props.name}
                            />
                        ) : (
                            <>
                                <div className="input-group-prepend">
                                    <select
                                        className="input-group-text"
                                        onChange={CurrencyChange}
                                        style={{ fontSize: 14, borderRadius: '6px 0px 0px 6px', color: '#BAC4D1', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                        value={Currency}
                                    >
                                        {options}
                                    </select>
                                </div>
                                <NumericFormat
                                    thousandSeparator={true}
                                    onKeyPress={props.onKeyPress}
                                    ref={props.ref}
                                    value={props.value}
                                    style={{ color: "white", borderRadius: '0px 6px 6px 0px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                    className="form-control"
                                    aria-describedby="basic-addon1"
                                    onKeyDown={props.onKeyDown}
                                    onChange={props.onChange}
                                    name={props.name}
                                />
                            </>
                        )}
                    </div>
                    <label className='px-1' style={{ color: '#FFFFFF', textAlign: 'center', fontSize: '16px' }}>{props.title}</label>
                </div>
            ) : (
                <div className='text-center mb-3'>
                    <div style={{ color: '#FFFFFF', textAlign: 'center', fontSize: '16px' }}>{props.title}</div>
                    <div className="mt-2" style={{ fontSize: 14, color: renderSwitch(props.color).color, textAlign: 'center' }}>{props.value}</div>
                </div>
            )}
        </>
    );
};

export default FormTag4;
