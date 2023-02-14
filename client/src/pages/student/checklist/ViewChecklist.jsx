import { Box, Tab } from '@mui/material';
import { Form, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { ChecklistTabPanel } from '../../../components/ChecklistTabPanel';

export default function ViewChecklist() {
    const [tabValue, setTabValue] = useState(null);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    //Grabs the data from the backend using the loader function
    const checklist = useLoaderData();

    return (
        <Box>
            <TabContext value={tabValue}>
                <Box>
                    <TabList aria-label="Skills assessment forms" onChange={handleChange}>
                        {checklist.skills_assessment.sections.map((section) => (
                            <Tab
                                key={section.name}
                                label={section.name}
                                value={section.name}
                            />
                        ))}
                    </TabList>
                </Box>
                <Form method="post">
                    {checklist.skills_assessment.sections.map((section) => (
                        <ChecklistTabPanel
                            key={section.name}
                            section={section}
                            skills={section.skills}
                        />
                    ))}
                </Form>
            </TabContext>
        </Box>
    );
}

export const checklistLoader = async ({ params }) => {
    //TODO: set this to the correct route
    const res = await fetch(`http://localhost:42069/api/checklists/${params.id}`);

    if (!res.ok) {
        console.log('There was an error retreiving that checklist');
    }

    const data = await res.json();
    return data;
};

export const checklistAction = () => {};
