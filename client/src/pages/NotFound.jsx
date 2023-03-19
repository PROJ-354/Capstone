import { Typography, Stack, Link } from '@mui/material';

const NotFound = () => {
    return (
        <>
            <br /><br />
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Sorry! The page you were looking for does not exist.
            </Typography>
            <br />
            <Stack direction="row" spacing={2}>
                <Typography variant="h6">
                    <Link href="/" underline="hover">
                        Return to login page
                    </Link>
                </Typography>
            </Stack>
        </>
    );
};

export default NotFound;
