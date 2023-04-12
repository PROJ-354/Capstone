import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, MenuItem, InputLabel, Button, TextField } from '@mui/material';

import { useLoaderData, useActionData, redirect, Form } from 'react-router-dom';

export default function PreceptorEvaluate() {
    let [value, setValue] = React.useState('');

    let handleInputChange = (e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    const masterEval = useLoaderData();
    const data = useActionData();

    return (
        <Form method="post">
            <InputLabel id="demo-simple-select-label">
                First or last evaluation?
            </InputLabel>
            <TextField
                label="Choose Month"
                select
                defaultValue={''}
                required
                fullWidth
                name="month"
                size="small"
                color="secondary"
            >
                <MenuItem value={1}>First</MenuItem>
                <MenuItem value={2}>Last</MenuItem>
            </TextField>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Evaluation Criteria</TableCell>
                            <TableCell align="right">Industry Ready</TableCell>
                            <TableCell align="right">Entry Level</TableCell>
                            <TableCell align="right">Satisfactory</TableCell>
                            <TableCell align="right">Needs Improvement</TableCell>
                            <TableCell align="right">Unnacceptable</TableCell>
                            <TableCell align="right">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {masterEval.performance_assessment.map((evals, idx) => (
                            <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {evals.skill_name}
                                </TableCell>

                                {evals.rating_description.map((desc, idx2) => (
                                    <TableCell key={idx2}>{desc}</TableCell>
                                ))}

                                <TableCell align="right">
                                    <TextField
                                        label="Rating"
                                        select
                                        defaultValue={''}
                                        required
                                        fullWidth
                                        name={evals.skill_name + 'rating'}
                                        size="small"
                                        color="secondary"
                                    >
                                        <MenuItem value={5}>Industry Ready</MenuItem>
                                        <MenuItem value={4}>Entry Level</MenuItem>
                                        <MenuItem value={3}>Satisfactory</MenuItem>
                                        <MenuItem value={2}>Needs Improvement</MenuItem>
                                        <MenuItem value={1}>Unnacceptable</MenuItem>
                                    </TextField>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TextField
                id="outlined-basic"
                name="comments"
                label="Comments"
                variant="outlined"
                fullWidth
                multiline
                value={value}
                onChange={handleInputChange}
                placeholder="Place comments here..."
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Form>
    );
}

export const evaluateLoader = async () => {
    const res = await fetch('http://localhost:42069/api/preceptor/eval');
    return res;
};

export const evaluateAction = async ({ request }) => {
    const user = JSON.parse(localStorage.getItem('auth')).result._id;

    //grab the form data
    const data = await request.formData();
    //grab the master evaluation
    const res = await fetch('http://localhost:42069/api/preceptor/eval');
    const newEval = await res.json();

    newEval.complete = true;
    newEval._id = null;
    newEval.is_master = false;
    newEval.month = parseInt(data.get('month'));
    newEval.comments = data.get('comments');
    newEval.preceptor_id = user;
    newEval.student_id = "63ebc4288e74a2adcd75d332";


    newEval.performance_assessment.map((evals) => {
        evals.skill_rating = data.get(evals.skill_name + 'rating');
    });

    fetch('http://localhost:42069/api/preceptor/eval', {
        method: 'POST',
        body: JSON.stringify(newEval),
        headers: { 'Content-Type': 'application/json' },
    });
    return redirect(`/preceptor/home/${user}`);
};
