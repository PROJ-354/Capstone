import { Box, Button, Stack, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

export default function ViewMasterChecklist() {
    const checklist = useLoaderData();
    return (
        <Box p={4}>
            <Typography variant="h3">{checklist.week.name}</Typography>
            <Stack spacing={4} direction="row">
                <Button variant="contained">Add new row</Button>
                <Button variant="contained">Add new column</Button>
                <Button variant="contained">Add new section</Button>
            </Stack>
        </Box>
    );
}

export const viewMasterChecklistLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:42069/api/weeks/${params.id}`);

    if (!res.ok) {
        console.log('There was an error retrieving that checklist');
    }

    return res.json();
};
