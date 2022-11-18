import React from 'react';
import { Field } from 'formik';

export const TextArea = (props) => {

    return (
        <Field name={props.id}>
            {({field}) => (
                <textarea 
                    {...field}
                    {...props}
                    ref={props.refs}
                />
            )}
        </Field>
    )
}