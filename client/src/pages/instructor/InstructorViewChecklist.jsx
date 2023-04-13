import { Box } from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';

export default function InstructorViewChecklist() {
    return <Box>InstructorViewChecklist</Box>;
}

export const instructorSaveGradeAction = async ({ request, params }) => {
    const formData = await request.formData();
    const res = await fetch(`http://localhost:42069/api/weeks/${params.id}`);
    const loaderData = await res.json();

    const grade = formData.get('grade');

    await fetch(`http://localhost:42069/api/weeks/instructor/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grade),
    });

    return redirect(`/instructor/home/${params.userId}`);
};
