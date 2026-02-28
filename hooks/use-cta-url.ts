'use client'

import { useEffect, useState } from 'react'

const BASE_URL = 'https://atom-consultoria-financeira-new.vercel.app/'

export function useCtaUrl() {
  const [url, setUrl] = useState(BASE_URL)

  useEffect(() => {
    const params = window.location.search
    setUrl(params ? `${BASE_URL}${params}` : BASE_URL)
  }, [])

  return url
}
