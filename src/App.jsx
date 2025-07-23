import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import './App.css';

const { FiPlay, FiCheck, FiStar, FiShield, FiHeart, FiArrowRight, FiMail, FiPhone, FiMapPin } = FiIcons;

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: FiShield,
      title: "Interactive Medal Display",
      description: "Each medal tells a story of courage and dedication"
    },
    {
      icon: FiHeart,
      title: "Timeline of Service",
      description: "A chronological journey through their military career"
    },
    {
      icon: FiStar,
      title: "Career Media Wall",
      description: "Photos, documents, and memories beautifully curated"
    },
    {
      icon: FiMail,
      title: "Guestbook of Gratitude",
      description: "Family and friends can leave lasting messages"
    },
    {
      icon: FiPlay,
      title: "Letters of Impact",
      description: "Preserve the most meaningful correspondence"
    },
    {
      icon: FiHeart,
      title: "Family Tribute Section",
      description: "Dedicated space for loved ones' memories"
    },
    {
      icon: FiShield,
      title: "Admin Access",
      description: "Easy updates and additions over time"
    },
    {
      icon: FiStar,
      title: "Voice Memories",
      description: "Optional audio recordings to bring stories to life"
    }
  ];

  const packages = [
    {
      name: "Basic Tribute",
      price: "$199",
      description: "Ready-made site with your photos & text",
      features: [
        "Custom military tribute website",
        "Photo gallery integration",
        "Basic service timeline",
        "Mobile-responsive design",
        "1-year hosting included"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Signature Tribute",
      price: "$699",
      description: "We customize it for you + private admin access",
      features: [
        "Everything in Basic Tribute",
        "Custom design consultation",
        "Private admin dashboard",
        "Interactive medal display",
        "Guestbook functionality",
        "Priority support",
        "3-year hosting included"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Legendary Tribute",
      price: "$1,500+",
      description: "Done-for-you storytelling, voice overlays, lifetime hosting",
      features: [
        "Everything in Signature Tribute",
        "Professional storytelling service",
        "Voice overlay integration",
        "Custom animations",
        "Lifetime hosting",
        "White-glove setup",
        "Unlimited updates first year"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The Digital Shadowbox brought my dad to tears.",
      author: "Sarah M., Gold Star Daughter"
    },
    {
      quote: "Every medal now has a voice. It means more than we imagined.",
      author: "Colonel James R., U.S. Army (Ret.)"
    },
    {
      quote: "We didn't know how to honor him... until this.",
      author: "The Johnson Family"
    }
  ];

  const faqs = [
    {
      question: "How do I upload content?",
      answer: "We provide a simple, secure portal where you can upload photos, documents, and stories. Our team guides you through every step."
    },
    {
      question: "What if I don't have all the stories yet?",
      answer: "No problem! You can start with what you have and add more content over time. The Digital Shadowbox grows with your memories."
    },
    {
      question: "Can I add to it over time?",
      answer: "Absolutely. Your Digital Shadowbox is designed to evolve. Add new photos, stories, and memories as they come to you."
    },
    {
      question: "Do I need a computer or can I use a phone?",
      answer: "You can use any device! Our platform is fully mobile-friendly, so you can manage your tribute from anywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(#fbbf24 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              What's Remembered<br />
              <span className="text-gold-400">Lives Forever</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Introducing the Digital Shadowbox
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A cinematic tribute to a lifetime of service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gold-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-colors flex items-center gap-2">
              Commission a Legacy
              <SafeIcon icon={FiArrowRight} />
            </button>
            <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-navy-900 transition-colors flex items-center gap-2">
              <SafeIcon icon={FiPlay} />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">
              More Than a Website — It's a <span className="text-gold-500">Living Legacy</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">
                  "Every ribbon. Every deployment. Every story."
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">
                  "Built to honor. Designed to endure."
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">
                  "Crafted with ceremony and pride."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">
              What's Inside Your <span className="text-gold-500">Digital Shadowbox</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="text-gold-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <blockquote className="text-2xl md:text-4xl font-serif mb-8 leading-relaxed">
              "His medals were just metal. Until we told the stories behind them."
            </blockquote>
            <p className="text-xl text-gray-300">
              Preserve the weight of their service — forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">
              Select Your <span className="text-gold-500">Tribute Tier</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-gold-400 relative' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gold-400 text-navy-900 px-4 py-1 rounded-b-lg text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-navy-900 mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-gold-500 mb-4">{pkg.price}</p>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <SafeIcon icon={FiCheck} className="text-gold-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gold-400 text-navy-900 hover:bg-gold-300'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}>
                    {pkg.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">
              Stories of <span className="text-gold-500">Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <div className="absolute top-0 left-8 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center transform -translate-y-4">
                  <SafeIcon icon={FiStar} className="text-navy-900 text-sm" />
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-navy-900 font-semibold not-italic">
                  — {testimonial.author}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mrake */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Why <span className="text-gold-400">Mrake</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Military-inspired design precision",
              "Emotionally rich, family-first storytelling",
              "Mobile-first + timeless look",
              "Secure and built to last"
            ].map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiShield} className="text-navy-900 text-2xl" />
                </div>
                <p className="text-lg font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">
              Frequently Asked <span className="text-gold-500">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Preserve Their Legacy — <span className="text-gold-400">Digitally, Forever</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Commission the most meaningful tribute they'll ever receive.
            </p>
            <button className="bg-gold-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-colors inline-flex items-center gap-2">
              Begin the Tribute
              <SafeIcon icon={FiArrowRight} />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Delivery time 5–10 business days depending on package
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif text-gold-400 mb-4">Mrake</h3>
              <p className="text-gray-400">
                Creating meaningful digital tributes for military families.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Shadowbox</li>
                <li>Officer Retirement Sites</li>
                <li>Commissioning Tributes</li>
                <li>Memorial Websites</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Setup Guide</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiMail} />
                  <span>support@mrake.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiPhone} />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mrake Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;