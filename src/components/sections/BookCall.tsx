'use client';

import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionLabel, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';

// =====================================================================
//  Book a Call — lead-capture CTA that sits directly above the FAQ.
//
//  Two-step booking widget modeled on the reference (form.png): step 1
//  collects contact details, step 2 unlocks a calendar + time slots.
//  Until the form is completed the calendar is locked behind a tooltip,
//  exactly like the reference. Restyled from the reference's purple/light
//  look into the app's dark charcoal + signal-red (#EB4036) theme.
//
//  Submits to Formspree. Drop your form ID into FORMSPREE_ENDPOINT below
//  (Formspree dashboard → your form → the .../f/xxxxxxx URL) and it's live.
// =====================================================================

// TODO: replace `your-form-id` with your Formspree form ID, e.g.
//   'https://formspree.io/f/abcdwxyz'
// Until then the final "Book my call" POST will 404 — the rest of the UI
// (both steps, the calendar, and the slot picker) previews fully without it.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';

const countries = [
  { code: 'US', flag: '🇺🇸', dial: '+1' },
  { code: 'CA', flag: '🇨🇦', dial: '+1' },
  { code: 'MX', flag: '🇲🇽', dial: '+52' },
  { code: 'GB', flag: '🇬🇧', dial: '+44' },
  { code: 'AU', flag: '🇦🇺', dial: '+61' },
  { code: 'DE', flag: '🇩🇪', dial: '+49' },
  { code: 'FR', flag: '🇫🇷', dial: '+33' },
];

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// ------------------------------------------------------------------ layout

const Wrap = styled(Section)`
  position: relative;
  overflow: hidden;
`;

// Soft red bloom blooming down from the top edge — the mirror of the bloom
// rising from the bottom of How We Work above, so the seam between the two
// sections reads as one continuous, shared glow.
const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    62% 55% at 50% 0%,
    ${({ theme }) => theme.colors.accentSoft} 0%,
    transparent 70%
  );
`;

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Head = styled.div`
  position: relative;
  text-align: center;
  max-width: 46rem;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${SectionLabel} { margin-bottom: 1rem; }
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  & em { font-style: normal; color: ${({ theme }) => theme.colors.accent}; }
`;

// --------------------------------------------------------------------- card

const Card = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bgSurface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 40px 90px -50px rgba(0, 0, 0, 0.9);
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgInverse};
`;

const Step = styled.span<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.textDim)};
  transition: color ${({ theme }) => theme.motion.base};

  & .dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.textDim)};
    box-shadow: ${({ theme, $active }) => ($active ? `0 0 0 4px ${theme.colors.accentSoft}` : 'none')};
    transition: all ${({ theme }) => theme.motion.base};
  }
`;

const Body = styled.div`
  padding: 1.75rem 1.5rem 1.85rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1.85rem 2rem;
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.015em;
  line-height: 1.2;
  margin: 0 0 0.75rem;
`;

const CardText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
  margin: 0 0 0.4rem;

  & u,
  & a {
    color: ${({ theme }) => theme.colors.accent};
    text-underline-offset: 2px;
  }
`;

// -------------------------------------------------------------------- fields

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;
`;

const fieldRing = 'box-shadow: 0 0 0 3px';

const PhoneRow = styled.div`
  display: flex;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.motion.fast},
    box-shadow ${({ theme }) => theme.motion.fast};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
    ${fieldRing} ${({ theme }) => theme.colors.accentSoft};
  }
`;

const FlagSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  padding: 0 1.9rem 0 0.9rem;
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23A2A4AC' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;

  & option {
    background: ${({ theme }) => theme.colors.bgSurface};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Dial = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0 0.4rem 0 0.85rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const inputBase = `
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
  font-family: inherit;
`;

const PhoneInput = styled.input`
  ${inputBase};
  padding: 0.85rem 0.9rem 0.85rem 0.35rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder { color: ${({ theme }) => theme.colors.textDim}; }
`;

const NameRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const TextInput = styled.input`
  ${inputBase};
  padding: 0.85rem 0.95rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color ${({ theme }) => theme.motion.fast},
    box-shadow ${({ theme }) => theme.motion.fast};

  &::placeholder { color: ${({ theme }) => theme.colors.textDim}; }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    ${fieldRing} ${({ theme }) => theme.colors.accentSoft};
  }
`;

const Consent = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-top: 0.35rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  & a:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 1px;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.bg};
  cursor: pointer;
  position: relative;
  transition: all ${({ theme }) => theme.motion.fast};

  &:checked {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1.5px;
    width: 5px;
    height: 9px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft};
  }
`;

// -------------------------------------------------------------------- button

const PrimaryBtn = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.95rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.01em;
  transition: background ${({ theme }) => theme.motion.base},
    opacity ${({ theme }) => theme.motion.base};

  &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.accentHot}; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
`;

// ------------------------------------------------------------------ calendar

const CalWrap = styled.div`
  position: relative;
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const CalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const MonthLabel = styled.div<{ $locked: boolean }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.01em;
  color: ${({ theme, $locked }) => ($locked ? theme.colors.textDim : theme.colors.text)};
`;

const NavBtns = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.motion.fast};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled { opacity: 0.35; cursor: not-allowed; }
`;

const Grid = styled.div<{ $locked: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.35rem;
  opacity: ${({ $locked }) => ($locked ? 0.4 : 1)};
  pointer-events: ${({ $locked }) => ($locked ? 'none' : 'auto')};
  transition: opacity ${({ theme }) => theme.motion.base};
`;

const WeekdayCell = styled.div`
  text-align: center;
  padding: 0.35rem 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textDim};
`;

const DayCell = styled.button<{ $available: boolean; $selected: boolean }>`
  aspect-ratio: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: all ${({ theme }) => theme.motion.fast};

  color: ${({ theme, $available, $selected }) =>
    $selected ? '#fff' : $available ? theme.colors.text : theme.colors.textDim};
  background: ${({ theme, $available, $selected }) =>
    $selected ? theme.colors.accent : $available ? theme.colors.accentSoft : 'transparent'};
  cursor: ${({ $available }) => ($available ? 'pointer' : 'default')};

  &:hover {
    ${({ theme, $available, $selected }) =>
      $available && !$selected
        ? `background: ${theme.colors.accent}; color: #fff;`
        : ''}
  }
`;

const Empty = styled.div``;

// Floating "fill out the form first" tooltip, centered over the locked grid.
const Tooltip = styled.div`
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  max-width: 15rem;
  text-align: center;
  padding: 0.85rem 1rem;
  background: ${({ theme }) => theme.colors.bgInverse};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.85);
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

// --------------------------------------------------------------------- slots

const SlotSection = styled.div`
  margin-top: 1.5rem;
`;

const SlotLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.85rem;
`;

const SlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;

  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Slot = styled.button<{ $selected: boolean }>`
  padding: 0.65rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid
    ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.accent : 'transparent')};
  color: ${({ theme, $selected }) => ($selected ? '#fff' : theme.colors.text)};
  transition: all ${({ theme }) => theme.motion.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    ${({ theme, $selected }) => (!$selected ? `color: ${theme.colors.accent};` : '')}
  }
`;

const ErrorText = styled.p`
  margin-top: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`;

// ------------------------------------------------------------------- success

const Success = styled.div`
  text-align: center;
  padding: 1rem 0.5rem;

  & .check {
    width: 56px;
    height: 56px;
    margin: 0 auto 1.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.accent};
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0 0 0.6rem;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
  & strong { color: ${({ theme }) => theme.colors.text}; }
`;

// ---------------------------------------------------------------------- icons

function Chevron({ dir = 'right' }: { dir?: 'left' | 'right' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ----------------------------------------------------------------- component

export function BookCall() {
  // Normalized "today" (midnight) — the earliest bookable day.
  const today = useMemo(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }, []);

  const [step, setStep] = useState<1 | 2>(1);
  const [country, setCountry] = useState(countries[0]);
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [consent, setConsent] = useState(false);

  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');

  const formValid =
    phone.replace(/\D/g, '').length >= 7 &&
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    consent;

  const locked = step === 1;

  // Build the visible month's day cells (leading blanks + numbered days).
  const cells = useMemo(() => {
    const startWeekday = new Date(view.y, view.m, 1).getDay();
    const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
    const out: (number | null)[] = [];
    for (let i = 0; i < startWeekday; i += 1) out.push(null);
    for (let d = 1; d <= daysInMonth; d += 1) out.push(d);
    return out;
  }, [view]);

  const atCurrentMonth = view.y === today.getFullYear() && view.m === today.getMonth();

  function isAvailable(day: number) {
    const date = new Date(view.y, view.m, day);
    const weekday = date.getDay();
    return date >= today && weekday !== 0 && weekday !== 6; // future weekdays only
  }

  function isSelected(day: number) {
    return (
      selectedDate != null &&
      selectedDate.getFullYear() === view.y &&
      selectedDate.getMonth() === view.m &&
      selectedDate.getDate() === day
    );
  }

  function shiftMonth(delta: number) {
    setView((prev) => {
      const next = new Date(prev.y, prev.m + delta, 1);
      return { y: next.getFullYear(), m: next.getMonth() };
    });
  }

  function handleContinue() {
    if (!formValid) return;
    setStep(2);
  }

  async function handleBook() {
    if (!selectedDate || !selectedTime) return;
    setStatus('submitting');

    const dateLabel = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: `${country.dial} ${phone}`.trim(),
          country: country.code,
          date: dateLabel,
          time: selectedTime,
          _subject: `New call booking — ${firstName} ${lastName}`,
        }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const chosenLabel =
    selectedDate &&
    selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <Wrap id="book">
      <Glow aria-hidden="true" />
      <Inner>
        <Reveal>
          <Head>
            <SectionLabel>Book a Call</SectionLabel>
            <Heading>
              Let&apos;s talk about <em>growing your business</em>.
            </Heading>
            <Lead>
              Grab a time with our team. Tell us about your business and we&apos;ll map
              out a content plan that turns attention into customers.
            </Lead>
          </Head>
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <Steps>
              <Step $active={step === 1}>
                <span className="dot" />
                Fill out the form
              </Step>
              <Step $active={step === 2}>
                <span className="dot" />
                Book your call
              </Step>
            </Steps>

            <Body>
              {status === 'success' ? (
                <Success>
                  <span className="check">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3>You&apos;re booked, {firstName || 'thanks'}!</h3>
                  <p>
                    We&apos;ve got you down for{' '}
                    <strong>
                      {chosenLabel} at {selectedTime}
                    </strong>
                    . Our team will reach out to confirm the details shortly.
                  </p>
                </Success>
              ) : (
                <>
                  <CardTitle>Flozo Media Strategy Call</CardTitle>
                  <CardText>
                    Excited to speak with you about growing your business with{' '}
                    <u>organic content</u>.
                  </CardText>
                  <CardText>Book a call below to see if we&apos;re a fit.</CardText>

                  <Fields>
                    <PhoneRow>
                      <FlagSelect
                        aria-label="Country code"
                        value={country.code}
                        onChange={(e) =>
                          setCountry(
                            countries.find((c) => c.code === e.target.value) ?? countries[0]
                          )
                        }
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag}
                          </option>
                        ))}
                      </FlagSelect>
                      <Dial>{country.dial}</Dial>
                      <PhoneInput
                        type="tel"
                        inputMode="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </PhoneRow>

                    <NameRow>
                      <TextInput
                        type="text"
                        placeholder="First name *"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="given-name"
                      />
                      <TextInput
                        type="text"
                        placeholder="Last name *"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="family-name"
                      />
                    </NameRow>

                    <Consent>
                      <CheckBox
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                      />
                      <span>
                        By entering your information, you consent to your data being saved
                        in accordance with our <a href="/terms">Terms</a> &amp;{' '}
                        <a href="/privacy">Privacy Policy</a> and to receive follow-up
                        messages.
                      </span>
                    </Consent>
                  </Fields>

                  {step === 1 && (
                    <PrimaryBtn type="button" onClick={handleContinue} disabled={!formValid}>
                      Continue <Chevron dir="right" />
                    </PrimaryBtn>
                  )}

                  <CalWrap>
                    <CalHead>
                      <MonthLabel $locked={locked}>
                        {MONTHS[view.m]} {view.y}
                      </MonthLabel>
                      <NavBtns>
                        <NavBtn
                          type="button"
                          aria-label="Previous month"
                          onClick={() => shiftMonth(-1)}
                          disabled={locked || atCurrentMonth}
                        >
                          <Chevron dir="left" />
                        </NavBtn>
                        <NavBtn
                          type="button"
                          aria-label="Next month"
                          onClick={() => shiftMonth(1)}
                          disabled={locked}
                        >
                          <Chevron dir="right" />
                        </NavBtn>
                      </NavBtns>
                    </CalHead>

                    <Grid $locked={locked} aria-hidden={locked}>
                      {WEEKDAYS.map((w) => (
                        <WeekdayCell key={w}>{w}</WeekdayCell>
                      ))}
                      {cells.map((day, i) => {
                        if (day == null) return <Empty key={`e-${i}`} />;
                        const available = isAvailable(day);
                        return (
                          <DayCell
                            key={day}
                            type="button"
                            $available={available}
                            $selected={isSelected(day)}
                            disabled={!available}
                            onClick={() => {
                              setSelectedDate(new Date(view.y, view.m, day));
                              setSelectedTime(null);
                            }}
                          >
                            {day}
                          </DayCell>
                        );
                      })}
                    </Grid>

                    {locked && (
                      <Tooltip role="status">
                        Please fill out the form before choosing your time slot.
                      </Tooltip>
                    )}
                  </CalWrap>

                  {step === 2 && selectedDate && (
                    <SlotSection>
                      <SlotLabel>Available times · {chosenLabel}</SlotLabel>
                      <SlotGrid>
                        {TIME_SLOTS.map((t) => (
                          <Slot
                            key={t}
                            type="button"
                            $selected={selectedTime === t}
                            onClick={() => setSelectedTime(t)}
                          >
                            {t}
                          </Slot>
                        ))}
                      </SlotGrid>
                    </SlotSection>
                  )}

                  {step === 2 && (
                    <>
                      <PrimaryBtn
                        type="button"
                        onClick={handleBook}
                        disabled={!selectedDate || !selectedTime || status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Booking…' : 'Book my call'}
                        {status !== 'submitting' && <Chevron dir="right" />}
                      </PrimaryBtn>
                      {status === 'error' && (
                        <ErrorText>
                          Something went wrong sending your booking. Please try again or call us
                          directly.
                        </ErrorText>
                      )}
                    </>
                  )}
                </>
              )}
            </Body>
          </Card>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
