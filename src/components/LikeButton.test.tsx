import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

describe('LikeButton', () => {
  test('increments likes when clicked', async () => {
    const user = userEvent.setup()

    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    )

    const button = screen.getByRole('button', { name: /like/i })

    expect(button).toHaveTextContent('0')

    await user.click(button)

    expect(button).toHaveTextContent('1')
  })
})