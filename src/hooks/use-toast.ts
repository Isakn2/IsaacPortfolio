import { useState, useEffect } from "react"

type ToastProps = {
  id: string
  title: string
  description?: string
  type: "default" | "success" | "error" | "warning" | "info"
}

type ToastState = {
  toasts: ToastProps[]
  toast: (toast: Omit<ToastProps, "id">) => void
  remove: (id: string) => void
}

export function useToast(): ToastState {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  // Remove toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prev) => prev.slice(1))
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [toasts])

  const toast = (props: Omit<ToastProps, "id">) => {
    setToasts((prev) => [
      ...prev,
      { id: Math.random().toString(36).substring(2, 9), ...props },
    ])
  }

  const remove = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return {
    toasts,
    toast,
    remove,
  }
}