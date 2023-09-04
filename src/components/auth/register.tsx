import React, { useState, ChangeEvent, FormEvent } from 'react';
import { checkInput } from '../utils/validator';
import { handleSignUp } from './helper';
import { useNavigate, Link } from "react-router-dom";


const Login: React.FC = () => {
    const [formData, setFormData] = useState<IUser>({ username: '', password: '' });
    const [complete, setComplete] = useState<string>();
    const navigate = useNavigate();


    const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.currentTarget;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        handleSignUp(formData)
            .then((result: ApiDataType | undefined) => {
                if (result) {
                    setComplete(result.message)
                    setTimeout(() => {
                        navigate("/auth/login");
                    }, 5000)

                    setFormData({
                        ...formData,
                        "username": "",
                        "password": "",
                    });
                }
            })
            .catch((error) => {
                setComplete(error.message)
                setTimeout(() => {
                    setComplete('')
                }, 4000)
                console.error("Error registering user:", error);
            });
    };

    return (
        <div>
            <h2 className='ml-15'>Sign Up</h2>
            <div className='text-center'>{complete}</div>
            <form className='Form Login' onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor='name'>Username</label>
                        <input onChange={handleForm} type='text' id='username' value={formData.username} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleForm}
                            type='password'
                            id='password'
                            value={formData.password}
                        />
                    </div>
                </div>
                <button disabled={!!checkInput(formData.username, formData.password)}
                    className={checkInput(formData.password, formData.username) ? "disabled" : ""}>Register</button>
            </form>
            <div className='text-center'>
                <Link className='text-decoration-none' to='/auth/login'>Login</Link>
            </div>
        </div>
    );
};

export default Login;
