
import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button from './ui/Button'
import TextField from './ui/TextField'
import type { CampusEvent } from '../data/events'
import {
  validateSignup,
  type SignupValues,
} from '../lib/validateSignup'

type EventSignupFormProps = {
  event: CampusEvent
}

export default function EventSignupForm({
  event,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [bookingMessage, setBookingMessage] = useState('')

  const errors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setBookingMessage('')
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name as keyof SignupValues

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function showError(field: keyof SignupValues) {
    return touched[field] || submitAttempted
      ? errors[field]
      : undefined
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      return
    }

    const name = values.fullName.trim()
    const tickets = Number(values.tickets)

    setSeatsLeft((current) => current - tickets)
    setBookingMessage(`Booked: ${tickets} for ${name}.`)

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    })

    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <section>
      <h2>Book your tickets</h2>

      <p>Seats left: {seatsLeft}</p>

      {bookingMessage && (
        <p role="status">{bookingMessage}</p>
      )}

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
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />

        <Button type="submit">Book</Button>
      </form>
    </section>
  )
}
