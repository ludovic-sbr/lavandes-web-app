import React, { useEffect } from 'react';
import { LoginRequest, useLoginMutation } from "@/features/authentication/api";
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

const AuthenticationForm: React.FC = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<LoginRequest>();
	const [loginPost, { error, isSuccess, data }] = useLoginMutation();

	useEffect(() => {
		if (!isSuccess || !data) return;
		dispatch(authenticationActions.login(data));
	}, [isSuccess, data]);


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
				<Box component="form" onSubmit={handleSubmit(loginPost)} noValidate sx={{ mt: 1 }}>
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
