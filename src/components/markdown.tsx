'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
  content: string;
}

/**
 * A professional Markdown component that converts markdown text to HTML.
 */
export function Markdown({ content }: MarkdownProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>
}
