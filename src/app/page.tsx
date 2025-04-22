import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Welcome!</h1>

      <Link href="/crud">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Go to CRUD App
        </button>
      </Link>
    </main>
  )
}
