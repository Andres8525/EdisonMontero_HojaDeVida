import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <button className="px-4 py-2 rounded-full border border-blue-400 text-sm font-semibold hover:bg-blue-700 transition">
          Edison Montero Garcia
        </button>
        <h1 className="text-4xl font-bold">Hello title</h1>
      </header>

      {/* Intro text */}
      <p className="max-w-2xl text-blue-200 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="text-blue-300 underline hover:text-blue-100">
            Link
          </a>
          <div className="w-64 h-64 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-blue-300">Image</span>
          </div>
          <button className="px-6 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-500">
            Button
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-64 h-64 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-blue-300">Image</span>
          </div>
          <button className="px-6 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-500">
            Button
          </button>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 text-blue-200 mb-12">
        <span className="cursor-pointer hover:text-white">&lt;</span>
        <span className="cursor-pointer hover:text-white">1</span>
        <span className="cursor-pointer hover:text-white">2</span>
        <span className="cursor-pointer">…</span>
        <span className="cursor-pointer hover:text-white">5</span>
        <span className="cursor-pointer hover:text-white">&gt;</span>
      </div>

      {/* Sidebar + Window */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sidebar */}
        <aside className="bg-blue-900 rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-blue-700 rounded-full"></div>
            <div>
              <p className="font-semibold">Mailchimp</p>
              <p className="text-sm text-blue-300">300 credits left</p>
            </div>
          </div>

          <nav className="space-y-3">
            <button className="w-full text-left px-3 py-2 bg-blue-700 rounded-lg hover:bg-blue-600">
              Dashboard
            </button>
            <a href="#" className="block text-blue-300 hover:text-white">
              Link
            </a>
            <a href="#" className="block text-blue-300 hover:text-white">
              Link
            </a>
            <h3 className="mt-6 mb-2 text-sm uppercase tracking-wide text-blue-400">Teams</h3>
            <a href="#" className="block text-blue-300 hover:text-white">
              Link
            </a>
          </nav>
        </aside>

        {/* Window */}
        <div className="bg-blue-900 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Hello title</h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-700 rounded-lg"></div>
            <p className="text-blue-200">This is a text</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-700 rounded-lg"></div>
            <p className="text-blue-200">This is a text</p>
          </div>
        </div>
      </section>
    </main>
  );
}
