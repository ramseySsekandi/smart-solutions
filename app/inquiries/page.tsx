import QuotationForm from '@/components/QuotationForm';
import SecondaryCarousel from '@/components/Secondary-Carousel'

const QuotationPage = () => {
  
  return (
    <>
      <SecondaryCarousel id='ep' img="https://image.shutterstock.com/image-photo/diverse-group-people-socializing-casual-260nw-2541238159.jpg" alt='Image' title='Inquiries & Quotation' />
      <section className="mt-[250px] bg-[#f9f9f9] text-gray-800 flex justify-center items-center">
        <section className="py-16 px-6 container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 transform transition-all hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
              Get Your Quotation
            </h2>
            <QuotationForm />
          </div>
        </section>
      </section>
    </>
  );
};

export default QuotationPage;