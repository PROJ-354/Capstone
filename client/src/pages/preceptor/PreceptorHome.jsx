import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function PreceptorHome() { 
    //for use with the accordian
    const [expanded, setExpanded] = useState(false);
      
    const handleChange =
        (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        };

    //grab evaluations from the loader
    const {evaluations, checklists} = useLoaderData();

    console.log(checklists)

    //place into useState, this is done so that we can update the array upon deletion and creation
    const [evals, setEvals] = useState([...evaluations]);

    const sortedEvals = evals.sort((a, b) => a.complete - b.complete);

    return (
        <Grid container spacing={1} padding="10px" >

            <Accordion sx={{ width: 1 }} xs={12} sm={6} md={4} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >
            Evaluations
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>


        {sortedEvals.map((evaluation, idx) => (

                <Grid item padding={0.25} key={idx} sx={{ minWidth: 275 }} xs={12} sm={6} md={4}>
                    <Card
                        style={{
                            border: 5,
                            borderStyle: 'solid',
                            borderColor: evaluation.complete ? 'green' : 'orange',
                        }}
                        display="flex"
                    >
                        <Grid item
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
                            
                        </Grid>

                        <CardHeader
                            fontWeight="bold"
                            title="Student ID:"
                            subheader={evaluation.student_id.firstName+" "+evaluation.student_id.lastName}
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
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: 1 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>Checklists</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        {checklists.map((evaluation, idx) => (

<Grid item padding={0.25} key={idx} sx={{ minWidth: 275 }} xs={12} sm={6} md={4}>
    <Card
        style={{
            border: 5,
            borderStyle: 'solid',
            borderColor: evaluation.submitted_to_instructor ? 'green' : 'orange',
            // borderColor: 'green', 
        }}
        display="flex"
    >
        <Grid item
            container
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <Link
                    style={{ color: 'black' }}
                    to={`/preceptor/checklist/${evaluation._id}`}
                >
                    {' '}
                    <LaunchIcon />{' '}
                </Link>
            </Grid>
        </Grid>

        <CardHeader
            fontWeight="bold"
            title="Student ID:"
            subheader={evaluation.student_id.firstName+" "+evaluation.student_id.lastName}
        />
        <CardContent>
            <Typography
                sx={{ fontSize: 14 }}
                variant="h5"
                color="text.secondary"
                gutterBottom
            >
                instructor: {evaluation.instructor_id}
            </Typography>
        </CardContent>
    </Card>

</Grid>
))}

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

    const checks = await fetch(`http://localhost:42069/api/weeks/user/${user}`)

    const checklists = await checks.json();

    const evaluations = await evals.json();
    

    return {
        evaluations,
        checklists
    };
};
