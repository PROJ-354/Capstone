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

export default function ChecklistTabPanel({ section }) {
    return (
        <TabPanel value={`${section.name}`}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>{loadExperienceHeaders}</TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>{loadDateInputs}</TableRow>
                        {section.skills.map((skill) => (
                            <TableRow key={`${skill.name}`}>
                                <TableCell>{skill.name}</TableCell>
                                {loadCheckboxes}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TabPanel>
    );
}

const loadExperienceHeaders = (section) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <TableCell key={`${section.name} header ${i}`}>Experience {i + 1}</TableCell>
        );
    }
    return content;
};

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

const loadCheckboxes = (section, skill) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <TableCell key={`${section.name} ${skill.name} ${i}`}>
                <Checkbox
                    value="test"
                    name={`${section.name} ${skill.name} Experience ${i}`}
                />
            </TableCell>
        );
    }
    return content;
};
