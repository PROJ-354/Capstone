import { TableCell, Input } from '@mui/material';
import { useState } from 'react';

export default function PreceptorChecklistDateInput({ sectionName, id, dateValue }) {
    const [date, setDate] = useState(dateValue == null ? '' : dateValue.split('T')[0]);

    return (
        <TableCell>
            <Input
                type="date"
                name={`${sectionName} date ${id}`}
                value={date}
                disabled={true}
                onChange={(event) => {
                    setDate(event.target.value);
                }}
            />
        </TableCell>
    );
}
