import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const InstructorSchedulePage = () => {
    // state
    const [studentIDState, setStudentIDState] = useState(null);
    const [weekData, setWeekData] = useState(null);

    // handle search button click; get a schedule by a users sait id
    async function handleSearch(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:42069/api/schedules/student/${studentIDState}`);
        setWeekData(await response.json());
        console.log(weekData)
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", my: 8}}>
                <Box>
                    <TextField
                        label='Student Email'
                        onChange={(e) => setStudentIDState(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        sx={{ mx: 2 }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Box>
            </Box>

            {!weekData && 
                <Typography align="center" color="red">
                    Please Enter A Valid Student Email To View A Schedule...
                </Typography>
            }

            {weekData &&
                <Typography variant="h4" align="center">
                    Schedule Information
                </Typography>}
                
            {weekData && weekData.weeks.map((week, index) => (
                <Box key={week._id} sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                    <Paper elevation={8}>
                        <Typography sx={{ p: 1 }} variant="h6">Week # {index + 1}</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Type </TableCell>
                                        <TableCell> Sunday </TableCell>
                                        <TableCell> Monday </TableCell>
                                        <TableCell> Tuesday </TableCell>
                                        <TableCell> Wednesday </TableCell>
                                        <TableCell> Thursday </TableCell>
                                        <TableCell> Friday </TableCell>
                                        <TableCell> Saturday </TableCell>
                                        <TableCell> Total </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell> Scheduled: </TableCell>
                                        <TableCell> {week.sunday.scheduledHours} </TableCell>
                                        <TableCell> {week.monday.scheduledHours} </TableCell>
                                        <TableCell> {week.tuesday.scheduledHours} </TableCell>
                                        <TableCell> {week.wednesday.scheduledHours} </TableCell>
                                        <TableCell> {week.thursday.scheduledHours} </TableCell>
                                        <TableCell> {week.friday.scheduledHours} </TableCell>
                                        <TableCell> {week.saturday.scheduledHours} </TableCell>
                                        <TableCell>
                                            {week.sunday.scheduledHours + week.monday.scheduledHours +
                                                week.tuesday.scheduledHours + week.wednesday.scheduledHours +
                                                week.thursday.scheduledHours + week.friday.scheduledHours +
                                                week.saturday.scheduledHours
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell> Actual: </TableCell>
                                        <TableCell> {week.sunday.actualHours} </TableCell>
                                        <TableCell> {week.monday.actualHours} </TableCell>
                                        <TableCell> {week.tuesday.actualHours} </TableCell>
                                        <TableCell> {week.wednesday.actualHours} </TableCell>
                                        <TableCell> {week.thursday.actualHours} </TableCell>
                                        <TableCell> {week.friday.actualHours} </TableCell>
                                        <TableCell> {week.saturday.actualHours} </TableCell>
                                        <TableCell>
                                            {week.sunday.actualHours + week.monday.actualHours +
                                                week.tuesday.actualHours + week.wednesday.actualHours +
                                                week.thursday.actualHours + week.friday.actualHours +
                                                week.saturday.actualHours
                                            }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            ))}

            {weekData && (
                <Box sx={{ display: "flex", justifyContent: "center", p: 2, mb: 2 }}>
                    <Paper elevation={8} sx={{ p: 4 }}>
                        {weekData && weekData.is_sumbitted && (
                            <Typography>Sumbission Status: Submitted</Typography>
                        )}
                        {weekData && !weekData.is_sumbitted && (
                            <Typography>Sumbission Status: Not Submitted</Typography>
                        )}
                        {weekData && weekData.is_approved && (
                            <Typography>Approval Status: Approved</Typography>
                        )}
                        {weekData && !weekData.is_approved && (
                            <Typography>Approval Status: Not Approved</Typography>
                        )}
                    </Paper>
                </Box>
            )}

        </>
    );
}

export default InstructorSchedulePage;