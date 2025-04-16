import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = [
  {
    category: "General",
    question: "Is SaasAble only for SaaS web apps?",
    answer:
      "While SaasAble is designed with SaaS applications in mind, it's not limited to SaaS products. SaasAble is multipurpose and can be used for a variety of websites and applications, whether it's for an agency, digital product, CRM, blog, AI platform, or any other system. SaasAble is versatile and adaptable to fit any use case, SaaS or not. It's built for all types of projects!",
  },
  {
    category: "General",
    question: "What makes SaasAble different from other UI Kits?",
    answer: "SaasAble offers industry-specific templates, a React Material UI Kit, Figma UI Kit, and flexible customization options that cater to both front-end marketing and admin interfaces.",
  },
  {
    category: "General",
    question: "Is SaasAble suitable for both developers and designers?",
    answer: "Yes, SaasAble is built for both, with a Figma UI kit for designers and React code for developers.",
  },
  {
    category: "Pricing & Licenses",
    question: "What is the difference between the Figma and codebase versions?",
    answer: "The Figma version is for design and prototyping, while the codebase version provides ready-to-use React components for development.",


  },
  {
    category: "Support & Updates",
    question: "How can I download the template after purchase?",
    answer: "You will receive the template in a .zip format immediately after successfully purchasing the template.    ",
  },
];

const categories = ["All", "General", "Pricing & Licenses", "Support & Updates"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <div className="bg-gray-900 text-white py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-400 mt-2">
        Answers to common queries about SaasAble.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm border ${
              activeCategory === category ? "bg-gray-700 border-gray-500" : "border-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-indigo-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-indigo-300">
          Get In Touch
        </button>
      </div>
    </div>
  );
}


