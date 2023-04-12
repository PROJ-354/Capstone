import { TableCell, Checkbox } from '@mui/material';
import { useState } from 'react';

export default function PreceptorChecklistCheckboxInput({ sectionName, skill, id }) {
    const [value, setValue] = useState(skill.experiences[id].student_checked);
    const [preceptorValue, setpreceptorValue] = useState(
        skill.experiences[id].preceptor_checked
    );

    return (
        <TableCell>
            <Checkbox
                name={`${sectionName} ${skill.name} Experience ${id}`}
                checked={value}
                value={value}
                disabled="true"
                onChange={(event) => {
                    setValue(event.target.checked);
                }}
            />
            <Checkbox
                name={`${sectionName} ${skill.name} Experience ${id}`}
                checked={preceptorValue}
                value={preceptorValue}
                onChange={(event) => {
                    setpreceptorValue(event.target.checked);
                }}
            />
        </TableCell>
    );
}
