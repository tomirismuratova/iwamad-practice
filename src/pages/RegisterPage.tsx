import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registered, setRegistered] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name as keyof RegistrationValues

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  function showError(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted
      ? errors[field]
      : undefined
  }

  if (registered) {
    return (
      <p role="status">
        Thanks, {values.fullName.trim()}. You are registered.
      </p>
    )
  }

  return (
    <main>
      <h2>Register</h2>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('password')}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('confirmPassword')}
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={
                showError('acceptTerms') ? true : undefined
              }
              aria-describedby={
                showError('acceptTerms') ? 'terms-error' : undefined
              }
            />
            I accept the terms
          </label>

          {showError('acceptTerms') && (
            <p id="terms-error" className="field-error">
              {showError('acceptTerms')}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </main>
  )
}
