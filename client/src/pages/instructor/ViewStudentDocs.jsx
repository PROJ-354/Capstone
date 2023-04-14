import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardHeader, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstructorChecklistCard from '../../components/instructor/checklist/InstructorChecklistCard';

export default function ViewStudentDocs() {
    //for use with the accordian
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //grab evaluations from the loader
    const { evaluations, checklists } = useLoaderData();

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
                        {evaluations.length > 0 ? (
                            evaluations.map((evaluation, idx) => (
                                <Grid item key={idx} sx={{ minWidth: 275 }}>
                                    <Paper elevation={10}>
                                        <Card
                                            style={{
                                                border: 5,
                                                borderStyle: 'solid',
                                                borderColor: 'rgb(25, 118, 210)',
                                            }}
                                            display="flex"
                                        >
                                            <Grid
                                                container
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Typography>
                                                    {evaluation.student_id}
                                                </Typography>
                                            </Grid>

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
                                                        to={`/instructor/${evaluation.student_id}/evaluation/${evaluation._id}`}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                        >
                                                            View
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
                        {checklists.length > 0 ? (
                            checklists
                                .sort((a, b) => {
                                    if (a.name.split(' ')[1] < b.name.split(' ')[1]) {
                                        return -1;
                                    } else {
                                        return 1;
                                    }
                                })
                                .map((checklist) => (
                                    <Grid key={checklist._id} item>
                                        <InstructorChecklistCard checklist={checklist} />
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
}

//preliminary loader
export const studentDocsLoader = async (req) => {
    const studentId = req.params.studentID;

    const evals = await fetch(
        `http://localhost:42069/api/preceptor/studentEvals/${studentId}`
    );

    const checks = await fetch(`http://localhost:42069/api/weeks/user/${studentId}`);

    const checklists = await checks.json();
    const evaluations = await evals.json();

    return {
        evaluations,
        checklists,
    };
};
