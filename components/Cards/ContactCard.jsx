import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useForm, ValidationError } from '@formspree/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Spinner as HeroSpinner } from '@heroui/react';
// Using local styled inputs to mimic HeroUI appearance (no external CSS required)

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid ${props => (props.$hasError ? 'crimson' : 'rgba(0,0,0,0.08)')};
  background: #fbfbfc;
  font-family: 'Space Mono', var(--font-mono);
  font-size: 14px;
  outline: none;
  transition: box-shadow 0.15s, border-color 0.15s;
  &:focus {
    box-shadow: 0 0 0 4px rgba(66,153,225,0.06);
    border-color: ${props => (props.$hasError ? 'crimson' : 'rgba(66,153,225,0.8)')};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid ${props => (props.$hasError ? 'crimson' : 'rgba(0,0,0,0.08)')};
  background: #fbfbfc;
  font-family: 'Space Mono', var(--font-mono);
  outline: none;
  resize: vertical;
  transition: box-shadow 0.15s, border-color 0.15s;
  &:focus {
    box-shadow: 0 0 0 4px rgba(66,153,225,0.06);
    border-color: ${props => (props.$hasError ? 'crimson' : 'rgba(66,153,225,0.8)')};
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 10px;
  background: var(--color-primary);
  color: white;
  border: none;
  font-weight: 600;
  font-family: 'Space Mono', var(--font-mono);
  cursor: pointer;
  transition: transform 0.08s ease, opacity 0.12s ease;
  &:not([disabled]):hover { opacity: 0.90; }
  &:active { transform: translateY(1px); }
  &[disabled] { opacity: 0.6; cursor: default; }
`;

const ContactCardContainer = styled.div`
  background-color: transparent;
  display: flex;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    border-radius: 18px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  justify-content: center;
  padding: 8px 0;
`;

const ContactP = styled.p`
  color: var(--color-text);
  font-weight: 400;
  text-align: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
`;

const ContactIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
`;

const ButtonIcon = styled.span`
  display: flex;
  font-family: var(--font-mono);
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  transition: opacity 0.3s, transform 0.3s;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 36px;
    height: 36px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  transition: opacity 0.3s, transform 0.3s;
  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

const FieldError = styled.div`
  color: crimson;
  font-size: 13px;
  margin-top: 4px;
  text-align: left;
`;

const SuccessOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  pointer-events: none; /* don't block interactions */
`;

const SuccessAnimWrapper = styled.div`
  background: transparent;
  transform: translateY(20px);
  opacity: 0;
  will-change: transform, opacity;
  transition: transform 400ms ease-out, opacity 400ms ease-out;
  animation: slideFadeIn 300ms ease-out forwards;

  @keyframes slideFadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error (client-side validation status)
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || '';
  const [formState, formspreeSubmit] = useForm(FORMSPREE_FORM_ID || 'placeholder-form-id');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const errors = {
    name: !name.trim() ? 'Please enter your name.' : '',
    email: !email.trim()
      ? 'Please enter your email.'
      : !emailRegex.test(email.trim())
      ? 'Please enter a valid email address.'
      : '',
    message:
      message.trim().length < 10
        ? 'Please enter a message of at least 10 characters.'
        : '',
  };

  const isValid = !errors.name && !errors.email && !errors.message;

  const [showSuccess, setShowSuccess] = useState(false);
  const [successFading, setSuccessFading] = useState(false);

  const handleFieldChange = (field, setter) => (e) => {
    setter(e.target.value);
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setTouched({ name: true, email: true, message: true });
      setStatus('error');
      return;
    }

    if (!FORMSPREE_FORM_ID) {
      setStatus('error');
      return;
    }
    setStatus('idle');
    await formspreeSubmit(e);
  };

  useEffect(() => {
    if (formState && formState.succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      setTouched({ name: false, email: false, message: false });
      setShowSuccess(true);
      setSuccessFading(false);
      const holdDuration = 1800;
      const fadeDuration = 400;
      const holdTimer = setTimeout(() => setSuccessFading(true), holdDuration);
      const unmountTimer = setTimeout(() => {
        setShowSuccess(false);
        setSuccessFading(false);
      }, holdDuration + fadeDuration + 100);
      return () => {
        clearTimeout(holdTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [formState?.succeeded]);

  return (
    <ContactCardContainer ref={ref} className={isVisible ? 'visible' : ''}>
      <h2>Let's Talk</h2>
      <ContactP>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision
      </ContactP>

      <FormWrapper onSubmit={handleSubmit} aria-live="polite">
        <div style={{ display: 'none' }}>
          <label htmlFor="gotcha">Leave this field empty</label>
          <input id="gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <StyledInput
            placeholder="Your name"
            value={name}
            onChange={handleFieldChange('name', setName)}
            aria-label="Your name"
            name="name"
            $hasError={touched.name && !!errors.name}
          />
          {touched.name && errors.name && <FieldError>{errors.name}</FieldError>}
        </div>

        <div>
          <StyledInput
            placeholder="Your email"
            value={email}
            onChange={handleFieldChange('email', setEmail)}
            aria-label="Your email"
            type="email"
            name="email"
            $hasError={touched.email && !!errors.email}
          />
          {touched.email && errors.email && <FieldError>{errors.email}</FieldError>}
          {FORMSPREE_FORM_ID && (
            <ValidationError prefix="Email" field="email" errors={formState.errors} />
          )}
        </div>

        <div>
          <StyledTextarea
            placeholder="Your message"
            value={message}
            onChange={handleFieldChange('message', setMessage)}
            aria-label="Your message"
            rows={6}
            name="message"
            $hasError={touched.message && !!errors.message}
          />
          {touched.message && errors.message && <FieldError>{errors.message}</FieldError>}
          {FORMSPREE_FORM_ID && (
            <ValidationError prefix="Message" field="message" errors={formState.errors} />
          )}
        </div>

        <PrimaryButton type="submit" disabled={formState.submitting || !isValid}>
          {formState.submitting && (
            <HeroSpinner size="sm" color="default" style={{ marginRight: 8 }} />
          )}
          {formState.succeeded ? 'Sent!' : formState.submitting ? 'Sending...' : 'Send message'}
        </PrimaryButton>

        {status === 'error' && (
          <div style={{ color: 'crimson' }}>Please fix the errors above and try again.</div>
        )}

        <ContactIconsWrapper aria-hidden={false}>
          <SocialIcon href="https://www.linkedin.com/in/oskarnordin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile /oskarnordin">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.06h.05c.54-1.02 1.86-2.06 3.83-2.06 4.1 0 4.86 2.7 4.86 6.21V24h-4v-7.56c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.99V24h-4V8.5z" />
            </svg>
          </SocialIcon>

          <SocialIcon href="https://github.com/oskarnordin" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile /oskarnordin">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M12 .296a12 12 0 00-3.797 23.4c.6.111.82-.26.82-.577 0-.285-.01-1-.015-2.04-3.11.676-3.77-1.608-3.77-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.731.083-.731 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 .95-.322 3.301 1.23a11.52 11.52 0 016.003 0c2.293-1.552 3.299-1.23 3.299-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.623-5.475 5.921.43.372.815 1.102.815 2.222 0 1.606-.014 2.902-.014 3.293 0 .319.216.694.825.576A12 12 0 0012 .296z" />
            </svg>
          </SocialIcon>
        </ContactIconsWrapper>

        {showSuccess && (
          <SuccessOverlay>
            <VisuallyHidden role="status" aria-live="polite">Message sent successfully</VisuallyHidden>
            <SuccessAnimWrapper
              onTransitionEnd={() => {
                if (successFading) {
                  setShowSuccess(false);
                  setSuccessFading(false);
                }
              }}
              style={{
                opacity: successFading ? 0 : 1,
                transform: successFading ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              <DotLottieReact
                src="/img/CheckmarkSuccess.lottie"
                autoplay
                loop={false}
                style={{ width: 180, height: 180 }}
              />
            </SuccessAnimWrapper>
          </SuccessOverlay>
        )}
      </FormWrapper>

    </ContactCardContainer>
  );
};

export default ContactCard;
