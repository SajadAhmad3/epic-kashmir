import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <div className="w-full pt-8">
      <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:text-start font-bold mb-5">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-4 lg:mx-0">
        {faqs.map((faq, index) => (
          <FAQItemComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

const FAQItemComponent: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <button
        className={`w-full px-4 py-3 text-left flex items-center justify-between ${
          isOpen ? "text-red" : "text-black"
        } transition-colors duration-700`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-red" />
        ) : (
          <ChevronDown className="text-gray-800" />
        )}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] px-4 py-3 bg-white border-t border-gray-200" : "max-h-0"
        }`}
      >
        {isOpen && <p className="text-gray-600">{answer}</p>}
      </div>
    </div>
  );
};

export default FAQ;
