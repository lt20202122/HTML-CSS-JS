import React from 'react'
import Card1 from '@/home/Card1'
import Layout from "@/components/layout/Layout"

export default function Home () {
  return (
    <Layout>
      <section> {/* Cards 1 */}
        <Card1 />
      </section>
    </Layout>
  )
}