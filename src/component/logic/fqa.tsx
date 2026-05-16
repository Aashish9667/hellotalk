"use client"
import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

// 1. Define the structure of an FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  // 2. Your data with the FAQItem type
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is HelloTalk and how does it work?",
      answer: "HelloTalk is a language exchange app..."
    },
    
       {
      id: 2,
      question: "What is HelloTalk and how does it work?",
      answer: "HelloTalk is a language exchange app..."
    },
       {
      id: 3,
      question: "What is HelloTalk and how does it work?",
      answer: "HelloTalk is a language exchange app..."
    },
       {
      id:4,
      question: "What is HelloTalk and how does it work?",
      answer: "HelloTalk is a language exchange app..."
    },
  ];

  // 3. Explicitly type the State: It can be a 'number' or 'null'
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 4. Type the index parameter as a 'number'
  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-30">
      {faqData.map((item, index: number) => (
        <div key={item.id} className="mt-4 mb-4 border-b border-gray-100 pb-4">
          <div className="flex justify-center items-center">
            <div
              className="flex justify-between w-170 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className={`text-md font-semibold ${activeIndex === index ? "text-blue-600" : ""}`}>
                {item.question}
              </h1>
              <SlArrowDown
                size={12}
                className={`duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          {activeIndex === index && (
            <div className="flex justify-center items-center">
              <p className="w-170 text-sm font-extralight text-gray-500 pt-2.5">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
