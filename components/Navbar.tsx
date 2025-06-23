// components/Navbar.tsx
import { servicesData as allServicesData } from "@/lib/utils";
import NavbarClient from "./NavbarClient";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    children: allServicesData.map((s) => ({
      name: s.title,
      href: `/services/${s.id}`,
    })),
  },
  { name: "Our Location", href: "/location" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
  { name: "Inquiries & Quotation", href: "/inquiries" },
];

// Only pass id and title to servicesData prop
const servicesData = allServicesData.map(({ id, title }) => ({ id, title }));

export default function Navbar() {
  return <NavbarClient navigation={navigation} servicesData={servicesData} />;
}
