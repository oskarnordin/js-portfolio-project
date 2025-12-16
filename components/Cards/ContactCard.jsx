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
  font-size: 15px;
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
  font-size: 15px;
  font-family: inherit;
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
  gap: 10px;
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

const ContactH1 = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  letter-spacing: -3px;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const ContactP = styled.p`
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
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

// (legacy Button styles removed - using HeroUI Button component)

const ButtonIcon = styled.span`
  display: flex;
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
  transition: opacity 0.3s, transform 0.3s; // Add opacity to transition
  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 48px;
    height: 48px;
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
  // Set your Formspree form id via VITE_FORMSPREE_FORM_ID in .env.local (e.g., "xwkwpzbe")
  const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || '';
  // Always initialize the hook with a non-empty placeholder to avoid runtime throws;
  // we'll block actual submission below if the real ID is missing.
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

  // Success animation control
  const [showSuccess, setShowSuccess] = useState(false);
  const [successFading, setSuccessFading] = useState(false);

  const handleFieldChange = (field, setter) => (e) => {
    setter(e.target.value);
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (status === 'error') {
      // Clear general error state while user fixes inputs
      setStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // client-side validation
    if (!isValid) {
      setTouched({ name: true, email: true, message: true });
      setStatus('error');
      return;
    }

    // Require Formspree ID and submit via Formspree only
    if (!FORMSPREE_FORM_ID) {
      setStatus('error');
      console.warn('No Formspree form ID configured. Set VITE_FORMSPREE_FORM_ID in your .env.local');
      return;
    }
    setStatus('idle');
    // Ensure the form fields have name attributes so Formspree captures them
    await formspreeSubmit(e);
  };

  // Clear fields after successful Formspree submission
  useEffect(() => {
    if (formState && formState.succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      setTouched({ name: false, email: false, message: false });
      setShowSuccess(true);
      setSuccessFading(false);
      const holdDuration = 1800; // keep visible before fading (ms)
      const fadeDuration = 400;  // fade-out transition length (ms)
      const holdTimer = setTimeout(() => setSuccessFading(true), holdDuration);
      // Fallback unmount in case transitionend doesn't fire
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
      <ContactH1>Let's Talk</ContactH1>
      <ContactP>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </ContactP>

      <FormWrapper onSubmit={handleSubmit} aria-live="polite">
        {/* Honeypot field to trap bots */}
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
          {/* Server-side validation error from Formspree, if any */}
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

        {/* General client-side error */}
        {status === 'error' && (
          <div style={{ color: 'crimson' }}>Please fix the errors above and try again.</div>
        )}

        {/* Success animation overlay */}
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
