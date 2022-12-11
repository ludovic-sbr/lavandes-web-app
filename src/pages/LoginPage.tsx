import React from 'react';

import { Container } from '@mui/material';

import AuthenticationForm from '@/features/authentication/components/organism/AuthenticationForm';

const LoginPage: React.FC = () => {
	return (
		<Container>
			<AuthenticationForm />
		</Container>
	);
};

export default LoginPage;
