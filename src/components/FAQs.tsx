import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const Faq: React.FC = () => {
  const [activeQ, setActiveQ] = useState<string>("q1");

  const openQ = (id: string): void => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id: string): string => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id: string): string => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className="faq-section bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="faq-content text-center">
          <div className="faq-content__title mb-8">
            <span className="text-primary font-semibold">Have Questions?</span>
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2">
              Find quick answers to common questions about renting a vehicle on
              DriveOps.
            </p>
          </div>

          <div className="all-questions grid gap-6">
            <div className="faq-box bg-white shadow-md rounded-md p-4">
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__question flex justify-between items-center cursor-pointer ${getClassQuestion(
                  "q1"
                )}`}
              >
                <p className="text-gray-800 font-medium">
                  1. How do I find the right vehicle for my needs?
                </p>
                <IconChevronDown />
              </div>
              <div
                id="q1"
                className={`faq-box__answer mt-4 text-gray-600 ${getClassAnswer(
                  "q1"
                )}`}
              >
                DriveOps makes it easy! Use our advanced filters to browse by
                vehicle type, price, location, or features. Whether it’s a
                compact car for city travel or an SUV for family trips, we have
                you covered.
              </div>
            </div>

            <div className="faq-box bg-white shadow-md rounded-md p-4">
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__question flex justify-between items-center cursor-pointer ${getClassQuestion(
                  "q2"
                )}`}
              >
                <p className="text-gray-800 font-medium">
                  2. Are the vehicles well-maintained and reliable?
                </p>
                <IconChevronDown />
              </div>
              <div
                id="q2"
                className={`faq-box__answer mt-4 text-gray-600 ${getClassAnswer(
                  "q2"
                )}`}
              >
                Absolutely! All vehicles listed on DriveOps are thoroughly
                inspected, regularly serviced, and maintained to the highest
                standards by trusted rental providers.
              </div>
            </div>

            <div className="faq-box bg-white shadow-md rounded-md p-4">
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__question flex justify-between items-center cursor-pointer ${getClassQuestion(
                  "q3"
                )}`}
              >
                <p className="text-gray-800 font-medium">
                  3. What payment options do you support?
                </p>
                <IconChevronDown />
              </div>
              <div
                id="q3"
                className={`faq-box__answer mt-4 text-gray-600 ${getClassAnswer(
                  "q3"
                )}`}
              >
                DriveOps supports secure payments via major credit/debit cards
                and Stripe. Your financial security is our top priority, with
                encrypted transactions for peace of mind.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
