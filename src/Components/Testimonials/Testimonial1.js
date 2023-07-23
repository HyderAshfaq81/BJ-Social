// component is used to shoe the testominals in the app it consists of upper part that
//  has heading and the bottom part that has 3 cards in it and every card has its own data
import React from "react";

const Testimonial1 = () => {
  const topHeading = "Don't just take our words. Over 1000+ people trust us.";
  const testimonial1cards = [
    {
      title: `"As a small business owner, I've found the AI ad copy tool to be a game-changer. It's like having a professional copywriter on my team, but without the cost!" - Jane, Boutique Owner"`,
      author: "Bonnie Green",
      position: "Financial Advisor",
      logoImage:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/alterbone.svg",
      personImage:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      rotate: "xl:-rotate-2",
    },
    {
      title: `"I was skeptical about AI copywriting, but this tool blew me
                    away. The ad copy it generates is persuasive, engaging, and
                    perfectly tailored to my industry." - Carlos, Restaurant
                    Owner"`,
      author: "Lana Byrd",
      position: "Freelance Designer",
      logoImage:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/ridoria.svg",
      personImage:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      rotate: "xl:rotate-2",
    },
    {
      title: `"The AI ad copy tool has made my marketing efforts so much
                    more efficient. I love the A/B testing suggestions and the
                    SEO optimization features." - Lisa, Online Retailer"`,
      author: "Jese Leos",
      position: "E-Commerce Entrepreneur",
      logoImage:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/incanto.svg",
      personImage:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      rotate: "xl:-rotate-2",
    },
  ];
  return (
    <section className="w-full py-10 bg-white lg:py-14 xl:py-26">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* top header section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {topHeading}
          </h2>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-12 sm:mt-16 lg:max-w-none">
          {/* single card */}
          {testimonial1cards.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-gray-100 rounded-2xl ${item.rotate}`}
              >
                <div className="p-8">
                  <blockquote>
                    <p className="text-xl font-medium leading-9 text-gray-900">
                      {item.title}
                    </p>
                  </blockquote>
                  <p className="mt-6 text-base font-semibold text-gray-900">
                    {item.author}
                  </p>
                  <p className="mt-1 text-base font-normal text-gray-600">
                    {item.position}
                  </p>
                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                    <img
                      className="w-auto h-7"
                      src={item.logoImage}
                      alt="logo"
                    />
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={item.personImage}
                      alt="person"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
