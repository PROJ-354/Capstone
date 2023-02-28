import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    Input,
} from '@mui/material';
import { TabPanel } from '@mui/lab';
import { useState } from 'react';

export default function ChecklistTabPanel({ section }) {
    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');
    const [thirdDate, setThirdDate] = useState('');

    return (
        <TabPanel value={section.name}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Skills performed by the student</TableCell>
                            {loadExperienceHeaders(section)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            {/* {loadDateInputs(section)} */}
                            <TableCell>
                                <Input
                                    type="date"
                                    name={'Lensometry date 0'}
                                    value={firstDate}
                                    onChange={(event) => {
                                        setFirstDate(event.target.value);
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Input
                                    type="date"
                                    name={'Lensometry date 1'}
                                    value={secondDate}
                                    onChange={(event) => {
                                        setSecondDate(event.target.value);
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Input
                                    type="date"
                                    name={'Lensometry date 2'}
                                    value={thirdDate}
                                    onChange={(event) => {
                                        setThirdDate(event.target.value);
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                        {section.skills.map((skill) => (
                            <TableRow key={skill.name}>
                                <TableCell>{skill.name}</TableCell>
                                {loadCheckboxes(section, skill)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabPanel>
    );
}

//Adds the correct amount of headers saying "Exerpience #" based on the checklist
const loadExperienceHeaders = (section) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <TableCell key={`${section.name} header ${i}`}>Experience {i + 1}</TableCell>
        );
    }
    return content;
};

//Loads the correct amount of date inputs based on the checklist
const loadDateInputs = (section) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <TableCell key={`${section.name} date ${i}`}>
                <Input type="date" name={`${section.name} date ${i}`} />
            </TableCell>
        );
    }
    return content;
};

//Loads all of the checkboxes for each skill in the checklist
const loadCheckboxes = (section, skill) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <TableCell key={`${section.name} ${skill.name} ${i}`}>
                <Checkbox
                    value="checked"
                    name={`${section.name} ${skill.name} Experience ${i}`}
                />
            </TableCell>
        );
    }
    return content;
};
