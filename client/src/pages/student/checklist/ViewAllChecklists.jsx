import { Box, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import WeekCard from '../../../components/WeekCard';

export default function ViewAllChecklists() {
    const data = useLoaderData();

    return (
        <Box>
            <Typography variant="h3">Checklists</Typography>
            {data &&
                data.map((checklist) => (
                    <WeekCard key={checklist._id} checklist={checklist} />
                ))}
        </Box>
    );
}

export const viewAllChecklistsLoader = async ({ params }) => {
    const auth = JSON.parse(localStorage.getItem('auth')).result;
    const res = await fetch(`http://localhost:42069/api/weeks/user/${auth._id}`);

    if (!res.ok) {
        console.log('Error getting that users checklists');
    }

    const data = await res.json();
    return data;
};
