import Footer from "@/components/Footer"
import FooterTwo from "@/components/Footer-Two"
import SiteHeader from "@/components/Navbar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="main-layout">
      <SiteHeader />
      <main>{children}</main>
      <Footer />
      <FooterTwo />
    </div>
  )
}
