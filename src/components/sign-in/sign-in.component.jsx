import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { signInWithEmailAndPassword } from '@firebase/auth';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email , password} = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch(e) {
            console.log(e.message);
        }

        
    }
    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form action="#" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="passowrd">Password</label>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}