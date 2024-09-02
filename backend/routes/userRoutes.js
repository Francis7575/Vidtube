const express = require('express')
const router = express.Router()
const { getUserByEmail, addUser } = require('../controllers/userController')
const bcrypt = require('bcrypt')

router.get('/check-logged-in', (req, res) => {
	if (req.cookies.email) {
		console.log(req.cookies.email)
		const user = getUserByEmail(req.cookies.email)
		if (user) {
			res.status(200).json({
				email: req.cookies.email,
				username: user.username,
				loggedIn: true
			})
		} else {
			res.status(404).json({
				email: '',
				loggedIn: false
			})
		}
	} else {
		res.status(401).json({
			'status': 'not authorized'
		})
	}
})

router.post('/login', async (req, res) => {
	const { email, password, rememberMe } = req.body; // Get the rememberMe flag from the request
	console.log(req.body);

	// Check if user already exists
	const user = getUserByEmail(email);
	if (user) {
		// Check if password matches
		const isMatch = await bcrypt.compare(password, user.password);

		if (isMatch) {
			// Set the cookie with expiration based on rememberMe flag
			const maxAge = rememberMe ? 60000 * 60 * 24 * 30 : 0; // 30 days or session cookie
			res.cookie('email', user.email, {
				maxAge: maxAge,
				httpOnly: true, // Secure the cookie
				sameSite: 'Strict', // Adjust based on your requirements
			});

			res.status(200).json({
				email,
				username: user.username,
				loggedIn: true
			});
		} else {
			// Password does not match
			res.status(401).json({
				message: 'Password incorrect!'
			});
		}
	} else {
		res.status(401).json({
			status: 'not authorized'
		});
	}
});

router.post('/signup', (req, res) => {
	const { username, email, password } = req.body
	console.log(req.body)
	// Check if the user exists in database
	const existingUser = getUserByEmail(email)
	console.log('Existing user:', existingUser);
	if (existingUser) {
		// email not available
		return res.status(409).json({
			message: 'email is taken'
		})
	} else {
		const saltRounds = 12;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);
		const user = addUser(username, email, hash)

		// Send cookie in response
		res.cookie('email', user.email, {
			maxAge: 60000 * 60 * 24
		})
		res.json({
			email: user.email,
			username: user.username,
			loggedIn: true
		})
	}
})

router.get('/logout', (req, res) => {
	res.clearCookie('email') // Removes email cookie from client browser
	res.json({
		username: '',
		email: '',
		loggedIn: false
	})
})

module.exports = router