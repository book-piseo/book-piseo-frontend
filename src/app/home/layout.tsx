import Footer from '@components/layout/Footer'
import React from 'react'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}
