import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SectionWrapper from '../components/SectionWrapper';

const PLACEHOLDER_THUMBS = [1, 2, 3, 4];

function ProjectsSection() {
  return (
    <SectionWrapper id="projects" background="secondary">
      <Typography
        variant="overline"
        sx={{ color: 'var(--color-accent)', letterSpacing: 2, fontWeight: 700 }}
      >
        PROJECTS
      </Typography>
      <Typography variant="h5" sx={{ color: 'var(--color-text-primary)', mt: 1, mb: 1 }}>
        여기는 Projects 섹션입니다.
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)', mb: 4 }}>
        대표작 썸네일 3~4개와 '더 보기' 버튼이 들어갈 예정입니다.
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 4,
        }}
      >
        {PLACEHOLDER_THUMBS.map((n) => (
          <Card
            key={n}
            sx={{
              bgcolor: 'var(--color-bg-card)',
              borderRadius: 2,
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Typography sx={{ color: 'var(--color-text-muted)' }}>Project {n}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Button
        variant="outlined"
        sx={{
          color: 'var(--color-secondary)',
          borderColor: 'var(--color-secondary)',
          '&:hover': {
            borderColor: 'var(--color-link-hover)',
            color: 'var(--color-link-hover)',
          },
        }}
      >
        더 보기
      </Button>
    </SectionWrapper>
  );
}

export default ProjectsSection;
