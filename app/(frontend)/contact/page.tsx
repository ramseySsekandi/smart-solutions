import ContactForm from '@/components/ContactForm';
import SecondaryCarousel from '@/components/Secondary-Carousel';
import { Mail, User } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <SecondaryCarousel id="ep" img="https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt="Image" title="Contact Us" />
      <section className="mt-[250px] bg-[#f9f9f9] text-gray-800 flex justify-center items-center">
        <section className="py-16 px-6 container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12 transform transition-all hover:scale-[1.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-600">
              Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8 justify-center">
              <div className="space-y-6 mx-auto">
                <div className="flex items-center bg-gray-100 p-4 rounded-xl">
                  <Mail className="mr-4 text-green-400" size={36} />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-gray-600">info@smartsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center mx-auto bg-gray-100 p-4 rounded-xl">
                  <User className="mr-4 text-green-400" size={36} />
                  <div>
                    <h3 className="font-semibold">Customer Support</h3>
                    <p className="text-gray-600">+256 756743403</p>
                  </div>
                </div>
              </div>

             <ContactForm />
            </div>
            
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactPage;