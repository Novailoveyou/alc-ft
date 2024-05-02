'use client'
import { ComponentProps } from 'react'
import { SWRConfig, SWRConfiguration } from 'swr'

const PROPS = {
  // dedupingInterval: 2000
  revalidateOnReconnect: true,
  revalidateOnFocus: true,
  shouldRetryOnError: true,
  errorRetryInterval: 5000,
  errorRetryCount: 3,
  loadingTimeout: 3000,
  onLoadingSlow: () => {},
  onSuccess: () => {},
  onError: () => {},
} as const satisfies SWRConfiguration

type SWRConfigProps = ComponentProps<typeof SWRConfig>

/** @see https://swr.vercel.app/docs/global-configuration */
export const SWRProvider = <Props extends SWRConfigProps>({
  children,
  ...props
}: Props) => {
  return (
    <SWRConfig {...PROPS} {...props}>
      {children}
    </SWRConfig>
  )
}
