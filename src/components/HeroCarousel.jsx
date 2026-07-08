import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AUTOPLAY_MS = 5000;

function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (i) => setIndex(((i % total) + total) % total),
    [total],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const timerRef = useRef(null);
  useEffect(() => {
    if (isPaused) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused, total]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 3,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero 슬라이드"
    >
      <Box
        sx={{
          display: 'flex',
          width: `${total * 100}%`,
          transform: `translateX(-${index * (100 / total)}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {slides.map((slide, i) => (
          <Box
            key={slide.title}
            sx={{
              width: `${100 / total}%`,
              flexShrink: 0,
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 10 },
              background: slide.gradient,
              color: 'var(--color-text-inverse)',
              textAlign: 'center',
            }}
            aria-hidden={i !== index}
          >
            <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.85 }}>
              {slide.eyebrow}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
              {slide.title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 400, opacity: 0.95 }}>
              {slide.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={prev}
        aria-label="이전 슬라이드"
        sx={{
          display: { xs: 'none', sm: 'inline-flex' },
          position: 'absolute',
          top: '50%',
          left: { sm: 4, md: 12 },
          transform: 'translateY(-50%)',
          color: 'var(--color-text-inverse)',
          bgcolor: 'rgba(0,0,0,0.15)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.3)' },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={next}
        aria-label="다음 슬라이드"
        sx={{
          display: { xs: 'none', sm: 'inline-flex' },
          position: 'absolute',
          top: '50%',
          right: { sm: 4, md: 12 },
          transform: 'translateY(-50%)',
          color: 'var(--color-text-inverse)',
          bgcolor: 'rgba(0,0,0,0.15)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.3)' },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 12, md: 20 },
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {slides.map((slide, i) => (
          <Box
            key={slide.title}
            component="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1}번째 슬라이드로 이동`}
            aria-current={i === index}
            sx={{
              width: i === index ? 22 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              p: 0,
              bgcolor: i === index ? 'var(--color-text-inverse)' : 'rgba(255,255,255,0.5)',
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HeroCarousel;
