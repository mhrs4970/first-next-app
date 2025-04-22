'use client'
import { useState } from 'react'
import CrudForm from '@/app/components/CrudForm'
import CrudList from '@/app/components/CrudList'

export default function CrudPage() {
  const [items, setItems] = useState<string[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const handleAdd = (value: string) => {
    if (editingIndex !== null) {
      const newItems = [...items]
      newItems[editingIndex] = value
      setItems(newItems)
      setEditingIndex(null)
    } else {
      setItems([...items, value])
    }
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index)
  }

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Simple CRUD UI</h1>
      <CrudForm onSubmit={handleAdd} defaultValue={editingIndex !== null ? items[editingIndex] : ''} />
      <CrudList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  )
}
