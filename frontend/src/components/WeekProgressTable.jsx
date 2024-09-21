import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';

const WeekProgressTable = () => {
  const weeks = [
    { week: 'Week 1', completed: true },
    { week: 'Week 2', completed: true },
    { week: 'Week 3', completed: true },
    { week: 'Week 4', completed: true },
    { week: 'Week 5', completed: false },
    { week: 'Week 6', completed: false },
    { week: 'Week 7', completed: false },
    { week: 'Week 8', completed: false },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow sx = {{ "& th": { color: "rgba(96, 96, 96)"}}}>
          {weeks.map((week, index) => (
            <TableCell key={index} align="center">
              {week.week}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {weeks.map((week, index) => (
            <TableCell key={index} align="center">
              {week.completed ? <CheckIcon sx={{ color: green[500] }} /> : null}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default WeekProgressTable;