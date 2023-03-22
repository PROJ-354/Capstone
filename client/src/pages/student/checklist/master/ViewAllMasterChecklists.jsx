import { Box, Grid, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

export default function ViewAllMasterChecklists() {
    const checklists = useLoaderData();

    return (
        <Box p={4}>
            <Typography variant="h3">Master Checklists</Typography>
            <Grid container spacing={2}>
                {checklists &&
                    checklists.map((checklist) => (
                        <Grid key={checklist._id} item>
                            {checklist.name}
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export const viewAllMasterChecklistsLoader = async ({ params }) => {
    //Get all checklists that are labelled as master
    const res = await fetch('http://localhost:42069/api/weeks/master');

    if (!res.ok) {
        console.log('Error getting master checklists!');
    }

    return await res.json();
};
