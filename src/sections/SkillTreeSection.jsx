import { useEffect, useRef, useState } from 'react';
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

const DURATION_MS = 1200;
const STAGGER_MS = 150;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function SkillTreeSection() {
  const containerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [progress, setProgress] = useState(() => SAMPLE_SKILLS.map(() => 0));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return undefined;

    const startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const next = SAMPLE_SKILLS.map((skill, i) => {
        const elapsed = now - startTime - i * STAGGER_MS;
        const t = Math.min(Math.max(elapsed / DURATION_MS, 0), 1);
        return Math.round(skill.value * easeOutCubic(t));
      });
      setProgress(next);

      const isDone = next.every((v, i) => v >= SAMPLE_SKILLS[i].value);
      if (!isDone) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasEntered]);

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

          <Box
            ref={containerRef}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, textAlign: 'left' }}
          >
            {SAMPLE_SKILLS.map((skill, i) => (
              <Box key={skill.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'var(--color-text-primary)', fontWeight: 600 }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'var(--color-primary)', fontWeight: 700 }}
                  >
                    {progress[i]}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress[i]}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'var(--color-border-light)',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: 'var(--color-primary)',
                      borderRadius: 4,
                      transition: 'none',
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
