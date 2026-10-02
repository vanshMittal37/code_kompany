import { useState, useId } from 'react';
import { sendEnquiry } from '../../utils/emailService';
import { validateContactForm } from '../../utils/validation';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const SERVICES = [
  'AI Agents & Automation',
  'Software Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Digital Transformation',
  'MVP Development',
  'E-Commerce Solutions',
  'Industry Solutions',
  'Other / Not sure yet',
];

const BUDGETS = [
  'Under ₹2 Lakh',
  '₹2 – ₹5 Lakh',
  '₹5 – ₹15 Lakh',
  '₹15 Lakh +',
  "Let's discuss",
];

const INITIAL = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  _honey: '', // honeypot — never filled by real users
};

export default function ContactForm({ preService = '' }) {
  const uid = useId();
  const [values, setValues] = useState({ ...INITIAL, service: preService });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverError, setServerError] = useState('');

  const fieldId = (name) => `${uid}-${name}`;
  const errorId = (name) => `${uid}-err-${name}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check — silently succeed if bot fills it
    if (values._honey) {
      setStatus('success');
      return;
    }

    const newErrors = validateContactForm(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first errored field for accessibility
      const firstKey = Object.keys(newErrors)[0];
      document.getElementById(fieldId(firstKey))?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');

    try {
      await sendEnquiry({
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        company: values.company.trim() || '—',
        service: values.service,
        budget: values.budget || '—',
        message: values.message.trim(),
      });
      setStatus('success');
      setValues({ ...INITIAL, service: preService });
    } catch (err) {
      setStatus('error');
      setServerError(err?.message || 'Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successState} role="alert" aria-live="assertive">
        <span className={styles.successIcon} aria-hidden="true">✓</span>
        <h2 className={styles.successTitle}>Message sent!</h2>
        <p className={styles.successText}>
          We've received your enquiry and will get back to you within one business day.
        </p>
        <Button
          variant="secondary"
          onClick={() => setStatus('idle')}
          className={styles.resetBtn}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project enquiry form"
    >
      {/* Honeypot — visually hidden, never filled by humans */}
      <div aria-hidden="true" className={styles.honeypot}>
        <label htmlFor={fieldId('_honey')}>Leave this empty</label>
        <input
          id={fieldId('_honey')}
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values._honey}
          onChange={handleChange}
        />
      </div>

      {/* ── Row 1: Name + Email ─────────────────────────── */}
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor={fieldId('name')} className={styles.label}>
            Your name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Rahul Sharma"
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? errorId('name') : undefined}
          />
          {errors.name && (
            <span id={errorId('name')} className={styles.fieldError} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor={fieldId('email')} className={styles.label}>
            Email address <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="rahul@company.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? errorId('email') : undefined}
          />
          {errors.email && (
            <span id={errorId('email')} className={styles.fieldError} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* ── Row 2: Company (optional) ───────────────────── */}
      <div className={styles.fieldGroup}>
        <label htmlFor={fieldId('company')} className={styles.label}>
          Company / Organisation
          <span className={styles.optional}> (optional)</span>
        </label>
        <input
          id={fieldId('company')}
          name="company"
          type="text"
          autoComplete="organization"
          className={styles.input}
          placeholder="Acme Industries"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      {/* ── Row 3: Service + Budget ─────────────────────── */}
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor={fieldId('service')} className={styles.label}>
            Service you're interested in <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId('service')}
            name="service"
            required
            className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
            value={values.service}
            onChange={handleChange}
            aria-invalid={errors.service ? 'true' : 'false'}
            aria-describedby={errors.service ? errorId('service') : undefined}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <span id={errorId('service')} className={styles.fieldError} role="alert">
              {errors.service}
            </span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor={fieldId('budget')} className={styles.label}>
            Approximate budget
            <span className={styles.optional}> (optional)</span>
          </label>
          <select
            id={fieldId('budget')}
            name="budget"
            className={styles.select}
            value={values.budget}
            onChange={handleChange}
          >
            <option value="">Prefer not to say</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Message ─────────────────────────────────────── */}
      <div className={styles.fieldGroup}>
        <label htmlFor={fieldId('message')} className={styles.label}>
          Tell us about your project <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          required
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Describe what you're building, the problem you want to solve, or where your operations are stuck…"
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? errorId('message') : undefined}
        />
        {errors.message && (
          <span id={errorId('message')} className={styles.fieldError} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {/* ── Server error ────────────────────────────────── */}
      {status === 'error' && (
        <div className={styles.serverError} role="alert" aria-live="assertive">
          <strong>Could not send message.</strong> {serverError}
        </div>
      )}

      {/* ── Submit ──────────────────────────────────────── */}
      <div className={styles.submitRow}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          arrow
          loading={status === 'sending'}
          disabled={status === 'sending'}
          aria-busy={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
        </Button>

        <p className={styles.formNote}>
          <span className={styles.required}>*</span> Required fields.
          We respond within one business day.
        </p>
      </div>
    </form>
  );
}
