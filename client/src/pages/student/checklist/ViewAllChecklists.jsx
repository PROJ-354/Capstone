import { Box, Typography, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import WeekCard from '../../../components/checklist/ChecklistCard';

export default function ViewAllChecklists() {
    const checklists = useLoaderData();
    return (
        <Box p={4}>
            <Typography variant="h3">Checklists</Typography>
            <Grid container spacing={2}>
                {checklists &&
                    checklists.map((checklist) => (
                        <Grid key={checklist._id} item>
                            <WeekCard checklist={checklist} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export const viewAllChecklistsLoader = async ({ params }) => {
    const auth = JSON.parse(localStorage.getItem('auth')).result;
    const checklistRes = await fetch(`http://localhost:42069/api/weeks/user/${auth._id}`);

    if (!checklistRes.ok) {
        console.log('Error getting that users checklists');
    }

    return await checklistRes.json();
};
