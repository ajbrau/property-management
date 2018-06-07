import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

    renderInput(field) {
        return <input className="form-control" {...field.input} type="field.type"/>
    }

    handleFormSubmit = function() {

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <label htmlFor="email">Email</label>
                <Field name="email" component={this.renderInput} type="text"/>
                <label htmlFor="email">Email</label>
                <Field name="password" component={this.renderInput} type="password"/>

                <button sction="submit" clasName="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

export default reduxForm({form: "signin"})(Signin);
