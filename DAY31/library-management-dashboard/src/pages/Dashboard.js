import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Button, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Typography variant="h6" gutterBottom>
        Welcome to the Library Management System
      </Typography>
      <Typography variant="body1" paragraph>
        From here, you can manage the library's books and authors. Click on the links below to add, edit, or delete book and author records.
      </Typography>

      <Grid container spacing={3}>
        {/* Books Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Manage Books
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add, edit, and delete book records, including titles, authors, ISBN numbers, and publication dates.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/books"
                style={{ marginTop: '10px' }}
                fullWidth
              >
                Go to Books
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Authors Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Manage Authors
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add, edit, and delete author records, including author names, birth dates, and biographies.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/authors"
                style={{ marginTop: '10px' }}
                fullWidth
              >
                Go to Authors
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
