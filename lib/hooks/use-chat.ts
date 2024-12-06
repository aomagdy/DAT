"use client"

import { useState } from "react"

interface Message {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface UseChatOptions {
  initialMessages?: Message[]
  responseDelay?: number
}

export function useChat({ 
  initialMessages = [], 
  responseDelay = 1500 
}: UseChatOptions = {}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        content: getAIResponse(content),
        sender: "ai",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, responseDelay)
  }

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "That's a great question about cellular biology! Let me explain...",
      "The key concept here in organic chemistry is...",
      "When solving this type of problem, we should first consider...",
      "Let's break this down step by step...",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return {
    messages,
    input,
    isTyping,
    setInput,
    sendMessage
  }
}