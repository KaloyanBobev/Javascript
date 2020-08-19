import React from 'react';
function FormComponent(props) {
    return (
        <main>
            <form>
                <fieldset>
                    <label> First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={props.data.firstName}
                            onChange={props.handleChange}></input>
                    </label>
                    <label>Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={props.data.lastName}
                            onChange={props.handleChange}></input>
                    </label>
                    <label>Age:
                        <input
                            type="text"
                            name="age"
                            value={props.data.age}
                            onChange={props.handleChange}></input>
                    </label>

                    <div>
                        <label><input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange} />Male</label>
                        <label><input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange} />Female</label>
                        <label><input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={props.data.gender === "other"}
                            onChange={props.handleChange} />Other
                        </label>
                    </div>

                    <div>
                        <label>Destination</label>
                        <select
                            value={props.data.destiantion}
                            onChange={props.handleChange}
                            name="destiantion"
                        >
                            <option value="">Please select a destination</option>
                            <option value="New York">New York</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                        </select>
                    </div>

                    <div>
                        <label><input
                            type="checkbox"
                            name="isVegatarian"
                            value="vegatarian"
                            onChange={props.handleChange}
                            checked={props.data.dietryRestrictions.isVegatarian}
                        />vegatarian?</label>
                        <label> <input
                            type="checkbox"
                            name="isKosher"
                            value="kosher"
                            onChange={props.handleChange}
                            checked={props.data.dietryRestrictions.isKosher}
                        />kosher?</label>
                        <label> <input
                            type="checkbox"
                            name="isLactoseFree"
                            value="lactose free"
                            onChange={props.handleChange}
                            checked={props.data.dietryRestrictions.isLactoseFree}
                        />lactose free?</label>
                    </div>
                </fieldset>
            </form>
            <h1>First name: {props.data.firstName}</h1>
            <h1>Last name: {props.data.lastName}</h1>
            <h1>Age: {props.data.age}</h1>
            <h2>You are a: {props.data.gender}</h2>
            <h2>destination: {props.data.destiantion}</h2>
            <fieldset>
                <h3>Vegatarian: {props.data.dietryRestrictions.isVegatarian ? "Yes" : "No"}</h3>
                <h3>Kosher: {props.data.dietryRestrictions.isKosher ? "Yes" : "No"}</h3>
                <h3>Lactose free: {props.data.dietryRestrictions.isLactoseFree ? "Yes" : "No"}</h3>
            </fieldset>
        </main>
    )
}

export default FormComponent;