'use client'

export default function CrudList({
  items,
  onEdit,
  onDelete,
}: {
  items: string[]
  onEdit: (index: number) => void
  onDelete: (index: number) => void
}) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>{item}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(index)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(index)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
