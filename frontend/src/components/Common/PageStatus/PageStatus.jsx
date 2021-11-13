import React from 'react';

import Box from '../Box/Box';
import Typography from '../Typography/Typography';

function PageStatus({ loading, error, data }) {
    if (loading)
        return (
            <Box flexDirection="column" width="100%" height="100%">
                <Typography variant="h3" align="center">
                    LOADING...
                </Typography>
            </Box>
        );
    if (error)
        return (
            <Box flexDirection="column" width="100%" height="100%">
                <Typography variant="h3" align="center">
                    FETCH ERROR...
                </Typography>
            </Box>
        );
    if (!data)
        return (
            <Box flexDirection="column" width="100%" height="100%">
                <Typography variant="h3" align="center">
                    EMPTY DATA...
                </Typography>
            </Box>
        );
}


export default PageStatus;
