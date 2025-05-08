import Footer from "@/components/Footer"
import FooterTwo from "@/components/Footer-Two"
import SiteHeader from "@/components/Navbar"
import { SanityLive } from "@/sanity/live";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="main-layout">
      <SiteHeader />
      <main>
      {children}
      </main>
      <Footer />
      <FooterTwo />
      <SanityLive />
    </div>
  )
}
