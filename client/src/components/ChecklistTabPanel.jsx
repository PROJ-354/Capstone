import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import { TabPanel } from '@mui/lab';
import ChecklistTabPanelDateInput from './ChecklistTabPanelDateInput';
import ChecklistTabPanelCheckboxInput from './ChecklistTabPanelCheckboxInput';

export default function ChecklistTabPanel({ section }) {
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
                            {loadDateInputs(section)}
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
        const date = section.skills[0].experiences[i].date;
        content.push(
            <ChecklistTabPanelDateInput
                key={`${section.name} date ${i}`}
                sectionName={section.name}
                id={i}
                dateValue={date}
            />
        );
    }
    return content;
};

//Loads all of the checkboxes for each skill in the checklist
const loadCheckboxes = (section, skill) => {
    let content = [];
    for (let i = 0; i < section.experiences; i++) {
        content.push(
            <ChecklistTabPanelCheckboxInput
                key={`${section.name} ${skill.name} ${i}`}
                sectionName={section.name}
                skill={skill}
                id={i}
            />
        );
    }
    return content;
};
