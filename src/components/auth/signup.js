import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signup extends Component {

    renderInput(field) {
        return <input className="form-control" {...field.input} type="field.type"/>
    }
    render() {
        return (
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component={this.renderInput} type="text"/>
                <label htmlFor="email">Email</label>
                <Field name="password" component={this.renderInput} type="password"/>
            </div>
        );
    }
}

export default reduxForm({form: "signup"})(Signup);
