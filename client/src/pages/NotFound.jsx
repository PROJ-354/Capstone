import { Typography, Stack, Link, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const user = JSON.parse(localStorage.getItem('auth'));
    const userRole = user.result.role;
    const navigate = useNavigate();
    return (
        <>
            <br />
            <br />
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                Sorry! The page you were looking for does not exist.
            </Typography>
            <br />
            <Stack direction="row" spacing={2}>
                <Button
                    onClick={() => {
                        switch (userRole.toLowerCase()) {
                            case 'student':
                                navigate('/student/home');
                                break;
                            case 'preceptor':
                                navigate(`/preceptor/home`);
                                break;
                            case 'instructor':
                                navigate('/instructor/home');
                                break;
                            case 'administrator':
                                navigate('/admin/home');
                                break;
                            default:
                                navigate('/login');
                        }
                    }}
                >
                    Return to home page
                </Button>
            </Stack>
        </>
    );
};

export default NotFound;
