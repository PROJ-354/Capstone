import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function ViewAllMasterChecklists() {
    const checklists = useLoaderData();
    const navigate = useNavigate();
    return (
        <Box p={4}>
            <Stack spacing={4} direction="row">
                <Typography variant="h3">Master Checklists</Typography>
                <Button
                    variant="contained"
                    onClick={() =>
                        alert(
                            'this button will create a new master checklist based off a template'
                        )
                    }
                >
                    Add New Checklist
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/checklist/master/641cbcbd322f2d02ba575e51')}
                >
                    Edit Checklist (Temp)
                </Button>
            </Stack>
            <Grid container spacing={2}>
                {/* {checklists &&
                    checklists.map((checklist) => (
                        <Grid key={checklist._id} item>
                            {checklist.name}
                        </Grid>
                    ))} */}
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
