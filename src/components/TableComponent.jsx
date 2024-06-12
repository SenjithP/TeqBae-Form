import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import jsPDF from 'jspdf';

const TableComponent = ({ formValues }) => {

  const handleRowClick = (row) => {
    const doc = new jsPDF();
    doc.text(`Name: ${row.name}`, 10, 10);
    doc.text(`Email: ${row.email}`, 10, 20);
    doc.text(`Age: ${row.age}`, 10, 30);
    doc.save('form-data.pdf');
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formValues.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
          {formValues.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography>No data available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.propTypes = {
  formValues: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TableComponent;
