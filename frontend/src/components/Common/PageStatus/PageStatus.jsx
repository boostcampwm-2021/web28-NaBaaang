import React from 'react';

import Box from '../Box/Box';
import Typography from '../Typography/Typography';

function PageStatus({ loading, error, data }) {
    if (loading) return StatusBox('LOADING...');
    if (error) return StatusBox('FETCH ERROR...');
    if (!data) return StatusBox('EMPTY DATA...');
}

const StatusBox = text => {
    return (
        <Box flexDirection="column" width="100%" height="100%">
            <Typography variant="h3" align="center">
                {text}
            </Typography>
        </Box>
    );
};

export default PageStatus;
