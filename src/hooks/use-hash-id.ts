import { useId, useMemo } from 'react'
import { simpleHash } from '@/helpers/utils'

export function useHashId() {
  const originalId = useId()

  const hashId = useMemo(() => `id-${simpleHash(originalId)}`, [originalId])

  return hashId
}
