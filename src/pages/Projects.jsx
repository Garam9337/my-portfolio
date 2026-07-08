import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '60vh',
        bgcolor: 'background.default',
      }}
    >
      <Container
        maxWidth="md"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-primary)', letterSpacing: 2, fontWeight: 700 }}
        >
          PROJECTS
        </Typography>
        <Card sx={{ width: '100%', mt: 2, bgcolor: 'var(--color-bg-card)', borderRadius: 3 }}>
          <CardContent sx={{ py: { xs: 5, md: 6 } }}>
            <Typography variant="h4" sx={{ color: 'var(--color-text-primary)', mb: 2 }}>
              Projects 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
              포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;
