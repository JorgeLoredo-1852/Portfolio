import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from '@mui/material';

import { courseList } from './CourseList';
import { groupList } from './Groups';

export const Courses = () => {
    return(
    <>
        <TableGroups/>
        <TableCourses/>
    </>)
}



function TableGroups() {
  return (
    <TableContainer component={Paper} sx={{marginTop:"1rem"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left' style={{width:50}} >Img</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left' style={{width:175}}>Area</TableCell>
            <TableCell align='left' style={{width:175}}>Role</TableCell>
            <TableCell align='left' style={{width:175}}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groupList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.image}</TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='left'>{row.area}</TableCell>
              <TableCell align='left'>{row.role}</TableCell>
              <TableCell align='left'>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TableCourses() {
    return (
      <TableContainer component={Paper} sx={{marginTop:"1rem"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row" style={{width:50}}>Img</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left' style={{width:175}}>Area</TableCell>
              <TableCell align='left' style={{width:175}}>By</TableCell>
              <TableCell align='left' style={{width:175}}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.image}</TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.area}</TableCell>
                <TableCell align='left'>{row.by}</TableCell>
                <TableCell align='left'>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
