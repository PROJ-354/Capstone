import { Box, Typography, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import PreceptorWeekCard from '../../components/checklist/PreceptorWeekCard';

export default function PreceptorViewAllChecklists() {
    const checklists = useLoaderData();
    return (
        <Box p={4}>
            <Typography variant="h3">Checklists</Typography>
            <Grid container spacing={2}>
                {checklists &&
                    checklists.map((checklist) => (
                        <Grid key={checklist._id} item>
                            <PreceptorWeekCard checklist={checklist} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}
