import { ChangeEvent, FormEvent, useState } from "react"
import { SignupData } from "../types/types"
import youtubeIcon from '/assets/icon-youtube.png'
import { Link, useNavigate } from 'react-router-dom'
import userIcon from '/assets/icon-user.png'
import emailIcon from '/assets/icon-email.png'
import passwordIcon from '/assets/icon-lock.png'
import { useAuth } from "../context/userContext"
import toast from "react-hot-toast"

const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

const Signup = () => {
	const [formData, setFormData] = useState<SignupData>({
		username: '',
		email: '',
		password: ''
	})

	const [errors, setErrors] = useState<{ [key: string]: string | number }>({
		uername: '',
		email: '',
		password: ''
	});
	const navigate = useNavigate();
	const auth = useAuth();

	const InputFields = [
		{ type: 'text', name: 'username', id: 'username', placeholder: 'Enter username', label: 'Username', icon: userIcon },
		{ type: 'email', name: 'email', id: 'email', placeholder: 'Enter email address', label: 'Email Address', icon: emailIcon },
		{ type: 'password', name: 'password', id: 'password', placeholder: 'Enter password', label: 'Password', icon: passwordIcon }
	]

	const handleSignup = async (formData: SignupData) => {
		try {
			const response = await fetch(`${BACKEND_URL}/users/signup`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					username: formData.username,
					email: formData.email,
					password: formData.password,
				}),
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}
			const data = await response.json();
			return data;
		} catch (err: unknown) {
			console.error(err);
		}
	};

	const validateForm = () => {
		let formValid = true;
		const newErrors = { username: '', email: '', password: '' };

		if (!formData.username) {
			formValid = false;
			newErrors.username = 'Username is required';
		}

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
		validateForm()
		try {
			const data = await handleSignup(formData);
			if (data) {
				auth?.setUser({ username: data.username, email: data.email });
				auth?.setIsLoggedIn(true);
				toast.success("Signed In Successfully", { id: "signup" })
				setFormData({ username: '', email: '', password: '' });
				navigate('/');	
			}
		} catch (error) {
			console.log(error);
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
		}))
	}

	return (
		<>
			<Link to="/" className='flex items-center mt-6 ml-6'>
				<img src={youtubeIcon} alt="Youtube logo" className='max-w-[2.2rem]' />
				<p className={`font-medium ml-1 `}>
					VidTube
				</p>
			</Link>
			<div className='max-w-[17rem] md:max-w-[28rem] lg:max-w-[35rem] mx-auto flex flex-col justify-center min-h-screen pb-8'>
				<form onSubmit={handleSubmit}>
					<h2 className='text-[1.3rem] text-center font-medium mb-4'>
						Create Your Account
					</h2>
					{InputFields.map((field, index) => (
						<div key={index} className={`flex flex-col ${(index === 0 || index === 1) && 'mb-4'}`}>
							<label htmlFor={field.id} className='mb-2'>
								{field.label}
							</label>
							<div className="relative">
								<input className={`w-full pl-8 py-2 outline-none border rounded-[.4rem] 
                            ${errors[field.name] ? 'border-red' : 'border-input'}`}
									placeholder={field.placeholder}
									id={field.id}
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
					<div className='flex flex-col items-center mt-8'>
						<button className='bg-red w-full hover:bg-red-hover text-white px-5 py-[.35rem] font-bold rounded-[.4rem]'>
							Signup
						</button>
						<Link to="/login" className="mt-3 text-black hover:text-red">
							Back to login
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}

export default Signup