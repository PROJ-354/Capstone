import { Box, TableContainer, Table, Typography, TableHead, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import WeekCard from '../../../components/WeekCard';

export default function ViewAllChecklists() {
    const data = useLoaderData();

    return (
        <Box p={4}>
            <Typography variant="h3">Checklists</Typography>
            <Grid container spacing={2}>
                {data &&
                    data.map((checklist) => (
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
    const res = await fetch(`http://localhost:42069/api/weeks/user/${auth._id}`);

    if (!res.ok) {
        console.log('Error getting that users checklists');
    }

    return await res.json();
};
