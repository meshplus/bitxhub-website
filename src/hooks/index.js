import {useEffect, useState} from 'react'

export const useProgressiveImage = (placeholder, src) => {
  const [sourceLoaded, setSourceLoaded] = useState(placeholder)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded
}
