import SectionWrapper from '../components/SectionWrapper';
import HeroCarousel from '../components/HeroCarousel';

const SLIDES = [
  {
    eyebrow: 'HERO SECTION · 1 / 5',
    title: '여기는 Hero 섹션입니다.',
    subtitle: '메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
    gradient: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  },
  {
    eyebrow: 'HERO SECTION · 2 / 5',
    title: '두 번째 슬라이드입니다.',
    subtitle: '대표 프로젝트 하이라이트가 들어갈 예정입니다.',
    gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark) 100%)',
  },
  {
    eyebrow: 'HERO SECTION · 3 / 5',
    title: '세 번째 슬라이드입니다.',
    subtitle: '핵심 기술 스택과 강점 소개가 들어갈 예정입니다.',
    gradient: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
  },
  {
    eyebrow: 'HERO SECTION · 4 / 5',
    title: '네 번째 슬라이드입니다.',
    subtitle: '경력, 수상, 활동 이력이 들어갈 예정입니다.',
    gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
  },
  {
    eyebrow: 'HERO SECTION · 5 / 5',
    title: '다섯 번째 슬라이드입니다.',
    subtitle: "연락을 유도하는 문구와 CTA 버튼이 들어갈 예정입니다.",
    gradient: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%)',
  },
];

function HeroSection() {
  return (
    <SectionWrapper id="hero">
      <HeroCarousel slides={SLIDES} />
    </SectionWrapper>
  );
}

export default HeroSection;
