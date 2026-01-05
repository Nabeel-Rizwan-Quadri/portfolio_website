import React from 'react'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="px-8 sm:px-12 md:px-6 lg:px-12 xl:px-16">
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
