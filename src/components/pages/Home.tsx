import React from 'react';
import Welcome from "../templates/Welcome";
import styled from "@emotion/styled";

const PageTemplate = styled.div`
	height: 2000px;
	width: 100vw;
	
	padding: 0;
	margin: 0;
`;

const Home: React.FC = () => {
	return (
		<PageTemplate>
			<Welcome />
		</PageTemplate>
	);
};

export default Home;
