import { TableCell, Checkbox } from '@mui/material';
import { useState } from 'react';

export default function StudentChecklistCheckboxInput({ sectionName, skill, id }) {
    const [value, setValue] = useState(skill.experiences[id].student_checked);

    return (
        <TableCell>
            <Checkbox
                name={`${sectionName} ${skill.name} Experience ${id}`}
                checked={value}
                value={value}
                onChange={(event) => {
                    setValue(event.target.checked);
                }}
            />
        </TableCell>
    );
}
