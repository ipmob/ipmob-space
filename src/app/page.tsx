"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="ipmob logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-gradient">ipmob.space</h1>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("founder")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection("early-access")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Early Access
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-left"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("founder")}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-left"
              >
                Founder
              </button>
              <button
                onClick={() => scrollToSection("early-access")}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-left"
              >
                Early Access
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            ipmob.space
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            AI-powered document intelligence platform that transforms complex
            files into interactive, queryable knowledge bases
          </p>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 animate-fade-in animation-delay-400">
            Your private Perplexity for internal documents
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-600"
          >
            Learn More
          </button>
        </div>
      </section>

      <section
        id="about"
        className="py-20 md:py-32 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Intelligent Document Processing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-16">
            ipmob.space helps teams extract, understand, and interact with
            complex documents through an AI-powered chat interface. Perfect for
            contracts, policies, research papers, and technical documentation -
            with enterprise-grade privacy and security.
          </p>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-16">
            Currently in stealth mode, actively building and onboarding early
            users for our private beta.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Q&A</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Chat with your documents naturally
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Privacy First</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Your documents never leave your infrastructure
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Structured Extraction
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Turn unstructured data into actionable insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Built for Document-Heavy Teams
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-12">
            {`We're solving the problem of information silos in organizations.
            Whether you're dealing with legal contracts, research papers, or
            technical documentation, ipmob makes your documents searchable,
            queryable, and actionable.`}
          </p>
          <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl p-12 text-center">
            <p className="text-xl font-semibold text-slate-500 dark:text-slate-400">
              Stealth Mode - Preview Coming Soon
            </p>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="py-20 md:py-32 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About the Founder
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
            {`ipmob.space is being built by a solo founder passionate about making
            document workflows intelligent and secure. With a focus on
            privacy-first AI solutions, we're creating tools that help teams
            unlock the knowledge trapped in their documents without compromising
            data security.`}
          </p>
          <p className="text-center">
            <span className="text-slate-600 dark:text-slate-300">
              Get in touch:{" "}
            </span>
            <a
              href="mailto:founder@ipmob.space"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              founder@ipmob.space
            </a>
          </p>
        </div>
      </section>

      <section
        id="early-access"
        className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-sky-600 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Private Beta
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12">
            {`We're selectively onboarding early users who work with
            document-intensive workflows. If you're interested in seeing how AI
            can transform your document processes, we'd love to hear from you.`}
          </p>
          <a
            href="mailto:founder@ipmob.space"
            className="inline-block bg-white text-blue-600 hover:bg-slate-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">
            © 2025 ipmob.space - Built with ❤️ for document intelligence
          </p>
          <p className="text-slate-400 mb-2">
            Contact:{" "}
            <a
              href="mailto:founder@ipmob.space"
              className="text-blue-400 hover:text-blue-300"
            >
              founder@ipmob.space
            </a>
          </p>
          <p className="text-slate-500 text-sm">
            Currently in stealth development
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </>
  );
}