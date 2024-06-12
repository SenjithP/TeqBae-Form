import { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const App = () => {
  const [formValues, setFormValues] = useState([]);

  const addFormValues = (values) => {
    setFormValues([...formValues, values]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Box padding={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Form
            </Typography>
            <FormComponent addFormValues={addFormValues} />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box padding={2}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Table
            </Typography>
            <TableComponent formValues={formValues} />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
