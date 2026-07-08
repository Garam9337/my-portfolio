import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionWrapper from '../components/SectionWrapper';

function HeroSection() {
  return (
    <SectionWrapper id="hero">
      <Box
        sx={{
          width: '100%',
          borderRadius: 4,
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          color: 'var(--color-text-inverse)',
          boxShadow: 3,
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.85 }}>
          HERO SECTION
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
          여기는 Hero 섹션입니다.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
          메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Box>
    </SectionWrapper>
  );
}

export default HeroSection;
