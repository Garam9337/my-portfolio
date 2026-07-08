import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SectionWrapper from '../components/SectionWrapper';

function AboutSection() {
  return (
    <SectionWrapper id="about-me" background="secondary">
      <Typography
        variant="overline"
        sx={{ color: 'var(--color-accent)', letterSpacing: 2, fontWeight: 700 }}
      >
        ABOUT ME
      </Typography>
      <Card
        sx={{
          width: '100%',
          mt: 2,
          bgcolor: 'var(--color-bg-card)',
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ py: { xs: 4, md: 5 } }}>
          <Typography variant="h5" sx={{ color: 'var(--color-text-primary)', mb: 2 }}>
            여기는 About Me 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)', mb: 3 }}>
            간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'var(--color-button-primary)',
              '&:hover': { bgcolor: 'var(--color-button-hover)' },
            }}
          >
            더 알아보기
          </Button>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

export default AboutSection;
