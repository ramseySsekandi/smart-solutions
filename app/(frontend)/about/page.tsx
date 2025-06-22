import AboutCarousel from '@/components/About-Carousel';
import SecondaryCarousel from '@/components/Secondary-Carousel';
import Image from 'next/image';

// Local static data to replace Sanity
const aboutPageData = {
  hero: {
    title: 'Who We Are',
    image: '/about/bow-tie.png',
    description: 'We are a team of professionals dedicated to delivering value and excellence.'
  },          
  principles: {
    description: 'Our principles are integrity, innovation, and impact.'
  },
  team: {
    board: [
      { _id: '1', name: 'John Doe', image: '/about/elena.jpg' },
      { _id: '2', name: 'Jane Smith', image: '/about/daisy.png' },
      { _id: '3', name: 'Michael Brown', image: '/about/cashes.png' }
    ],
    management: [
      { _id: '4', name: 'Sarah Lee', image: '/about/emuesiri.png' },
      { _id: '5', name: 'David Kim', image: '/about/bow-tie.png' },
      { _id: '6', name: 'Emily White', image: '/about/elena.jpg' }
    ]
  },
  history: [
    { _id: 'h1', year: 2015, title: 'Founded', description: 'Company was founded in 2015.', image: '/about/bow-tie.png' },
    { _id: 'h2', year: 2018, title: 'Expansion', description: 'Expanded to new markets.', image: '/about/daisy.png' },
    { _id: 'h3', year: 2022, title: 'Innovation', description: 'Launched innovative services.', image: '/about/cashes.png' }
  ],
  policies: [
    { _id: 'p1', title: 'Quality Policy', description: 'We ensure quality in all our services.', image: '/about/bow-tie.png' },
    { _id: 'p2', title: 'Sustainability Policy', description: 'Committed to sustainable practices.', image: '/about/daisy.png' },
    { _id: 'p3', title: 'Diversity Policy', description: 'We value diversity and inclusion.', image: '/about/cashes.png' }
  ]
};

const About = () => {
  const { hero, principles, team, history, policies } = aboutPageData;

  // Helper function to get image URL or fallback
  const getImageUrl = (item: { image?: string }) => (item?.image ? item.image : '/hero-about.jpeg');

  return (
    <div className="relative">
      <SecondaryCarousel 
        id='whoWeAre' 
        img={getImageUrl(hero)} 
        alt={hero?.title || 'Who We Are'} 
        title={hero?.title || 'Who We Are'}
      />
      <section className='mt-[250px] bg-gray-100 text-gray-900'>
        <div className="text-center max-w-5xl mx-auto py-12 px-6 space-y-4">
          <p>{hero?.description}</p>
        </div>
      </section>

      {principles && (
        <section id='ourPrinciples' className='my-10'>
          <h1 className='text-4xl text-center font-bold'>Our<span className='text-green-600'> Principles.</span></h1>
          <div className="text-center max-w-5xl mx-auto py-12 px-6 space-y-4">
            <p>{principles.description}</p>
          </div>
        </section>
      )}

      <section id='ourTeam'>
        <h1 className='text-4xl text-center font-bold'>Board of<span className='text-green-600'> Directors.</span></h1>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:w-full gap-4 mx-auto px-4 py-8">
            {team?.board?.map((member, index) => {
              const isSingleInLastRow = team.board.length % 3 === 1 && index === team.board.length - 1;
              const imageUrl = getImageUrl(member);
              return (
                <div
                  key={member._id}
                  className={`relative w-full h-80 ${isSingleInLastRow ? 'md:col-start-2' : ''}`}
                >
                  <Image
                    src={imageUrl}
                    className='relative object-cover md:object-contain shadow-lg'
                    fill
                    alt={member.name || 'Board Member'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h1 className='text-4xl text-center font-bold mt-16'>Management<span className='text-green-600'> Team.</span></h1>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:w-full gap-4 mx-auto px-4 py-8">
            {team?.management?.map((member, index) => {
              const isSingleInLastRow = team.management.length % 3 === 1 && index === team.management.length - 1;
              const imageUrl = getImageUrl(member);
              return (
                <div
                  key={member._id}
                  className={`relative w-full h-80 ${isSingleInLastRow ? 'md:col-start-2' : ''}`}
                >
                  <Image
                    src={imageUrl}
                    className='relative object-cover md:object-contain shadow-lg'
                    fill
                    alt={member.name || 'Management Team Member'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <section id='ourHistory'>
          <h1 className='text-4xl text-center font-bold'>Our<span className='text-green-600'> History.</span></h1>
          <AboutCarousel historyData={history || []} />
        </section>

        <section id='ourPolicies'>
          <h1 className='text-4xl text-center font-bold'>Our<span className='text-green-600'> Policies.</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:w-full gap-4 mx-auto px-4 py-8">
            {policies?.map((policy) => {
              const imageUrl = getImageUrl(policy);
              return (
                <div className="relative w-full h-80" key={policy._id}>
                  <Image
                    src={imageUrl}
                    className='relative object-cover md:object-contain shadow-lg'
                    fill
                    alt={policy.title || 'Policy'}
                  />
                  {policy.description && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white p-4 text-center">
                        <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                        <p>{policy.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;