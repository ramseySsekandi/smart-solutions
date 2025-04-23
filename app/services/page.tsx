import SecondaryCarousel from '@/components/Secondary-Carousel';
import React from 'react';
import Link from "next/link";

export const servicesData = [
  {
    id: "technology-it-services",
    title: "Technology/ IT Services",
    description: "Innovative solutions for a digital world. Our technology services provide cutting-edge solutions for businesses and individuals, ensuring seamless integration and efficiency in the ever-evolving tech landscape. From cloud computing to cybersecurity, we offer a comprehensive range of services designed to meet the unique needs of our clients. Our team of experts is dedicated to delivering reliable and scalable solutions that drive growth and innovation.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    darkImage: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "event-management",
    title: "Event Management",
    description: "Memorable events and experiences. Our event management services provide expert planning and coordination for events and functions, ensuring every detail is executed flawlessly. Whether it’s a corporate event, wedding, or community gathering, we bring your vision to life with creativity and precision. Our team handles everything from venue selection to on-site management, leaving you free to enjoy the occasion.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    darkImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Efficient and reliable property management. Our property management services provide comprehensive support for property owners and tenants, ensuring smooth operations and satisfaction. From tenant screening to maintenance and rent collection, we handle all aspects of property management with professionalism and care. Our goal is to maximize the value of your investment while minimizing your stress.",
    image: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8=",
    darkImage: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8="
  },
  {
    id: "charity-foundation",
    title: "Charity Foundation",
    description: "Supporting social causes and community development. Our foundation services provide resources and assistance to charitable organizations, fostering positive change and impact. We collaborate with local and international partners to address pressing social issues, from education and healthcare to environmental sustainability. Together, we can make a difference in the lives of those who need it most.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D",
    darkImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "consultancy",
    title: "Consultancy",
    description: "Expert guidance for business success. Our consultancy services provide strategic advice and support for businesses and organizations, helping them achieve their goals. From market analysis to operational efficiency, we offer tailored solutions that drive growth and profitability. Our experienced consultants work closely with you to understand your challenges and deliver actionable insights.",
    image: "https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE=",
    darkImage: "https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE="
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Premier properties and services. Our real estate services provide expert guidance and support for buying, selling, and managing properties, ensuring client satisfaction. Whether you’re a first-time buyer or a seasoned investor, we offer personalized assistance to help you navigate the real estate market with confidence. Our extensive network and market knowledge ensure you get the best deals.",
    image: "https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM=",
    darkImage: "https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM="
  },
  {
    id: "tours-travel",
    title: "Tours & Travel",
    description: "Explore the world with us. Our tours and travel services provide unforgettable experiences and adventures, tailored to your preferences. From exotic destinations to local getaways, we handle all the details so you can focus on making memories. Our packages include guided tours, accommodation, and transportation, ensuring a hassle-free travel experience.",
    image: "https://media.istockphoto.com/id/1992243286/photo/two-young-female-friends-embracing-on-the-street-in-dubrovnik.jpg?s=612x612&w=0&k=20&c=I-6jkpo7nTuEUHvOcdPTHdBNxl1A58r4NBZaP0CHcBA=",
    darkImage: "https://media.istockphoto.com/id/1992243286/photo/two-young-female-friends-embracing-on-the-street-in-dubrovnik.jpg?s=612x612&w=0&k=20&c=I-6jkpo7nTuEUHvOcdPTHdBNxl1A58r4NBZaP0CHcBA="
  },
  {
    id: "transport-logistics",
    title: "Transport & Logistics",
    description: "Efficient and reliable transport and logistics services. Our transport and logistics services provide comprehensive support for businesses and organizations. From supply chain management to last-mile delivery, we ensure your goods reach their destination on time and in perfect condition. Our state-of-the-art tracking systems provide real-time updates for peace of mind.",
    image: "https://media.istockphoto.com/id/2157040201/photo/truck-carrying-forty-foot-container-leaving-port-terminal-with-ship-and-quay-crane-on-the.jpg?s=612x612&w=0&k=20&c=D4UJJ09jrr-lkrP_6FvIAj6-2PosXIzg-iQ_HcxD0iQ=",
    darkImage: "https://media.istockphoto.com/id/2157040201/photo/truck-carrying-forty-foot-container-leaving-port-terminal-with-ship-and-quay-crane-on-the.jpg?s=612x612&w=0&k=20&c=D4UJJ09jrr-lkrP_6FvIAj6-2PosXIzg-iQ_HcxD0iQ="
  },
  {
    id: "publishing",
    title: "Publishing",
    description: "Quality content and publishing services. Our publishing services provide expert guidance and support for authors and publishers, ensuring impactful publications. From editing and design to distribution and marketing, we handle every aspect of the publishing process. Whether you’re an aspiring author or an established publisher, we help bring your vision to life.",
    image: "https://media.istockphoto.com/id/1407890983/vector/newspaper-realistic-vector-illustration-background-of-the-page-headline-and-cover-of-old.jpg?s=612x612&w=0&k=20&c=uyB-_t4SbgkZxpc2CPk8_ELgNcnHTuUBPenHTIiRZIc=",
    darkImage: "https://media.istockphoto.com/id/1407890983/vector/newspaper-realistic-vector-illustration-background-of-the-page-headline-and-cover-of-old.jpg?s=612x612&w=0&k=20&c=uyB-_t4SbgkZxpc2CPk8_ELgNcnHTuUBPenHTIiRZIc="
  },
  {
    id: "media-comm-entertainment",
    title: "Media Comm & Entertainment",
    description: "Engaging media and entertainment services. Our media communication and entertainment services provide expert guidance and support for businesses and organizations. From content creation to digital marketing, we help you connect with your audience and build your brand. Our team of creatives and strategists work together to deliver impactful campaigns that resonate.",
    image: "https://media.istockphoto.com/id/1300532725/photo/professional-cameraman-covering-on-event-with-a-video-cameraman-silhouette-on-live-studio.jpg?s=612x612&w=0&k=20&c=4Q3OJQE7qXrWiA7A8B8u2Bba1w5Dum8Q7ABlTl8_Pbw=",
    darkImage: "https://media.istockphoto.com/id/1300532725/photo/professional-cameraman-covering-on-event-with-a-video-cameraman-silhouette-on-live-studio.jpg?s=612x612&w=0&k=20&c=4Q3OJQE7qXrWiA7A8B8u2Bba1w5Dum8Q7ABlTl8_Pbw="
  }
];

const page = () => {
  return (
    <div className="relative">
      <SecondaryCarousel 
        id="whoWeAre" 
        img="https://media.istockphoto.com/id/1226864145/photo/server-room-with-server-racks-in-datacenter-banner-3d-illustration.jpg?s=612x612&w=0&k=20&c=J0I5ByWvebvd8gBoNQt5YEJgFXp4cwY4hRyVWl8_-Vw=" 
        alt="Cyber Technology" 
        title="Our Services"
      />
      {
        servicesData.map((service)=>(
          <section className="bg-white dark:bg-gray-900" key={service.id} id={service.id}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img 
            className="w-full dark:hidden" 
            src={service.image}
            alt="dashboard image"
          />
          <img 
            className="w-full hidden dark:block" 
            src={service.darkImage}
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0 self-start">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-green-600 dark:text-white">
              {service.title}
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {service.description}
            </p>
            <Link 
              href="/inquiries" 
              className="inline-flex items-center text-green-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Request Quotation
              <svg 
                className="ml-2 -mr-1 w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
        ))
      }
    </div>
  );
};

export default page;