import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardHeader, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PreceptorChecklistCard from '../../components/preceptor/checklist/PreceptorChecklistCard';

export default function PreceptorHome() {
    //for use with the accordian
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //grab evaluations from the loader
    const { evaluations, checklists } = useLoaderData();

    //place into useState, this is done so that we can update the array upon deletion and creation
    const [evals, setEvals] = useState([...evaluations]);

    const sortedEvals = evals.sort((a, b) => a.complete - b.complete);

    return (
        <Grid container spacing={1} padding="10px">
            <Accordion
                sx={{ width: 1 }}
                xs={12}
                sm={6}
                md={4}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Evaluations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={1}>
                        {sortedEvals.length > 0 ? (
                            sortedEvals.map((evaluation, idx) => (
                                <Grid item key={idx} sx={{ minWidth: 275 }}>
                                    <Paper elevation={10}>
                                        <Card
                                            style={{
                                                border: 5,
                                                borderStyle: 'solid',
                                                borderColor: evaluation.complete
                                                    ? 'green'
                                                    : 'orange',
                                                // borderColor: 'green',
                                            }}
                                            display="flex"
                                        >
                                            <Grid
                                                container
                                                justifyContent="space-between"
                                                alignItems="center"
                                            ></Grid>

                                            <CardHeader
                                                fontWeight="bold"
                                                title="Student Name:"
                                                subheader={
                                                    evaluation.student_id.firstName +
                                                    ' ' +
                                                    evaluation.student_id.lastName
                                                }
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
                                                <Typography component="div">
                                                    {evaluation.complete
                                                        ? 'complete'
                                                        : 'incomplete'}
                                                </Typography>
                                                <CardActions>
                                                    <Link
                                                        style={{ color: 'white' }}
                                                        to={`/preceptor/evaluation/${evaluation._id}`}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                        >
                                                            View/Edit
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </CardContent>
                                        </Card>
                                    </Paper>
                                </Grid>
                            ))
                        ) : (
                            <Typography>No evaluations to mark</Typography>
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{ width: 1 }}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>
                        Checklists
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        {checklists ? (
                            checklists.map((checklist) => (
                                <Grid key={checklist._id} item>
                                    <PreceptorChecklistCard checklist={checklist} />
                                </Grid>
                            ))
                        ) : (
                            <Typography>No checklists to mark</Typography>
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>
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
    const user = JSON.parse(localStorage.getItem('auth')).result._id;

    const evals = await fetch(`http://localhost:42069/api/preceptor/home/${user}`);

    const checks = await fetch(`http://localhost:42069/api/weeks/user/${user}`);

    const checklists = await checks.json();

    const evaluations = await evals.json();

    return {
        evaluations,
        checklists,
    };
};
