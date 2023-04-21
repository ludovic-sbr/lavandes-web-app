import React from 'react';
import StaticPageTemplate from "@/common/pages/templates/StaticPageTemplate";
import {Box} from "@mui/material";
import errorPageIllu from "@/assets/errorPageIllu.webp";

const Error404Page: React.FC = () => {
    return (
        <StaticPageTemplate>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '100px',
                }}>

                <img src={errorPageIllu} alt="Illustration error" />
            </Box>
        </StaticPageTemplate>
    );
};

export default Error404Page;