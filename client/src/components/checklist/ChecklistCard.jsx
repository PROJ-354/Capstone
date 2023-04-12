import {
    Alert,
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
import { useState, useEffect } from 'react';

export default function WeekCard({ checklist }) {
    const navigate = useNavigate();

    //useStates for the button's availability and loading status
    const [viewDisabled, setViewDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [submitIsLoading, setSubmitIsLoading] = useState(false);

    //useState for the dialog
    const [open, setOpen] = useState(false);

    //useState and submit function for submitting checklists
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const handleSubmit = async () => {
        setError(null);
        setMessage(null);
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

        const json = await res.json();

        if (!res.ok) {
            setError(json.error);
            setViewDisabled(false);
            setSubmitDisabled(false);
        } else {
            setMessage(json.message);
        }

        setSubmitIsLoading(false);
    };

    useEffect(() => {}, [error, message]);

    return (
        <>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <Card sx={{ maxWidth: '300px' }}>
                <CardContent>
                    <Typography variant="h5">{checklist.name}</Typography>
                    <Typography variant="body1">
                        Preceptor: ADD THE PRECEPTOR'S NAME HERE{' '}
                        {!checklist.preceptor_id
                            ? 'None Selected'
                            : checklist.preceptor_id}
                        <br />
                        Submitted: {checklist.submitted_to_preceptor ? 'Yes' : 'No'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        disabled={checklist.submitted_to_preceptor || viewDisabled}
                        onClick={() => {
                            navigate(checklist._id);
                        }}
                    >
                        View
                    </Button>
                    <LoadingButton
                        color="success"
                        variant="contained"
                        disabled={checklist.submitted_to_preceptor || submitDisabled}
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
