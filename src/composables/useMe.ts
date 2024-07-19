import type { AxiosError } from 'axios'
import { useUsersGetMe } from '~/api/accounts'
import { useIsAuthenticated } from '~/api/accounts/is-authenticated'

export default function () {
  const { data: me, isLoading: meLoading, error, refetch } = useUsersGetMe({
    query: {
      retry(failureCount, error: AxiosError) {
        if (isAuthError(error))
          return false // Don't retry auth errors
        return failureCount < 3
      },
      refetchInterval: 30 * 60 * 1000, // 30 minutes
    },
  })

  const meError = computed(() => {
    if (isAuthError(error.value))
      return null // Don't show auth errors
    return error.value
  })

  const loggedIn = computed(() => {
    if (meLoading.value)
      return null // We don't know yet
    return !!me.value
  })

  const authenticated = useIsAuthenticated()
  watch(authenticated, async (newAuthenticated) => {
    if (newAuthenticated && loggedIn.value === false) {
      // Refetch user data if the user is now logged in
      await refetch()
    }
  })

  return {
    me,
    meLoading,
    meError,
    loggedIn,
  }
}

function isAuthError(error: AxiosError | null) {
  return error && (error.response?.status && (error.response.status === 401 || error.response.status === 403))
}
