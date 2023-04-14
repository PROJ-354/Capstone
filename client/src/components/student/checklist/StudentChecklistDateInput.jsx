import { TableCell, Input } from '@mui/material';
import { useState } from 'react';

export default function StudentChecklistDateInput({ sectionName, id, dateValue }) {
    const [date, setDate] = useState(dateValue == null ? '' : dateValue.split('T')[0]);

    return (
        <TableCell>
            <Input
                type="date"
                name={`${sectionName} date ${id}`}
                value={date}
                onChange={(event) => {
                    setDate(event.target.value);
                }}
            />
        </TableCell>
    );
}
