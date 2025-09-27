import React from 'react'
import Nav from '@/components/layout/nav/Nav'
import { Footer } from '@/components/layout/components'
import Header from '@/home/Header'
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