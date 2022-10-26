import React from 'react';
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const WelcomeSection = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;

  background: url(src/assets/website_bg.jpg) center;
  background-size: cover;
	color: #fff;
`;

const Welcome: React.FC = () => {
	return (
		<WelcomeSection>
			<Container className="h-100 d-flex align-items-center justify-content-center flex-column">
				<h1 className="text-center"> Camping 5 étoiles en pleine nature dans le gard </h1>
				<p className="text-center w-75 m-3">
					Situé en bord de rivière aux portes des Cévennes, le Camping des Gardons***** vous propose
					des prestations exceptionnelles : un espace aquatique de plus de 1000 m2 avec piscine
					couverte et chauffée, toboggans, espace spa détente, locations et emplacements haut de
					gamme…
				</p>
				<Link to="/locations">
					<Button variant="contained" style={{ background: "#8ecd8a" }}> Réserver un emplacement </Button>
				</Link>
			</Container>
		</WelcomeSection>
	);
};

export default Welcome;
