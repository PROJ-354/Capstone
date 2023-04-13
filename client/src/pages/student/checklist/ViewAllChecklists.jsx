import { Box, Typography, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import WeekCard from '../../../components/checklist/ChecklistCard';

export default function ViewAllChecklists() {
    const { checklistData, preceptorUsers } = useLoaderData();
    return (
        <Box p={4}>
            <Typography variant="h3">Checklists</Typography>
            <Grid container spacing={2}>
                {checklistData &&
                    checklistData
                        .sort((a, b) => {
                            const aName = a.name.split(' ')[1];
                            const bName = b.name.split(' ')[1];
                            if (aName < bName) {
                                return -1;
                            } else {
                                return 1;
                            }
                        })
                        .map((checklist) => (
                            <Grid key={checklist._id} item>
                                <WeekCard
                                    checklist={checklist}
                                    preceptor={preceptorUsers.find(
                                        (preceptor) =>
                                            preceptor._id === checklist.preceptor_id
                                    )}
                                />
                            </Grid>
                        ))}
            </Grid>
        </Box>
    );
}

export const viewAllChecklistsLoader = async ({ params }) => {
    //Get the currently logged in user's ID and the list of their checklists
    const auth = JSON.parse(localStorage.getItem('auth')).result;
    const checklistRes = await fetch(`http://localhost:42069/api/weeks/user/${auth._id}`);

    if (!checklistRes.ok) {
        console.log('Error getting that users checklists');
    }

    const checklistData = await checklistRes.json();

    const preceptorIds = [];

    checklistData.map((checklist) => {
        preceptorIds.push(checklist.preceptor_id);
    });

    const preceptorUsers = [];

    preceptorIds.map(async (preceptorId) => {
        if (preceptorId && preceptorId !== '') {
            const res = await fetch(`http://localhost:42069/api/users/${preceptorId}`);
            if (res.ok) {
                preceptorUsers.push(await res.json());
            }
        }
    });

    return { checklistData, preceptorUsers };
};
