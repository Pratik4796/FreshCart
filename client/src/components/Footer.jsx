const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
    },
    {
      title: "Need Help?",
      links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"]
    }
  ];

  return (
<div className="py-16px-6 md:px-16 lg:px-24 xl:px-32">
  <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
    <div>
      <h2 className="font-semibold text-2xl md:text-3xl text-gray-900">FreshCart</h2>
      <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.</p>
    </div>
    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
      <div>
        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
          Quick Links
        </h3>
        <ul className="text-sm space-y-1">
          <li>
            <a href="#" className="hover:underline transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Best Sellers
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Offers & Deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
          Need Help?
        </h3>
        <ul className="text-sm space-y-1">
          <li>
            <a href="#" className="hover:underline transition">
              Delivery Information
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Return & Refund Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Payment Methods
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Track your Order
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
          Follow Us
        </h3>
        <ul className="text-sm space-y-1">
          <li>
            <a href="#" className="hover:underline transition">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline transition">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
    Copyright 2025 © PrebuiltUI All Right Reserved.
  </p>
</div>
  );
};

export default Footer;
