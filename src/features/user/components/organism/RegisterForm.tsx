import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import {
	Alert,
	Avatar,
	Box, Button, Container,
	CssBaseline,
	TextField,
	Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import config from "@/config"
import {UserFormData, UserRequest} from "@/features/user/models/user";
import { usePostUserMutation } from "@/features/user/api";
import { useNavigate } from "react-router";
import {NavLink} from "react-router-dom";

const RegisterForm: React.FC = () => {
	const { register, handleSubmit, reset } = useForm<UserFormData>();
	const [userPost, { error, isSuccess: userPosted }] = usePostUserMutation();
	const navigate = useNavigate();

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: config.GOOGLE_CLIENT_ID,
				scope: 'email',
			});
		}

		gapi.load('client:auth2', start);
	}, []);

	useEffect(() => {
		if (userPosted) return navigate("/login")
	}, [userPosted]);

	const onSubmit = (d: UserFormData) => {
		const {
			firstname,
			lastname,
			email,
			tel,
			password,
			repeat_password,
			google_id
		} = d;

		const data: UserRequest = {
			firstname,
			lastname,
			email,
			tel,
			password,
			repeat_password,
			google_id,
		}

		userPost(data);
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 15,
					marginBottom: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Créer un compte
				</Typography>
				<Typography component="p" variant="inherit">
					Déjà un compte ? <NavLink to="/login"><u>Je me connecte</u></NavLink> !
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ mt: 1 }}
				>
					{error && <Alert severity="error"> {error.data.message} </Alert> }
					<TextField
						margin="normal"
						required
						fullWidth
						id="firstname"
						label="Prénom"
						autoComplete="firstname"
						autoFocus
						{...register('firstname')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="lastname"
						label="Nom"
						autoComplete="lastname"
						autoFocus
						{...register('lastname')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Adresse email"
						autoComplete="email"
						autoFocus
						{...register('email')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="tel"
						label="Téléphone"
						autoComplete="tel"
						autoFocus
						{...register('tel')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Mot de passe"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register('password')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Répéter mot de passe"
						type="password"
						id="repeat_password"
						autoComplete="current-password"
						{...register('repeat_password')}
					/>
					<GoogleLogin
						clientId={config.GOOGLE_CLIENT_ID}
						buttonText="Sign up with Google"
						onSuccess={(res: any) => {
							reset({
								firstname: res.profileObj.givenName,
								lastname: res.profileObj.familyName,
								email: res.profileObj.email,
								google_id: res.googleId,
							})
							handleSubmit(onSubmit)()
						}}
						cookiePolicy={"single_host_origin"}
						theme="dark"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Inscription
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default RegisterForm;
