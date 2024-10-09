import { ChangeEvent, FormEvent, useState } from 'react'
import { LoginData } from '../types/types'
import { Link, useNavigate } from 'react-router-dom'
import userIcon from '/assets/icon-user.png'
import passwordIcon from '/assets/icon-lock.png'
import youtubeIcon from '/assets/icon-youtube.png'
import { useAuth } from '../context/userContext'
import toast from 'react-hot-toast'


const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

const Login = () => {
	const [formData, setFormData] = useState<LoginData>({
		email: '',
		password: ''
	})
	const [errors, setErrors] = useState<{ [key: string]: string | number }>({
		email: '',
		password: ''
	});
	const auth = useAuth();

	const handleLogin = async (formData: LoginData, rememberMe: boolean) => {
		try {
			const response = await fetch(`${BACKEND_URL}/users/login`, {
				method: "POST",
				credentials: "include", // Crucial for including cookies
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					password: formData.password,
					rememberMe,
				}),
			});
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			return data;
		} catch (err: unknown) {
			console.error(err);
		}
	};

	const InputFields = [
		{ type: 'email', name: 'email', id: 'email', placeholder: 'Enter email address', label: 'Email Address', icon: userIcon },
		{ type: 'password', name: 'password', id: 'password', placeholder: 'Enter password', label: 'Password', icon: passwordIcon }
	]
	const navigate = useNavigate();

	const validateForm = () => {
		let formValid = true;
		const newErrors = { email: '', password: '' };

		if (!formData.email) {
			formValid = false;
			newErrors.email = 'Email is required';
		}

		if (!formData.password) {
			formValid = false;
			newErrors.password = 'Password is required';
		}

		setErrors(newErrors);
		return formValid;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!validateForm()) return; // Prevent submission if form is invalid
		const rememberMe = (e.target as HTMLFormElement).remember.checked;
		const data = await handleLogin(formData, rememberMe)
		if (data) {
			auth?.setUser({ email: data.email, username: data.username });
			auth?.setIsLoggedIn(true);
			toast.success("Signed In Successfully", { id: "login" })
			setFormData({ email: '', password: '' });
			navigate('/')
		} else {
			toast.error("Login failed. Please check your credentials.");
		}
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))

		setErrors(prevErrors => ({
			...prevErrors,
			[name]: ''
		}));
	}

	return (
		<>
			<Link to="/" className='flex items-center mt-6 ml-6'>
				<img src={youtubeIcon} alt="Youtube logo" className='max-w-[2.2rem]' />
				<p className={`font-medium ml-1 `}>
					VidTube
				</p>
			</Link>
			<div className='max-w-[17rem] md:max-w-[28rem] lg:max-w-[35rem] mx-auto flex flex-col justify-center min-h-screen pb-12'>
				<form onSubmit={handleSubmit}>
					<h2 className='text-[1.2rem] lg:text-[1.6rem] text-center font-medium mb-4'>
						Login Access
					</h2>
					{InputFields.map((field, index) => (
						<div key={index} className={`flex flex-col ${index === 1 && 'mt-4'}`}>
							<label htmlFor={field.id} className=' mb-1'>
								{field.label}
							</label>
							<div className='relative'>
								<input
									className={`w-full pl-8 py-2 outline-none border rounded-[.4rem] 
                            ${errors[field.name] ? 'border-red' : 'border-input'}`}
									id={field.id}
									placeholder={field.placeholder}
									name={field.name}
									type={field.type}
									value={formData[field.name]}
									onChange={handleInputChange} />
								<img src={field.icon} alt="" className='absolute left-2 top-1/2 -translate-y-1/2 max-w-[1.2rem]' />
							</div>
							{errors[field.name] &&
								<span className='text-red text-[.75rem] mt-1'>
									{errors[field.name]}
								</span>}
						</div>
					))}
					<div className='flex justify-between items-center mt-3'>
						<label htmlFor="remember" className='flex items-center'>
							<input type="checkbox" name="remember" id="remember"  />
							<p className='ml-2'>Remember me</p>
						</label>
					</div>
					<div className='flex flex-col justify-center mt-6'>
						<button className='bg-red hover:bg-red-hover text-white px-5 py-[.35rem] font-bold rounded-[.4rem]'>
							Login
						</button>
						<Link to="/signup" className='text-center mt-2 text-black hover:text-red'>
							Create new account
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}
export default Login