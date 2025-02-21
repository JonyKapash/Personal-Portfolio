"use client";

import { Card } from "@/components/Card";
import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setIsExpanded(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <Card
          className={`
          p-8 px-10 text-center md:text-left 
          bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900
          transition-all duration-[2000ms] ease-in-out relative
          ${isExpanded ? "h-[600px]" : "h-auto"}
        `}
        >
          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className={`
              absolute top-4 right-4 text-gray-900 hover:text-gray-700
              transition-all duration-[2000ms] ease-in-out z-20
              ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Initial content */}
          <div
            className={`
            transition-all duration-[2000ms] ease-in-out
            ${
              isExpanded
                ? "opacity-0 scale-95 blur-sm"
                : "opacity-100 scale-100 blur-0"
            }
          `}
          >
            {isSubmitted ? (
              <>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Thanks for reaching out!
                </h2>
                <p className="font-serif md:text-base mt-2">
                  We will talk soon 🎉
                </p>
              </>
            ) : (
              <>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s create something together
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let&apos;s connect
                  and discuss how I can help you achieve your goals.
                </p>
              </>
            )}
          </div>

          {/* Contact Button */}
          <div
            className={`
            mt-8 transition-all duration-[2000ms] ease-in-out
            ${
              isExpanded || isSubmitted
                ? "opacity-0 pointer-events-none blur-sm"
                : "opacity-100 blur-0"
            }
          `}
          >
            <button
              onClick={handleExpand}
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>

          {/* Contact Form */}
          <div
            className={`
            absolute inset-0 flex items-center justify-center px-8
            transition-all duration-[2000ms] ease-in-out
            ${
              isExpanded
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-95 pointer-events-none blur-sm"
            }
          `}
          >
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-xl border-0 
                    bg-gray-900 text-white placeholder-gray-400
                    focus:ring-2 focus:ring-white/20 
                    transition-all duration-300
                    px-4 py-3 text-base"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-xl border-0 
                    bg-gray-900 text-white placeholder-gray-400
                    focus:ring-2 focus:ring-white/20 
                    transition-all duration-300
                    px-4 py-3 text-base"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-xl border-0 
                    bg-gray-900 text-white placeholder-gray-400
                    focus:ring-2 focus:ring-white/20 
                    transition-all duration-300
                    px-4 py-3 text-base"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-gray-900 inline-flex items-center 
                    px-6 h-12 rounded-xl gap-2 w-max border border-gray-900
                    hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="font-semibold">Send Message</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};
