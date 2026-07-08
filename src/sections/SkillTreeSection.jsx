import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import SectionWrapper from '../components/SectionWrapper';

const SAMPLE_SKILLS = [
  { name: 'React', value: 80 },
  { name: 'JavaScript', value: 75 },
  { name: 'Design System', value: 65 },
];

function SkillTreeSection() {
  return (
    <SectionWrapper id="skill-tree">
      <Typography
        variant="overline"
        sx={{ color: 'var(--color-primary)', letterSpacing: 2, fontWeight: 700 }}
      >
        SKILL TREE
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
            여기는 Skill Tree 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)', mb: 4 }}>
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, textAlign: 'left' }}>
            {SAMPLE_SKILLS.map((skill) => (
              <Box key={skill.name}>
                <Typography
                  variant="body2"
                  sx={{ color: 'var(--color-text-primary)', mb: 0.5, fontWeight: 600 }}
                >
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'var(--color-border-light)',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: 'var(--color-primary)',
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

export default SkillTreeSection;
