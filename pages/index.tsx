import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '@/components/sidebar/SideBar'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
