import React from 'react';

const UncontrolledField = () => {
    return (
        <div>
            <form >
                <input type="email" name="email" id="email" placeholder='Email'/>
                <br />
                <input type="password" name="password" id="password" placeholder='Password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;