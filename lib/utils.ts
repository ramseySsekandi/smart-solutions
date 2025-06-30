import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const servicesData = [
  {
    id: "technology-it-services",
    title: "Technology/ IT Services",
    description: "Technology is not just a component of our operations—it is the foundation and driving force behind everything we do. We are committed to delivering forward-thinking, scalable, and secure technology solutions that empower businesses and transform industries.Our technology division leverages cutting-edge innovation to create value across various sectors, integrating high-end tech into all services we offer. Our key areas of specialization include:",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    darkImage: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    services: [
      {
        title: "Micro-Fintech Systems & Applications",
        description: "We design and develop agile micro-fintech platforms and applications that enable financial inclusion, streamline digital transactions, and support mobile-based banking and payment solutions for emerging markets."
      },
      {
        title: "Business Technology Solutions",
        description: "From enterprise resource planning (ERP) systems to digital transformation strategies, we provide customized business technology solutions that improve operational efficiency, data management, and overall performance."
      },
      {
        title: "Cybersecurity Services",
        description: "Our cybersecurity services are built to protect digital assets, ensure compliance, and mitigate risks. We offer security audits, threat assessments, infrastructure hardening, and ongoing monitoring to safeguard clients' operations in an increasingly complex threat landscape."
      },
      {
        title: "AI & Big Data Solutions",
        description: "We harness the power of artificial intelligence and big data to drive smarter decision-making. Our solutions include predictive analytics, machine learning integration, data visualization, and AI automation tailored to industry-specific needs."
      }
    ],
  },
  {
    id: "event-management",
    title: "Events Management",
    description: "We take pride in delivering comprehensive, high-quality event management solutions tailored to meet the unique needs of our clients. Our Events Division brings together expertise, creativity, and attention to detail to ensure memorable experiences from start to finish.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    darkImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    services: [
      {
        title: "Professional Catering – Zodongo Kitchen",
        description:"Our catering service, operated under the renowned Zodongo Kitchen, offers a diverse and expertly curated menu to suit a variety of events—from intimate gatherings to large-scale corporate functions. We prioritize hygiene, flavour, and presentation, using only fresh, high-quality ingredients to create culinary experiences that delight guests and exceed expectations.Zodongo Kitchen is more than a kitchen with its ambition to orchestrate our idea of a state-of-the-art smart kitchenWe intend to build our own in-house Zodongo Kitchen Operating System (or ZKOS as we like to call it) - an operating system that has a collection of applications that helps optimize all aspects of our cloud kitchens in real-time, maximizing efficiency. For our restaurant partners, this means serving more customers in a shorter period of time and as efficiently as possible."
      },
      {
        title: "Ushering Services",
        description: "Our well-trained, courteous, and professional ushers are dedicated to ensuring smooth guest coordination, maintaining order, and enhancing the overall atmosphere of any event. Whether it's a formal corporate event or a festive celebration, our ushering team represents elegance, efficiency, and warmth."
      },
      {
        title: "Event Decoration",
        description: "We offer creative and customized event decoration solutions that transform ordinary spaces into captivating venues. From themed concepts to minimalist elegance, our team designs with precision and aesthetic flair to bring your vision to life, ensuring every detail contributes to a cohesive and visually stunning experience."
      },
      {
        title: "Bakery & Cakery Services",
        description: "Our bakery division specializes in bespoke cakes and baked goods for all occasions. From elegant wedding cakes to themed birthday treats, we combine flavour, artistry, and creativity to produce cakes that are as delicious as they are visually impressive"
      }
    ],
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Efficient and reliable property management. Our property management services provide comprehensive support for property owners and tenants, ensuring smooth operations and satisfaction. From tenant screening to maintenance and rent collection, we handle all aspects of property management with professionalism and care. Our goal is to maximize the value of your investment while minimizing your stress.",
    image: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8=",
    darkImage: "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYNV4ydq_T7ldqR4v3aIwOshCZqBuEopq4AcFObrBf8=",
    services: [
     
    ],
  },
  {
    id: "charity-foundation",
    title: "Charity Foundation",
    description: "Supporting social causes and community development. Our foundation services provide resources and assistance to charitable organizations, fostering positive change and impact. We collaborate with local and international partners to address pressing social issues, from education and healthcare to environmental sustainability. Together, we can make a difference in the lives of those who need it most.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D",
    darkImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D",
    services: [
    ],
  },
  {
    id: "consultancy",
    title: "Consultancy",
    description: "We offer a diverse portfolio of consultancy services designed to empower businesses, enhance operational efficiency, and drive strategic growth across various industries. With a team of seasoned experts and industry practitioners, we deliver actionable insights and tailored solutions that meet the evolving needs of our clients. From market analysis to operational efficiency, we offer tailored solutions that drive growth and profitability. Our experienced consultants work closely with you to understand your challenges and deliver actionable insights.Our core consultancy services include:",
    image: "https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE=",
    darkImage: "https://media.istockphoto.com/id/1502896527/photo/office-meeting-and-documents-of-business-people-clients-or-team-for-taxes-audit-or-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=k4-TacdiVfmnFcjt_Y3Y7YKnOqXV4WY0sdwV8bjokIE=",
    services: [
      {
        title: "Supply Chain Management",
        description: "We provide end-to-end consultancy in optimizing supply chain operations, covering procurement strategies, inventory control, logistics coordination, and vendor management—ensuring cost efficiency, agility, and resilience."
      },
      {
        title: "Oil & Gas Sector Advisory",
        description: "With deep industry knowledge, we offer strategic advisory services within the oil and gas sector, supporting clients in areas such as regulatory compliance, operational optimization, project planning, and stakeholder engagement."
      },
      {
        title: "Business Development & Management",
        description: "We assist businesses in identifying new market opportunities, refining operational models, and enhancing organizational performance. Our approach combines innovation with practical strategies to drive sustainable growth."
      },
      {
        title: "Safety & Security Consultancy",
        description: "Zodongo International delivers comprehensive safety and security solutions, including risk assessments, emergency planning, compliance audits, and workplace safety programs, tailored to safeguard assets, personnel, and operations."
      },
      {
        title: "Safety & Security Consultancy",
        description: "We support organizations with targeted talent acquisition strategies, offering professional recruitment services that match the right candidates with the right roles—locally and internationally."
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Premier properties and services. Our real estate services provide expert guidance and support for buying, selling, and managing properties, ensuring client satisfaction. Whether you’re a first-time buyer or a seasoned investor, we offer personalized assistance to help you navigate the real estate market with confidence. Our extensive network and market knowledge ensure you get the best deals.",
    image: "https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM=",
    darkImage: "https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM=",
    services: [
      {
        title: "Property & Facility Management.",
        description: "We effectively oversee your tenants and offer guidance on optimizing your property to maximize rental income from your investment. Our focus encompasses residential, commercial, and industrial properties, and I take pride in leading a team of committed professionals who strive to deliver outstanding real estate solutions to our clients. Moreover, in property management, we undertake the following key responsibilities as property managers: • Rent Collection • Property Maintenance and Renovations • Property Advertising • General Property Oversight."
      },
      {
        title: "Marketing and Brokerage",
        description: "We combine brokerage and marketing services to effectively connect landlords with tenants and sellers with buyers, generating interest, leads, and facilitating transactions. Our brokerage services include property valuation, listings, showings, negotiation, contract management, and closing support. In addition, we offer a range of marketing services such as online and traditional marketing, virtual tours, networking, staging and photography, lead generation, content marketing, email marketing, and social media marketing."
      },
      {
        title: "Pre-Construction & Structural Construction",
        description: "We assist our clients in the planning and preparation stages prior to the commencement of construction, and we also engage in the actual construction process, ensuring a high standard of excellence. Our Pre-construction Services include: • Feasibility Studies • Budgeting and Cost Estimating • Scheduling and Phasing • Design Development • Permitting and Entitlements • Risk Management • Material Procurement • Subcontractor Selection Our Structural Construction Services encompass: • Site Preparation • Foundation Work • Framing • Roofing • Exterior Walls • Interior Walls • Plumbing • Electrical Work • Insulation • Drywall and Finishing • Flooring • Painting"
      },
      {
        title: "Real Estate Investment Consultancy",
        description: "We assist you in maximizing your real estate investments through expert advice and strategic planning. Our comprehensive approach focuses on developing tailored investment strategies to meet your specific needs and financial objectives. Our services include: • Development of Investment Strategies • Market Research and Analysis • Valuation and Feasibility Assessments • Risk Management Advisory • Portfolio Management • Optimization of Asset Management • Negotiation of Investment Deals to Secure Favorable Terms • Property Assessment • Management of Construction Risks • Ensuring Regulatory Compliance • Property Development Services • Client Consultation and Relationship Management • Property Management and Operational Support • Financial Performance Analysis • Assistance with Resale • Financial Management • Networking Opportunities."
      }
    ],
  },
  {
    id: "tours-travel",
    title: "Tours & Travel",
    description: "Adventure is at the heart of what we do. Our Tours & Travel division is dedicated to providing seamless, enriching, and unforgettable travel experiences. We specialize in delivering tailored travel solutions with a focus on comfort, cultural immersion, and natural exploration.",
    image: "https://media.istockphoto.com/id/1992243286/photo/two-young-female-friends-embracing-on-the-street-in-dubrovnik.jpg?s=612x612&w=0&k=20&c=I-6jkpo7nTuEUHvOcdPTHdBNxl1A58r4NBZaP0CHcBA=",
    darkImage: "https://media.istockphoto.com/id/1992243286/photo/two-young-female-friends-embracing-on-the-street-in-dubrovnik.jpg?s=612x612&w=0&k=20&c=I-6jkpo7nTuEUHvOcdPTHdBNxl1A58r4NBZaP0CHcBA=",
    services: [
      {
        title: "Airport Transfers",
        description: "We offer reliable, timely, and professional airport transfer services to ensure smooth arrivals and departures. Whether for individuals or groups, our fleet and personnel are equipped to deliver a hassle-free travel experience."
      },
      {
        title: "Accommodation Arrangements",
        description: "Zodongo International partners with trusted hospitality providers to offer a range of accommodation options—from luxury hotels to boutique lodges and eco-resorts—carefully selected to meet the unique preferences and budgets of our clients."
      },
      {
        title: "Cultural & Nature-Based Experiences",
        description: "Our travel experiences are designed to connect travelers with the rich cultural heritage and breathtaking natural beauty of each destination. From guided cultural tours to nature trails, wildlife safaris, and community-based tourism, we create meaningful journeys that leave lasting impressions."
      },
    ],
  },
  {
    id: "transport-logistics",
    title: "Transport & Logistics",
    description: "We have established ourself as a trusted and efficient player in the transport and logistics sector, offering innovative and client-focused solutions. With a strong commitment to reliability, safety, and timeliness, we specialize in delivering services that simplify movement and ensure peace of mind.Our key areas of expertise include:",
    image: "https://media.istockphoto.com/id/2157040201/photo/truck-carrying-forty-foot-container-leaving-port-terminal-with-ship-and-quay-crane-on-the.jpg?s=612x612&w=0&k=20&c=D4UJJ09jrr-lkrP_6FvIAj6-2PosXIzg-iQ_HcxD0iQ=",
    darkImage: "https://media.istockphoto.com/id/2157040201/photo/truck-carrying-forty-foot-container-leaving-port-terminal-with-ship-and-quay-crane-on-the.jpg?s=612x612&w=0&k=20&c=D4UJJ09jrr-lkrP_6FvIAj6-2PosXIzg-iQ_HcxD0iQ=",
    services: [
      {
        title: "Courier Services",
        description: "We provide fast, secure, and reliable courier solutions for individuals, businesses, and institutions. Whether it's local or regional deliveries, our courier network ensures timely dispatch and safe handling of packages—from documents to delicate items—using a blend of professional logistics planning and real-time tracking."
      },
      {
        title: "Parking & Relocation Solutions",
        description: "Zodongo International also offers smart, efficient parking and relocation services designed to ease the stress of moving and vehicle management. Our solutions are tailored to support both residential and corporate clients, ensuring smooth transitions, organized logistics, and secure handling of belongings and vehicles."
      },
    ],
  },
  {
    id: "publishing",
    title: "Publishing",
    description: "Words are more than just text—they're powerful tools that spark ideas, build connections, and drive meaningful change. As your trusted content creation partner, we specialize in delivering content that not only informs but inspires action.",
    image: "https://media.istockphoto.com/id/1407890983/vector/newspaper-realistic-vector-illustration-background-of-the-page-headline-and-cover-of-old.jpg?s=612x612&w=0&k=20&c=uyB-_t4SbgkZxpc2CPk8_ELgNcnHTuUBPenHTIiRZIc=",
    darkImage: "https://media.istockphoto.com/id/1407890983/vector/newspaper-realistic-vector-illustration-background-of-the-page-headline-and-cover-of-old.jpg?s=612x612&w=0&k=20&c=uyB-_t4SbgkZxpc2CPk8_ELgNcnHTuUBPenHTIiRZIc=",
    services: [
      {
        title: "Our Philosophy",
        description: "We don’t just write—we communicate, strategize, and elevate. Our writing solutions are born from a unique blend of creativity, precision, and deep industry insight, covering a wide array of domains. Whether your needs are academic, corporate, creative, or promotional, we bring your ideas to life through compelling, custom-crafted content."
      },
      {
        title: "Our Expertise Spans",
        description: "•	Academia & Research •	Corporate Communications •	Media & Entertainment •	Marketing & Branding •	Literary Projects (Books, Scripts, and Poetry)"
      },
      {
        title: "Why Choose Zodongo?",
        description: "•	Client-Centered Approach: We take the time to understand your vision, no matter how complex or unique. •	Strategic Thinking: Our writing is backed by purpose, designed to fit into the larger context of your goals. •	Human Touch: In a world of AI-generated content, we pride ourselves on 100% human-written work that reflects emotion, authenticity, and artistry. •	Uncompromising Quality: Every sentence we write is carefully structured by skilled writers who know how to craft language that connects. •	Cost-Effective Excellence: We deliver top-tier writing at competitive prices, ensuring value without compromise. Imagine a partner who listens, understands, and transforms your vision into captivating content that stands out and delivers results."
      },
      {
        title: "Our Services",
        description: "•	Books & Scripts – From fiction and memoirs to screenplays and stage plays, we bring your stories to life. •	Marketing Copy – Persuasive, brand-aligned content designed to attract and convert. •	Corporate Writing – Professional reports, proposals, speeches, and internal communication pieces. •	Resume Writing – Standout resumes and cover letters tailored for your career goals. •	Poetry – Custom poetic compositions for personal, public, or commercial use. •	Zodongo Magazine – Our flagship publication showcasing insightful, thought-provoking content across industries."
      }
    ],
  },
  {
    id: "media-comm-entertainment",
    title: "Media Comm & Entertainment",
    description: "We recognize the enduring power and cultural influence of entertainment. With a dynamic and forward-thinking approach, we have carved out a strong presence in the media, communication, and entertainment industry, delivering high-quality services across multiple creative domains.Our entertainment division is committed to innovation, excellence, and impact, offering a wide range of professional services, including:",
    image: "https://media.istockphoto.com/id/1300532725/photo/professional-cameraman-covering-on-event-with-a-video-cameraman-silhouette-on-live-studio.jpg?s=612x612&w=0&k=20&c=4Q3OJQE7qXrWiA7A8B8u2Bba1w5Dum8Q7ABlTl8_Pbw=",
    darkImage: "https://media.istockphoto.com/id/1300532725/photo/professional-cameraman-covering-on-event-with-a-video-cameraman-silhouette-on-live-studio.jpg?s=612x612&w=0&k=20&c=4Q3OJQE7qXrWiA7A8B8u2Bba1w5Dum8Q7ABlTl8_Pbw=",
    services: [
      {
        title: "Custom Content Production",
        description: "We specialize in creating original and tailored multimedia content for diverse audiences and platforms. From video and audio production to branded storytelling and digital campaigns, we craft compelling content that resonates and drives engagement."
      },
      {
        title: "Premium Music Distribution",
        description: "Our music distribution network ensures that artists’ work reaches global and regional platforms with maximum visibility. We support seamless digital and physical distribution, providing access to key markets while safeguarding intellectual property."
      },
      {
        title: "Songwriting & Composition",
        description: "We offer professional songwriting and music composition services, catering to solo artists, media productions, and commercial projects. Our team of creatives brings originality and depth to every project, aligning musical narratives with artistic vision."
      },
      {
        title: "Live Performances & Appearances",
        description: "From intimate showcases to large-scale events, we organize and manage high-impact live performances, artist appearances, and entertainment experiences that captivate audiences and elevate brands."
      },
      {
        title: " Artist Management",
        description: "We provide end-to-end talent and career management services for emerging and established artists. Our services include brand development, bookings, media representation, and strategic career planning to ensure long-term success."
      },
    ],
  }
];

export const privateRoutes = ["/dashboard"]
