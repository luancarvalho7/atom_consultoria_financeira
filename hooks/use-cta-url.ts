'use client'

import { useEffect, useState } from 'react'

const BASE_URL = 'https://share.hsforms.com/1Fg2hEt7fQZacb4xO___NZgspo1z'

export function useCtaUrl() {
  const [url, setUrl] = useState(BASE_URL)

  useEffect(() => {
    const params = window.location.search
    setUrl(params ? `${BASE_URL}${params}` : BASE_URL)
  }, [])

  return url
}
