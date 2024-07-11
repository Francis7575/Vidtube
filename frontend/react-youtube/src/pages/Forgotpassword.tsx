import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import youtubeIcon from '/assets/icon-youtube.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <>
            <Link to="/Vidtube" className='flex items-center mt-6 ml-6'>
                <img src={youtubeIcon} alt="Youtube logo" className='max-w-[2.2rem]' />
                <p className={` font-medium ml-1 `}>
                    Vidtube
                </p>
            </Link>
            <div className='max-w-[17rem] md:max-w-[28rem] lg:max-w-[35rem] mx-auto flex flex-col justify-center min-h-screen pb-12'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-[1.2rem] text-center font-medium mb-4'>
                        Forgot Password
                    </h2>
                    <div className='relative flex flex-col'>
                        <label htmlFor="email" className=' mb-1'>
                            Email Address
                        </label>
                        <input
                            className='pl-2 py-2 outline-none border border-input rounded-[.4rem] '
                            id="email"
                            placeholder="Enter email address"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col justify-center mt-5'>
                        <button className='bg-red hover:bg-red-hover text-white px-5 py-[.35rem] font-bold rounded-[.4rem]'>
                            Send Reset Link
                        </button>
                        <Link to="/login" className='text-center mt-2 text-black hover:text-red'>
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
