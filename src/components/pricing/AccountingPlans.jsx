import React, { useState } from 'react';

const AccountingPlans = () => {
  const [activeTab, setActiveTab] = useState('Bookkeeping');
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const plans = {
    Bookkeeping: [
      {
        title: 'Starter',
        price: '₹10,800/month',
        description: 'Ideal for entrepreneurs just starting out who need to stay compliant with expert bookkeeping support',
        features: [
          '✔ Monthly bookkeeping',
          '✔ Annual/quarterly GST filing',
          '✔ Tally/Zoho subscription',
          '✔ Unlimited support',
        ],
        buttonColor: 'text-Primary border-Primary ',
      },
      {
        title: 'Pro',
        badge: '★ MOST POPULAR',
        price: '₹19,200/month',
        description: 'Perfect for businesses focused on growth, requiring weekly bookkeeping from a dedicated accountant',
        features: [
          '✔ Weekly bookkeeping',
          '✔ Dedicated CA based in India',
          '✔ Accounts receivables & payables reporting',
        ],
        buttonColor: 'bg-Primary border-Primary text-white',
      },
    ],
    'Full-Service Accounting': [
      {
        title: 'Starter',
        price: '₹15,000/month',
        description: 'For entrepreneurs seeking reliable, hassle-free accounting with dedicated support and seamless compliance',
        features: [
          '✔ Monthly Bookkeeping',
          '✔ Annual/Quarterly GST return',
          '✔ Company tax return',
          '✔ Tally/Dext subscription',
          '✔ Dedicated remote Accountant',
          '✔ Support response within 2 business days',
        ],
        buttonColor: 'text-Primary border-Primary',
      },
      {
        title: 'Pro',
        badge: '★ MOST POPULAR',
        price: '₹26,250/month',
        description: 'For growth-driven businesses seeking advanced insights, proactive planning, and complete financial oversight.',
        features: [
          '✔ Everything in Starter',
          '✔ Dedicated India-based accountant',
          '✔ Weekly Bookkeeping',
          '✔ Accounts payables & receivables',
          '✔ Individual tax return (up to 2 individuals)',
          '✔ Annual tax planning with Senior Tax Expert',
          '✔ Multi-Currency support',
          '✔ Payroll for up to 5 employees',
        ],
        buttonColor: 'bg-Primary border-Primary text-white',
      },
    ],
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-t from-Primary to-Secondary text-white py-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Effortless Accounting Starts Here</h1>
        <p className="text-sm text-green-400 space-x-4">
          <span>✔ Great support</span>
          <span>✔ No hidden fees</span>
          <span>✔ Paperless accounting</span>
          <span>✔ 30-day money-back guarantee</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(plans).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium border transition ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-500 bg-blue-100'
                  : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dropdown & Billing Switch */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        
          
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow hover:shadow-md transition relative ${
                plan.badge ? 'border-2 border-blue-300 bg-blue-50' : 'border'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#0A1A32] mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-[#0A1A32] mb-4">{plan.price}</p>
              <button
                className={`font-medium py-2 px-5 rounded-md transition ${
                  plan.buttonColor.includes('bg') ? plan.buttonColor : `${plan.buttonColor} border`
                }`}
              >
                Enquire now
              </button>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r  from-Primary to-Secondary text-white mt-10 rounded-md mx-4 mb-8 md:mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        <p className="text-lg font-semibold">Need more information before choosing?</p>
        <button className="bg-Primary text-white font-semibold px-5 py-2 rounded-md hover:bg-Secondary hover:text-black    transition">
          Book a call
        </button>
      </div>
    </div>
  );
};


export default AccountingPlans;
