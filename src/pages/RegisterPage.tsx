import React from 'react';

import { Container } from '@mui/material';

import RegisterForm from '@/features/user/components/organism/RegisterForm';

const RegisterPage: React.FC = () => {
	return (
		<Container>
			<RegisterForm />
		</Container>
	);
};

export default RegisterPage;
