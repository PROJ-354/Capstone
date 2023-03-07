import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function WeekCard({ checklist }) {
    const navigate = useNavigate();

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{checklist.name}</Typography>
                <Typography variant="body1">
                    View your form for this week's skills assessment!
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
                <Button color="success" variant="contained">
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
}
