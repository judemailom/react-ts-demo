import * as React from 'react';

export const TextInput = ({name,label,onChangeHandler,placeHolder,value,error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass += " " + "has-error";
    }

    return(
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChangeHandler}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
}