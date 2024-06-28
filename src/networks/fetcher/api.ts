import { blobToDataURL } from '@/helpers/dom'

export async function fetchImage(uri: string) {
  const image = await fetch(uri)
  const blob = await image.blob()
  const base64 = await blobToDataURL(blob)
  return base64.replace(
    /^data:.*?;/,
    `data:${image.headers.get('content-type')};`
  )
}

export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers
    }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}
