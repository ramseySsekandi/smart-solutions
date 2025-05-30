import SecondaryCarousel from '@/components/Secondary-Carousel';
import { servicesData } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, Clock, Users, Globe, Zap } from 'lucide-react';
import { HERO_CAROUSEL_QUERY_ID } from '@/sanity/lib/queries';
import { client } from '@/sanity/client';
import { sanityFetch } from '@/sanity/live';
import { PortableText } from 'next-sanity';

// export function generateStaticParams() {
//   return servicesData.map((service) => ({
//     id: service.id,
//   }));
// }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // const {data} = await client.fetch(HERO_CAROUSEL_QUERY_ID, { id: (await params).id });
  const {data} = await sanityFetch({query:HERO_CAROUSEL_QUERY_ID, params:{id}});
  // const service = servicesData.find((s) => s.id === id);
  // const otherServices = servicesData.filter((s) => s.id !== id).slice(0, 3);
  console.log(data, "data")

  const {
    Button_Text: btnText,
    Button_URL: btnUrl,
    Description: description,
    Image_URL: imageUrl,
    Title: title,
    _createdAt: createdAt,
    _id: slug,
  } = data
  if (!data) {
    notFound();
  }

  // if (!service) {
  //   notFound();
  // }

  return (
    <div className="py-12 relative">
      <SecondaryCarousel 
        id="whoWeAre" 
        img={imageUrl}
        alt={title}
        title={title}
      />
      {/* <h2>{Sdata.}</h2> */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mb-8">
            <Link 
              href="/services"
              className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <Link
              href={`/services#${slug}`}
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              View in Services Page
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {title}
                  </h1>
                  
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p> */}
                    <PortableText value={description} />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Clock className="w-6 h-6 text-green-600 mb-2" />
                      <h3 className="font-semibold">Quick Response</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">24/7 Support</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Users className="w-6 h-6 text-green-600 mb-2" />
                      <h3 className="font-semibold">Expert Team</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Skilled Professionals</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Globe className="w-6 h-6 text-green-600 mb-2" />
                      <h3 className="font-semibold">Global Reach</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Worldwide Service</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Zap className="w-6 h-6 text-green-600 mb-2" />
                      <h3 className="font-semibold">Fast Delivery</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Quick Turnaround</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4">Get Started</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ready to experience our {title.toLowerCase()}? Request a quote now and our team will get back to you shortly.
                </p>
                <Link
                  href="/inquiries"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Request Quotation
                  <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
                </Link>
              </div>

              {/* <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4">Other Services</h2>
                <div className="space-y-4">
                  {otherServices.map((otherService) => (
                    <Link
                      key={otherService.id}
                      href={`/services/${otherService.id}`}
                      className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <h3 className="font-semibold text-green-600">{otherService.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">
                        {otherService.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}