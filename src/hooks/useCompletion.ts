// src/hooks/useCompletion.ts
'use client';

import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface UseCompletionOptions {
  api: string;
}

interface CompletionResponse {
  completion: string;
}

export function useCompletion({ api }: UseCompletionOptions) {
  const [input, setInput] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation<CompletionResponse, Error, string>(
    async (inputText: string) => {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inputText }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    {
      retry: 2,
      onSuccess(data, variables) {
        // Cache the result for instant re-use
        queryClient.setQueryData(['completion', variables], data.completion);
      },
      onError(error) {
        console.error('Error fetching completion:', error);
      },
    }
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;
      mutation.mutate(trimmed);
      setInput('');
    },
    [input, mutation]
  );

  return {
    completion: mutation.data ?? '',
    input,
    isLoading: mutation.isLoading,
    error: mutation.error,
    handleInputChange,
    handleSubmit,
  };
}
