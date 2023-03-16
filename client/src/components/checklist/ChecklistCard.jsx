import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function WeekCard({ checklist }) {
    const navigate = useNavigate();

    //Use states for the button's availability and loading status
    const [viewDisabled, setViewDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [submitIsLoading, setSubmitIsLoading] = useState(false);

    //Use state for the dialog
    const [open, setOpen] = useState(false);

    const handleSubmit = async () => {
        setOpen(false);
        setSubmitIsLoading(true);
        setViewDisabled(true);
        setSubmitDisabled(true);

        const res = await fetch(
            `http://localhost:42069/api/weeks/submit/${checklist._id}`,
            {
                method: 'PATCH',
            }
        );

        setSubmitIsLoading(false);
    };

    return (
        <>
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
                        disabled={viewDisabled}
                        onClick={() => {
                            navigate(checklist._id);
                        }}
                    >
                        View
                    </Button>
                    <LoadingButton
                        color="success"
                        variant="contained"
                        disabled={submitDisabled}
                        loading={submitIsLoading}
                        onClick={() => setOpen(true)}
                    >
                        Submit
                    </LoadingButton>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Submit the form?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit the form? You will not be able to
                        edit after submitting.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
