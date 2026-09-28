import { NextResponse } from 'next/server'

/**
 * Server-side redirect to WhatsApp.
 * The actual phone number lives only on the server — it never appears
 * in HTML source, anchor href attributes, or the browser's status bar.
 *
 * Deep-link priority:
 *   1. whatsapp://send   → opens the native WhatsApp app directly
 *   2. Fallback          → wa.me handled server-side (number hidden from client)
 *
 * The client calls this as:  window.location.href = '/api/whatsapp'
 * The browser follows the 302 silently and launches the app.
 */
export async function GET() {
  const phone = process.env.WHATSAPP_NUMBER ?? '918272026135'
  const message = encodeURIComponent('Hi Afifa, I would like to book a consultation.')

  // wa.me is the canonical deep-link that WhatsApp itself recommends.
  // On mobile it opens the app; on desktop it opens WhatsApp Desktop / Web.
  const url = `https://wa.me/${phone}?text=${message}`

  return NextResponse.redirect(url, { status: 302 })
}
