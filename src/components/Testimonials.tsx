import { IconQuote } from "@tabler/icons-react";

import User1 from "../images/testimonials/user-1.webp";
import User2 from "../images/testimonials/user-2.webp";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="testimonials-content text-center">
          <div className="testimonials-content__title mb-8">
            <span className="text-primary font-semibold">
              What Our Customers Say
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Real Feedback, Real Experiences
            </h2>
            <p className="text-gray-600 mt-2">
              See how DriveOps has helped our customers enjoy a seamless car
              rental experience. We value every customer's opinion and strive to
              deliver excellence in every booking.
            </p>
          </div>

          <div className="all-testimonials grid gap-6 md:grid-cols-2">
            <div className="all-testimonials__box bg-white shadow-md rounded-md p-6">
              <span className="quotes-icon text-primary mb-4 inline-block">
                <IconQuote width={50} height={50} />
              </span>
              <p className="text-gray-700 italic">
                "The booking process was straightforward, and the car I rented
                was in top-notch condition. DriveOps made my trip smooth and
                stress-free."
              </p>
              <div className="all-testimonials__box__name mt-4 flex items-center">
                <img
                  src={User1}
                  alt="Kitonyo Kelvin"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h1 className="text-gray-800 font-semibold">
                    Kitonyo Kelvin
                  </h1>
                  <p className="text-gray-500 text-sm">Mombasa</p>
                </div>
              </div>
            </div>

            <div className="all-testimonials__box bg-white shadow-md rounded-md p-6">
              <span className="quotes-icon text-primary mb-4 inline-block">
                <IconQuote width={50} height={50} />
              </span>
              <p className="text-gray-700 italic">
                "DriveOps provided excellent service, and the car exceeded my
                expectations. I’ll definitely use their services again!"
              </p>
              <div className="all-testimonials__box__name mt-4 flex items-center">
                <img
                  src={User2}
                  alt="Marianne James"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h1 className="text-gray-800 font-semibold">
                    Marianne James
                  </h1>
                  <p className="text-gray-500 text-sm">Kisumu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
