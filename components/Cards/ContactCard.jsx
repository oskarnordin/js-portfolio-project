import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
// Using local styled inputs to mimic HeroUI appearance (no external CSS required)

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #fbfbfc;
  font-size: 15px;
  outline: none;
  transition: box-shadow 0.15s, border-color 0.15s;
  &:focus {
    box-shadow: 0 0 0 4px rgba(66,153,225,0.06);
    border-color: rgba(66,153,225,0.8);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #fbfbfc;
  font-size: 15px;
  outline: none;
  resize: vertical;
  transition: box-shadow 0.15s, border-color 0.15s;
  &:focus {
    box-shadow: 0 0 0 4px rgba(66,153,225,0.06);
    border-color: rgba(66,153,225,0.8);
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 10px;
  background: #0b5cff;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.08s ease, opacity 0.12s ease;
  &:hover { opacity: 0.95; }
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

const ContactCard = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple validation
    if (!email.includes('@') || message.trim().length < 5) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // simulate network send
    setTimeout(() => {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 2500);
    }, 900);
  };

  return (
    <ContactCardContainer ref={ref} className={isVisible ? 'visible' : ''}>
      <ContactH1>Let's Talk</ContactH1>
      <ContactP>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </ContactP>

      <FormWrapper onSubmit={handleSubmit} aria-live="polite">
        <StyledInput
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Your name"
        />
        <StyledInput
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your email"
          type="email"
        />
        <StyledTextarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Your message"
          rows={6}
        />

        <PrimaryButton type="submit" disabled={status === 'sending'}>
          {status === 'sent' ? 'Sent!' : status === 'sending' ? 'Sending...' : 'Send message'}
        </PrimaryButton>

        {status === 'error' && (
          <div style={{ color: 'crimson' }}>Please enter a valid email and a message (min 5 characters).</div>
        )}
      </FormWrapper>

    </ContactCardContainer>
  );
};

export default ContactCard;
