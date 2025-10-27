import React, { forwardRef } from "react"

type Props = {
  value: string
  onChange: (value: string) => void
  variant?: "input" | "textarea"
  placeholder?: string
  maxLength?: number
  onKeyDown?: (e: React.KeyboardEvent) => void
}

const TextField = forwardRef<HTMLTextAreaElement | HTMLInputElement, Props>(
  ({ variant = "input", value, onChange, placeholder, maxLength, onKeyDown }, ref) => {
    function handleChange(evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
      onChange(evt.target.value)
    }

    if (variant === "textarea") {
      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
        />
      )
    }

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
      />
    )
  },
)

export default TextField
