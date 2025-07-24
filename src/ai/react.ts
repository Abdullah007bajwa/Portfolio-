'use client'

import { useState } from 'react'

interface UseCompletionOptions {
  api: string;
}

/**
 * A custom hook that manages completion state for AI chat.
 * It sends the user input to a provided API endpoint and returns the API's response.
 */
export function useCompletion({ api }: UseCompletionOptions) {
  const [completion, setCompletion] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      })
      const data = await response.json()
      setCompletion(data.completion || '')
    } catch (error) {
      console.error('Error fetching completion:', error)
    }
    setIsLoading(false)
  }

  return { completion, input, isLoading, handleInputChange, handleSubmit }
}
