import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Stack,
    Tab,
    TextField,
    Typography,
} from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { TabContext, TabList } from '@mui/lab';
import ChecklistTabPanel from '../../../components/checklist/ChecklistTabPanel';

export default function ViewChecklist() {
    const [tabValue, setTabValue] = useState('Lensometry');
    const [open, setOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    //Grabs the data from the backend using the loader function
    const { checklistData, preceptorData } = useLoaderData();

    return (
        <Box p={2}>
            <Typography variant="h4">
                {checklistData.week.name} Skills Assessment
            </Typography>
            <TabContext value={tabValue}>
                <Box>
                    <TabList aria-label="Skills assessment forms" onChange={handleChange}>
                        {checklistData.week.skills_assessment.section.map((section) => (
                            <Tab
                                key={section.name}
                                label={section.name}
                                value={section.name}
                            />
                        ))}
                    </TabList>
                </Box>
                <Form method="post">
                    {checklistData.week.skills_assessment.section.map((section) => (
                        <ChecklistTabPanel key={section.name} section={section} />
                    ))}
                    <TextField
                        label="Preceptor"
                        select
                        fullWidth
                        name="selected-preceptor"
                        defaultValue={''}
                    >
                        {preceptorData.map((preceptor) => {
                            return (
                                <MenuItem key={preceptor._id} value={preceptor._id}>
                                    {preceptor.firstName} {preceptor.lastName}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                    <Stack direction="row" spacing={1} alignContent="center">
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                        <Button variant="contained" onClick={() => setOpen(true)}>
                            Dialog Submit
                        </Button>
                        <Typography variant="body1">
                            By submitting this form you agree that all information entered
                            is accurate and correct.
                        </Typography>
                    </Stack>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <DialogTitle>Submit the form?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to submit the form? You will not be
                                able to edit after submitting.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </Dialog>
                </Form>
            </TabContext>
        </Box>
    );
}

export const checklistAction = async ({ request, params }) => {
    const formData = await request.formData();
    const res = await fetch(`http://localhost:42069/api/weeks/${params.id}`);
    const loaderData = await res.json();

    const preceptorId = formData.get('selected-preceptor');

    const resData = {
        preceptorId,
        data: [],
    };

    //eslint-disable-next-line
    loaderData.week.skills_assessment.section.map((section) => {
        //eslint-disable-next-line
        section.skills.map((skill) => {
            for (let i = 0; i < section.experiences; i++) {
                const data = formData.get(
                    `${section.name} ${skill.name} Experience ${i}`
                );
                const date = formData.get(`${section.name} date ${i}`);
                resData.data.push({
                    section: section.name,
                    skill: skill.name,
                    experience: i + 1,
                    date: date,
                    checked: data === null ? false : true,
                });
            }
        });
    });

    await fetch(`http://localhost:42069/api/weeks/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resData),
    });

    return redirect('/checklist');
};

export const checklistLoader = async ({ params }) => {
    const checklistRes = await fetch(`http://localhost:42069/api/weeks/${params.id}`);
    const preceptorRes = await fetch(`http://localhost:42069/api/users/preceptors`);

    if (!checklistRes.ok) {
        console.log('There was an error retreiving that checklist');
    }

    if (!preceptorRes.ok) {
        console.log('There was an error retreiving the preceptors');
    }

    const checklistData = await checklistRes.json();
    const preceptorData = await preceptorRes.json();

    return {
        checklistData,
        preceptorData,
    };
};
