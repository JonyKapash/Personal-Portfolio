import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Shoham Bar Natan",
    position: "Product Designer (UX/UI)",
    text: "Working with Yonatan was an absolute pleasure. He’s not just a highly skilled developer but also a true team player. Yonatan asks insightful questions, anticipates needs, and consistently delivers precise, high-quality results. His proactive approach and ability to think ahead make him a standout professional that any team would be lucky to have.",
    avatar: memojiAvatar4,
  },
  {
    name: "Rotem Kama",
    position: "Co-founder & CTO @ CYNC Secure",
    text: "Yonatan is one of those rare people who not only delivers great work but truly cares about what he’s building. He pays close attention to detail, always wants to learn and improve, and takes the time to understand the purpose behind his tasks. That mindset, combined with his technical skills, made him an essential part of our team.",
    avatar: memojiAvatar1,
  },
  {
    name: "Reut Katz",
    position: "Full-stack Developer",
    text: "I had the pleasure of working with Yonatan, and he is an exceptional professional and team player. His technical expertise, creative problem-solving skills, and dedication to delivering high-quality work are truly impressive. Yonatan's friendly and approachable fosters collaboration and positivity, making him a joy to work with.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What Clients Say About Me"
          eyebrow="Happy Clients"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div>
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
