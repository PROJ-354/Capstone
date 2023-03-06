import {
    Autocomplete,
    Box,
    Button,
    Stack,
    Tab,
    TextField,
    Typography,
} from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { TabContext, TabList } from '@mui/lab';
import ChecklistTabPanel from '../../../components/ChecklistTabPanel';

const preceptors = [
    {
        name: 'Simon Dumalski',
        id: '1234',
    },
    {
        name: 'Brooks Maclean',
        id: '4321',
    },
];

export default function ViewChecklist() {
    const [tabValue, setTabValue] = useState('Lensometry');
    const [preceptor, setPreceptor] = useState(null);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    //Grabs the data from the backend using the loader function
    const checklist = useLoaderData();

    return (
        <Box>
            <Typography variant="h4">{checklist.week.name} Skills Assessment</Typography>
            <TabContext value={tabValue}>
                <Box>
                    <TabList aria-label="Skills assessment forms" onChange={handleChange}>
                        {checklist.week.skills_assessment.section.map((section) => (
                            <Tab
                                key={section.name}
                                label={section.name}
                                value={section.name}
                            />
                        ))}
                    </TabList>
                </Box>
                <Form method="post">
                    {checklist.week.skills_assessment.section.map((section) => (
                        <ChecklistTabPanel key={section.name} section={section} />
                    ))}
                    <Autocomplete
                        disablePortal
                        options={preceptors}
                        renderInput={(params) => (
                            <TextField
                                name={'selected-preceptor-name'}
                                {...params}
                                label="Preceptor"
                            />
                        )}
                        value={preceptor}
                        onChange={(event, newValue) => setPreceptor(newValue)}
                    />
                    <Stack direction="row" spacing={1} alignContent="center">
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                        <Typography variant="body1">
                            By submitting this form you agree that all information entered
                            is accurate and correct.
                        </Typography>
                    </Stack>
                </Form>
            </TabContext>
        </Box>
    );
}

export const checklistAction = async ({ request }) => {
    const formData = await request.formData();
    const id = request.url.split('/')[4];
    const res = await fetch(`http://localhost:42069/api/weeks/${id}`);
    const loaderData = await res.json();

    const resData = [];

    const preceptorName = formData.get('selected-preceptor-name');

    //eslint-disable-next-line
    loaderData.week.skills_assessment.section.map((section) => {
        //eslint-disable-next-line
        section.skills.map((skill) => {
            for (let i = 0; i < section.experiences; i++) {
                const data = formData.get(
                    `${section.name} ${skill.name} Experience ${i}`
                );
                const date = formData.get(`${section.name} date ${i}`);
                resData.push({
                    section: section.name,
                    skill: skill.name,
                    experience: i + 1,
                    date: date,
                    checked: data === null ? false : true,
                    preceptorName,
                });
            }
        });
    });

    //console.log(resData);

    const response = await fetch(`http://localhost:42069/api/weeks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resData),
    });

    const json = await response.json();
    console.log(json);

    return redirect('/checklist/63ebfbda6549b2938d8c11f1');
};

export const checklistLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:42069/api/weeks/${params.id}`);

    if (!res.ok) {
        console.log('There was an error retreiving that checklist');
    }

    const data = await res.json();
    //console.log(data);
    return data;
};
