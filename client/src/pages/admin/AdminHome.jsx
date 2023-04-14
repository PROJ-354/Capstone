import { Typography, Link } from '@mui/material';

const AdminHome = () => {
    return (
        <>
            <br />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Admin Homepage
            </Typography>
            <br />
            <Typography variant="h6">
                <Link href="/admin/join-codes" underline="always">
                    Manage Join Codes
                </Link>
            </Typography>
        </>
    );
};

export default AdminHome;
