import Image from 'next/image'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${pacifico.className} text-8xl`}>Meal Mixer</h1>
    </main>
  )
}
