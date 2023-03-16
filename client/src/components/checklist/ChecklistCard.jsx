import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function WeekCard({ checklist }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: '300px' }}>
            <CardContent>
                <Typography variant="h5">{checklist.name}</Typography>
                <Typography variant="body1">
                    Preceptor: {checklist.preceptor_id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        navigate(checklist._id);
                    }}
                >
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
