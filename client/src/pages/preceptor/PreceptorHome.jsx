import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import {Grid} from '@mui/material'
import Typography from '@mui/material/Typography';
import { Link, useLoaderData } from "react-router-dom"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';


export default function PreceptorHome() {
    //grab evaluations from the loader
    const evaluations = useLoaderData();
    console.log(evaluations)
    //place into useState, this is done so that we can update the array upon deletion and creation
    const [evals, setEvals] = useState([...evaluations])

    return(
        <Grid container spacing={1} padding="10px">
        {evals.map((evaluation, idx) => (
            <Card key={idx} sx={{ minWidth: 275 }}>
                <Link to={`/preceptor/${evaluation._id}`}><LaunchIcon/></Link>
                <Link>
                <CloseIcon variant="white" onClick={() => handleDeleteEval(evaluation._id)}/>
                </Link>
                <CardHeader fontWeight="bold" title="Student ID:" subheader={evaluation.student_id} />
                <CardContent>
              <Typography sx={{ fontSize: 14 }} variant="h5" color="text.secondary" gutterBottom>
                month: {evaluation.month}
              </Typography>
              <Typography variant="h5" component="div">
                completed? {evaluation.complete? "yes" : "no" }
              </Typography>

            </CardContent>
          </Card>
        ))}
    </Grid>
    )

    //delete eval handler
    async function handleDeleteEval(evalId) {
        const response = await fetch(`http://localhost:42069/preceptor/${evalId}`,{
        method: "DELETE"});

        setEvals(evals.filter((evaluation) => evaluation._id !== evalId));
      };
}


  //preliminary loader
export const evalsLoader = async () => {
    const res = await fetch("http://localhost:42069/preceptor/");
    return res;
}