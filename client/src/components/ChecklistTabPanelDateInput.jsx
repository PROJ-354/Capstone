import { TableCell, Input } from '@mui/material';
import { useState } from 'react';

export default function ChecklistTabPanelDateInput({ sectionName, id }) {
    const [date, setDate] = useState('');

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
