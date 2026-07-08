import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionWrapper from '../components/SectionWrapper';

function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <Typography
        variant="overline"
        sx={{ color: 'var(--color-primary)', letterSpacing: 2, fontWeight: 700 }}
      >
        CONTACT
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
            여기는 Contact 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)', mb: 3 }}>
            연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>

          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mb: 4 }}>
            <IconButton sx={{ color: 'var(--color-primary)' }} aria-label="이메일">
              <EmailIcon />
            </IconButton>
            <IconButton sx={{ color: 'var(--color-primary)' }} aria-label="깃허브">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: 'var(--color-primary)' }} aria-label="링크드인">
              <LinkedInIcon />
            </IconButton>
          </Stack>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 420,
              mx: 'auto',
            }}
          >
            <TextField label="이름" variant="outlined" size="small" fullWidth disabled />
            <TextField label="이메일" variant="outlined" size="small" fullWidth disabled />
            <TextField
              label="메시지"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              rows={3}
              disabled
            />
            <Button
              variant="contained"
              disabled
              sx={{
                bgcolor: 'var(--color-button-primary)',
              }}
            >
              보내기
            </Button>
          </Box>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

export default ContactSection;
