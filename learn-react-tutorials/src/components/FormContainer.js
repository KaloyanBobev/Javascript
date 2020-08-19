import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "prefer not to say",
            destiantion: "",
            dietryRestrictions: {
                isVegatarian: false,
                isKosher: false,
                isLactoseFree: false,
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState((prevState) => {
                return {
                    dietryRestrictions: {
                        ...prevState.dietryRestrictions,
                        [name]: checked
                    }
                }
            })
            : this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default FormContainer;