'use client'
import { useState, useEffect } from 'react'

export default function CrudForm({
  onSubmit,
  defaultValue = '',
}: {
  onSubmit: (value: string) => void
  defaultValue?: string
}) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onSubmit(value.trim())
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border px-3 py-2 flex-grow rounded"
        placeholder="Enter item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {defaultValue ? 'Update' : 'Add'}
      </button>
    </form>
  )
}
