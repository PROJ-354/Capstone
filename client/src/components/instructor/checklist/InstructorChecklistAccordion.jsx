import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import InstructorChecklistCheckboxInput from './InstructorChecklistCheckboxInput';
import PreceptorChecklistDateInput from '../../preceptor/checklist/PreceptorChecklistDateInput';

export default function InstructorChecklistAccordion({ section }) {
    return (
        <TableContainer>
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
            <PreceptorChecklistDateInput
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
            <InstructorChecklistCheckboxInput
                key={`${section.name} ${skill.name} ${i}`}
                sectionName={section.name}
                skill={skill}
                id={i}
            />
        );
    }
    return content;
};
