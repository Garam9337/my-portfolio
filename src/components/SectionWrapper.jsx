import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function SectionWrapper({ id, background = 'default', children }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        bgcolor: background === 'secondary' ? 'var(--color-bg-secondary)' : 'background.default',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default SectionWrapper;
