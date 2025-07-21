import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
const Fruits = [
  {
    id: 1,
    title: "Fruits 1",
    clicked: "Vincent van Gogh",
    image:
      "https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_1280.jpg",
    description: "A famous masterpiece depicting a swirling night sky.",
  },
  {
    id: 2,
    title: "Fruit 2",
    clicked: "Salvador Dalí",
    image:
      "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg",
    description: "Melting clocks in a surreal landscape.",
  },
  {
    id: 3,
    title: "Fruit 3",
    clicked: "Johannes Vermeer",
    image:
      "https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_1280.jpg",
    description: "Iconic portrait of a girl with an earring.",
  },
  {
    id: 4,
    title: "Fruit 4",
    clicked: "Johannes Vermeerss",
    image:
      "https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_1280.jpg",
    description: "Iconic portrait of a girl with an earring.",
  },
];

const Cards = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          More Fruits
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={4}>
            {Fruits.map((fruit,index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>  
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ height: "100px" }}
                    image={fruit.image}
                    title={fruit.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {fruit.clicked}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {fruit.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Cards;
