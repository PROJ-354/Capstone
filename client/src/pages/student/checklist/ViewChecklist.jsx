import { Box } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

export default function ViewChecklist() {
    //Grabs the data from the backend using the loader function
    const checklist = useLoaderData();

    return <Box>ViewChecklist</Box>;
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
