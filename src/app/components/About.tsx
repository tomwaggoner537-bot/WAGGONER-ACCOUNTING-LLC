import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="animate-fadeInUp">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Professional CPA at work"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="animate-fadeInUp delay-200">
            <h2 className="text-5xl font-bold mb-6">
              About <span className="text-green-400">Waggoner Accounting</span>
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              With over <strong className="text-green-400">45 years of CPA experience</strong>, 
              Waggoner Accounting LLC is your trusted partner in financial clarity and business success.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in providing comprehensive bookkeeping solutions tailored to small and medium-sized businesses. 
              Our expertise in QuickBooks Online, payroll services, and financial management helps you focus on what you do best—growing your business.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you&apos;re in Texas or anywhere across the nation, we offer professional remote bookkeeping services with the personal touch of a local firm.
            </p>

            {/* Key Points */}
            <div className="space-y-4">

              {/* Item 1 */}
              <div className="flex items-start">
                <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Licensed CPA with Decades of Experience
                  </h4>
                  <p className="text-gray-600">
                    45+ years of trusted financial expertise
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    QuickBooks Online Specialists
                  </h4>
                  <p className="text-gray-600">
                    Expert setup, training, and ongoing support
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="bg-green-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Nationwide Remote Services
                  </h4>
                  <p className="text-gray-600">
                    Serving Texas and clients across the United States
                  </p>
                </div>
              </div>

           
           <div className="mt-8 flex items-center gap-4">
              <img 
                src="/images/intuit-proadvisor-badge-tier-gold.png" 
                alt="QuickBooks ProAdvisor Gold" 
                className="h-20 w-auto"
              />
              <div>
                <p className="text-sm font-semibold text-gray-700">QuickBooks Certified</p>
                <p className="text-xs text-gray-500">ProAdvisor Gold Tier</p>
              </div>
            </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;