import { Box, Card, CardContent, CardMedia, Grid, Typography, Avatar } from "@mui/material";

const articles = [
  {
    title: "The Future of Remote Work: Trends and Strategies for...",
    image: "https://www.saasable.io/assets/images/blog/blog19.png",
    author: "Tricia Wolf",
    role: "Direct Optimization Executive",
    avatar: "https://www.saasable.io/assets/images/user/avatar1.png",
  },
  {
    title: "Unlocking the Power of Data: How Analytics Can Drive...",
    image: "https://www.saasable.io/assets/images/blog/blog18.png",
    author: "Emily P.",
    role: "Software Developer",
    avatar: "https://www.saasable.io/assets/images/user/avatar2.png",
  },
];

const ResourceCenter = () => {
  return (
    <Box sx={{ bgcolor: "#111", color: "#fff", p: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="white">
        Resource Center
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }} color="white">
        Discover the features that will transform your customer relationships
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ bgcolor: "#1a1a1a", borderRadius: 3 }}>
              <CardMedia component="img" height="200" image={article.image} alt={article.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom color="white">
                  {article.title}
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <Avatar src={article.avatar} alt={article.author} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold" color="white">
                      {article.author}
                    </Typography>
                    <Typography variant="body2" color="lightgray">
                      {article.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceCenter;