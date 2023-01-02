import React, {useEffect, useState} from 'react';
import {Alert, Snackbar} from '@mui/material';

const ErrorSnackbar = ({ open, message }: any): JSX.Element => {
	const [sbOpen, setSbOpen] = useState<boolean>(false);

	useEffect(() => {
		setSbOpen(open);
	}, [open])

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setSbOpen(false);
	};

	return (
		<Snackbar open={sbOpen} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default ErrorSnackbar;
