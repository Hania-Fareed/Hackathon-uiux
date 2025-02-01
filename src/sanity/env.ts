export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skP8rqsddhbpxfBjEj51IWxaulEKCf6SRNejumNgqBfspoMkliReHyuTh6kFtEaKiLZbBuzo7JaHc0vxCudQdUYP0VIbLGJoykMFUxBgUVLU3AQd4xYTpWO7rIFe0hFVc6M44TrEDMPjEKmS0IiLu4JghOUHU38wtfGdYDdMNnP3fbdqsdQ5",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
