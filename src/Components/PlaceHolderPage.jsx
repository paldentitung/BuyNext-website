import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";
const PlaceHolderPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { mode } = useContext(ModeToggleContext);

  // Function to title case the page name
  const titleCase = (str) => {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Detailed page content
  const pageContent = {
    marketing: `
Welcome to our Marketing page! Here we share all our strategies, campaigns, and tips
for promoting products effectively. Our marketing team focuses on understanding customer
behavior, analyzing trends, and using innovative methods to reach the right audience.
Explore case studies, examples, and best practices that can help your business grow
through modern marketing techniques like social media campaigns, email marketing, and SEO.
    `,
    analytics: `
Analytics page: Dive deep into the data that drives our business. Here you will find
detailed reports, charts, and insights about user behavior, product performance, and
market trends. Learn how to make data-driven decisions, track KPIs, and optimize your
strategies using analytics tools.
    `,
    automation: `
Automation page: Discover how automation can save time and reduce errors in your
workflows. From email automation to process automation in sales and operations,
we cover tools and techniques to streamline repetitive tasks. Learn how to set up
triggers, rules, and bots to improve efficiency and productivity.
    `,
    commerce: `
Commerce page: Explore our e-commerce solutions, payment integrations, and strategies
for maximizing sales. Learn about optimizing checkout flows, inventory management,
and customer retention strategies. We also provide tips for scaling your online store
and improving customer experience.
    `,
    insights: `
Insights page: Stay updated with industry news, trends, and expert opinions. Our
insights section shares detailed articles, research findings, and commentary to help
you make informed decisions. Learn from case studies and market analyses that highlight
emerging opportunities.
    `,
    about: `
About us: Learn more about our company's mission, values, and team. We are committed
to providing top-quality services and products. Discover our history, vision for the
future, and the people who make everything possible.
    `,
    blog: `
Blog page: Read our latest articles covering topics from industry trends to practical
tips. Our blog includes tutorials, guides, interviews, and success stories to inspire
and educate our audience.
    `,
    contact: `
Contact page: Get in touch with us! You can reach out via email, phone, or our online
form. We are always happy to assist with questions, support requests, or feedback.
Our team strives to respond quickly and provide the help you need.
    `,
    press: `
Press page: Access our official press releases, media coverage, and company announcements.
We provide up-to-date information for journalists, partners, and the public.
    `,
    "terms-of-service": `
Terms of Service: Read the rules and guidelines for using our platform and services.
This includes user responsibilities, limitations of liability, and agreements regarding
content and interactions. Make sure you understand all terms before using our services.
    `,
    "privacy-policy": `
Privacy Policy: Learn how we collect, store, and protect your personal information.
We explain the types of data we gather, how it is used, and your rights regarding
privacy. Our goal is transparency and protecting your information.
    `,
    license: `
License information: Review the licenses for our software, content, and intellectual
property. This section provides legal details on usage rights, restrictions, and
permissions for our products.
    `,
    "submit-ticket": `
Submit a ticket: Need support? Submit a ticket to our support team for assistance.
Provide details about your issue, and we will respond promptly. Track the status of
your ticket and communicate with our team efficiently.
    `,
    documentation: `
Documentation: Access comprehensive guides, manuals, and references for our products
and services. This includes setup instructions, configuration guides, and troubleshooting
tips to help you get the most out of our offerings.
    `,
    guides: `
Guides: Follow step-by-step instructions to use our products or services effectively.
Our guides include screenshots, examples, and best practices to make learning easy
and fast. Perfect for beginners and advanced users alike.
    `,
  };

  const content = pageContent[page] || "This page is under construction.";

  return (
    <div
      className={`min-h-screen p-4 sm:p-8  flex flex-col items-center justify-start ${
        mode === "light" ? "bg-gray-50" : "bg-gray-900 text-white"
      }`}
    >
      <button
        className="text-blue-500 hover:text-blue-700 flex items-center gap-2 self-start px-4 py-2 rounded-md transition-colors duration-200 hover:cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="text-sm" /> Go back
      </button>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        {titleCase(page)}
      </h1>
      <div className="shadow-lg p-6 rounded-lg whitespace-pre-line w-full max-w-4xl text-center ">
        {content}
      </div>
    </div>
  );
};

export default PlaceHolderPage;
