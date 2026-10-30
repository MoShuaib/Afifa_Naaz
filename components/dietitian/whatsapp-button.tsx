'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <button
      onClick={() => window.location.href = '/api/whatsapp'}
      aria-label="Chat with Afifa on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/60 motion-safe:animate-ping motion-safe:opacity-60" />
      <span className="relative flex size-12 items-center justify-center rounded-full bg-[#25D366] transition-transform group-hover:rotate-6">
        <MessageCircle className="size-7" strokeWidth={2.25} />
      </span>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max translate-y-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </button>
  )
}

