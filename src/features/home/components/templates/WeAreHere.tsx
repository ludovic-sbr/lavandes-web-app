import React from 'react';
import styled from "@emotion/styled";
import {Box, Container, Grid} from "@mui/material";

const WAHSection = styled.div`
	width: 100%;
	padding: 50px 0 50px 0;
`

const WeAreHere = (): JSX.Element => {
	return (
		<WAHSection>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<Grid item xs={12} sx={{ textAlign: 'center' }}>
							<h2> Nous sommes là pour vous ! </h2>
						</Grid>
						<Grid item xs={12} sx={{ textAlign: 'center' }}>
							<h2> -------- !! -------- </h2>
						</Grid>
						<Grid item xs={8}>
							<p style={{ textAlign: 'justify' }}>
								Situé à Anduze dans le Gard, en Cévennes, notre Camping 5 étoiles Cévennes vous
								accueille d'avril à septembre dans un cadre de verdure en bord de rivière. Plage
								privée, espace aquatique et de nombreuses activités vous attendent. Dans un
								véritable écrin de nature, nous vous proposons de vivre une expérience mémorable
								dans un site naturel unique en bordure de rivière et en plein coeur des Cévennes.
							</p>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</WAHSection>
	);
};

export default WeAreHere;
