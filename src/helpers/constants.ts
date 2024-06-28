const API_MAPPING: Record<string, string> = {
  'https://chat.openai.com': 'https://chat.openai.com/backend-api',
  'https://chatgpt.com': 'https://chatgpt.com/backend-api',
  'https://new.oaifree.com': 'https://new.oaifree.com/backend-api'
}

// export const baseUrl = 'https://chat.openai.com'
export const baseUrl = new URL(window.location.href).origin
export const apiUrl = API_MAPPING[baseUrl]

export const KEY_LANGUAGE = 'smart-web:language'
export const KEY_TIMESTAMP_ENABLED = 'smart-web:enable_timestamp'
export const KEY_TIMESTAMP_24H = 'smart-web:timestamp_24h'
