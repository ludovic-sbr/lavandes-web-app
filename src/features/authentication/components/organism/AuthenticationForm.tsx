import React, { useEffect } from 'react';
import { useLoginMutation } from "@/features/authentication/api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticationActions } from "@/features/authentication/authSlice";
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
import {gapi} from "gapi-script";
import config from "@/config"
import {LoginFormData, LoginRequest} from "@/features/authentication/models/login-request";

const AuthenticationForm: React.FC = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm<LoginFormData>();
	const [loginPost, { error, isSuccess, data }] = useLoginMutation();

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
		if (!isSuccess || !data) return;
		dispatch(authenticationActions.login(data));
	}, [isSuccess, data]);

	const login = (d: LoginFormData) => {
		const { email, password, google_id } = d;

		const data: LoginRequest = {
			data: {
				email,
				password,
				google_id,
			}
		}

		loginPost(data);
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
					Se connecter
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(login)}
					noValidate
					sx={{ mt: 1 }}
				>
					{error && <Alert severity="error"> Identifiant ou mot de passe incorrect. </Alert> }
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
						label="Mot de passe"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register('password')}
					/>
					<GoogleLogin
						clientId={config.GOOGLE_CLIENT_ID}
						buttonText="Sign in with Google"
						onSuccess={(res) => {
							// @ts-ignore
							reset({ google_id: res.googleId })
							handleSubmit(login)()
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
						Connexion
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default AuthenticationForm;
