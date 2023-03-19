import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

export default function PreceptorHome() {
    //grab evaluations from the loader
    const evaluations = useLoaderData();
    console.log(evaluations);
    //place into useState, this is done so that we can update the array upon deletion and creation
    const [evals, setEvals] = useState([...evaluations]);

    const sortedEvals = evals.sort((a, b) => a.complete - b.complete);

    return (
        <Grid container spacing={1} padding="10px">
            {sortedEvals.map((evaluation, idx) => (
                <Grid item key={idx} sx={{ minWidth: 275 }}>
                    <Card
                        style={{
                            border: 5,
                            borderStyle: 'solid',
                            borderColor: evaluation.complete ? 'green' : 'orange',
                            // borderColor: 'green',
                        }}
                        display="flex"
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Link
                                    style={{ color: 'black' }}
                                    to={`/preceptor/${evaluation._id}`}
                                >
                                    {' '}
                                    <LaunchIcon />{' '}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link style={{ color: 'black' }}>
                                    {' '}
                                    <CloseIcon
                                        variant="white"
                                        onClick={() => handleDeleteEval(evaluation._id)}
                                    />{' '}
                                </Link>
                            </Grid>
                        </Grid>

                        <CardHeader
                            fontWeight="bold"
                            title="Student ID:"
                            subheader={evaluation.student_id}
                        />
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                variant="h5"
                                color="text.secondary"
                                gutterBottom
                            >
                                month: {evaluation.month}
                            </Typography>
                            <Typography variant="h5" component="div">
                                completed? {evaluation.complete ? 'yes' : 'no'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    //delete eval handler
    async function handleDeleteEval(evalId) {
        const response = await fetch(`http://localhost:42069/api/preceptor/${evalId}`, {
            method: 'DELETE',
        });

        setEvals(evals.filter((evaluation) => evaluation._id !== evalId));
    }
}

//preliminary loader
export const evalsLoader = async () => {
    const res = await fetch('http://localhost:42069/api/preceptor/');
    return res;
};
