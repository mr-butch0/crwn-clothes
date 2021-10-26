import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Passwords don\'t match');
            return;
        }

        try{
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(e){
            console.log(e.message);
            return;
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })

    }

    render(){
        return (
            <div className='sign-up'>
                <h2 className='title'>I already have an account</h2>
                <p>Sign up with your email and password</p>
                <form action="#" className='' onSubmit={this.handleSubmit}>
                    <FormInput type="text" label='Display Name' name="displayName" value={this.state.displayName} onChange={this.handleChange} required />
                    <FormInput type="email" label="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <FormInput type="password" label="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <FormInput type="password" label="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
                     <div className="buttons">
                         <CustomButton type="submit">Sign Up</CustomButton>
                         {/* <CustomButton isGoogleSignIn onClick={signUpWithGoogle}> Sign up with Google </CustomButton> */}
                     </div>
                </form>
            </div>
        );
    }
}

