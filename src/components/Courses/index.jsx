import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from '@mui/material';

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { courseList } from './CourseList';
import { groupList } from './Groups';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Courses = () => {
    return(
    <>
        <TableGroups/>
        <TableCourses/>
    </>)
}



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#260080",
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "white",
    '&:nth-of-type(2)': {
      fontWeight:500,
      textDecoration: "underline",
      cursor: "pointer"
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: "rgb(17, 7, 40)",
  },
  '&:nth-of-type(odd)': {
    backgroundColor: "#150833",
  },
  '& td, & th' : {
    border: 0
  },
  '&:hover td' : {
    backgroundColor: "#1D0060 ",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function TableGroups() {
  const themeM = useTheme();
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const openNewTab = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  return (
    <TableContainer component={Paper} sx={{marginTop:"1rem", backgroundColor:"transparent"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='left' style={{width:50}} >&nbsp;</StyledTableCell>
            <StyledTableCell align='left'  style={{minWidth:200}}>{downMd ? "COMMUNITIES" : "COLLEGE COMMUNITIES"}</StyledTableCell>
            <StyledTableCell align='left' style={{width:175}}>AREA</StyledTableCell>
            <StyledTableCell align='left' style={{width:175}}>ROLE</StyledTableCell>
            <StyledTableCell align='left' style={{width:200}}>DATE</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {groupList.map((row) => (
            <StyledTableRow
            hover
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell scope="row">{row.image}</StyledTableCell>
              <StyledTableCell align='left' onClick={() => {openNewTab(row.link)}}>{row.name}</StyledTableCell>
              <StyledTableCell align='left'>{row.area}</StyledTableCell>
              <StyledTableCell align='left'>{row.role}</StyledTableCell>
              <StyledTableCell align='left'>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TableCourses() {
  const themeM = useTheme();
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));

  const openNewTab = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
    return (
      <TableContainer component={Paper}  mt={1} spacing={1} sx={{backgroundColor:"transparent"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell scope="row" style={{width:50}}>&nbsp;</StyledTableCell>
              <StyledTableCell align='left' style={{minWidth:200}}>{downMd ? "COURSES" : "ADDITIONAL EDUCATION"}</StyledTableCell>
              <StyledTableCell align='left' style={{width:175}}>AREA</StyledTableCell>
              <StyledTableCell align='left' style={{width:175}}>BY</StyledTableCell>
              <StyledTableCell align='left' style={{width:200}}>DATE</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {courseList.map((row) => (
              <StyledTableRow
              hover
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell scope="row">{row.image}</StyledTableCell>
                <StyledTableCell align='left' onClick={() => {openNewTab(row.link)}}>{row.name}</StyledTableCell>
                <StyledTableCell align='left'>{row.area}</StyledTableCell>
                <StyledTableCell align='left'>{row.by}</StyledTableCell>
                <StyledTableCell align='left'>{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
