import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <Card className="p-8 px-10 text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
