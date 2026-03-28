/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { Calendar, Clock, MapPin, ShieldCheck, ChevronDown, ChevronUp, Instagram, Facebook, Twitter, Mail, Ticket, Users, Music, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date('2026-04-11T21:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setIsSticky(window.scrollY > heroRef.current.offsetHeight - 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is the dress code for JogjaPoolParty?",
      answer: "Think tropical chic! Swimwear is highly encouraged, but stylish summer outfits are also welcome. Please avoid heavy denim or formal wear. Locker facilities are available on-site."
    },
    {
      question: "Is there an age requirement?",
      answer: "Yes, this is an 18+ event. A valid government-issued ID (KTP/Passport) is mandatory for entry. No ID, no entry, no exceptions."
    },
    {
      question: "What happens if it rains?",
      answer: "JogjaPoolParty is a rain-or-shine event! We have covered VIP areas and the party continues regardless of the weather. Tickets are non-refundable."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Limited valet parking is available. We strongly recommend using ride-sharing services (Grab/Gojek) so you can enjoy the night responsibly."
    }
  ];

  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-navy text-white selection:bg-neon-cyan selection:text-dark-navy">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? 'bg-dark-navy/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-neon-cyan italic">
            JOGJA<span className="text-white">POOLPARTY</span>
          </div>
          <button 
            onClick={scrollToTickets}
            className="hidden md:block bg-neon-cyan text-dark-navy font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Buy Tickets
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920" 
            alt="Pool Party Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/20 via-transparent to-dark-navy"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-neon-magenta text-neon-magenta text-sm font-bold uppercase tracking-widest mb-6 animate-pulse">
              Saturday, April 11th, 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
              The Biggest <span className="text-neon-cyan text-glow-cyan">Aquatic</span> <br />
              Nightlife Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
              A fresh poolside experience in the heart of Yogyakarta. Where music, water, and people come together to create unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToTickets}
                className="w-full sm:w-auto bg-neon-cyan text-dark-navy text-xl font-black px-10 py-5 rounded-xl animate-pulse-neon hover:scale-105 transition-all uppercase tracking-tight"
              >
                Secure Your Spot Now
              </button>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                Come for the vibes, stay for the moments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* Event Briefing */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-8 h-8 text-neon-cyan mb-3" />
              <h3 className="font-bold text-lg">April 11, 2026</h3>
              <p className="text-sm text-gray-400">Save the Date</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-neon-magenta mb-3" />
              <h3 className="font-bold text-lg">21:00 - LATE</h3>
              <p className="text-sm text-gray-400">Non-stop Vibes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-neon-yellow mb-3" />
              <h3 className="font-bold text-lg">Dalam Agung Palagan 99</h3>
              <p className="text-sm text-gray-400">Hotel and Garden Resto, Yogyakarta</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-bold text-lg">18+ ONLY</h3>
              <p className="text-sm text-gray-400">Valid ID Required</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Lineup */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
            The <span className="text-neon-magenta text-glow-magenta">Lineup</span>
          </h2>
          <div className="h-1 w-24 bg-neon-magenta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "DJ SHANDO", role: "Male DJ • Main Stage Headliner", img: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800" },
            { name: "FDJ VICIA", role: "Female DJ • The Energy Queen", img: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=800" }
          ].map((artist, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img 
                src={artist.img} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">{artist.name}</h3>
                <p className="text-neon-cyan font-bold text-sm uppercase tracking-widest">{artist.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-dark-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-neon-cyan w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 italic">High-Energy Beats</h3>
              <p className="text-gray-400 font-medium">From deep house to explosive EDM, our headliners DJ Shando and FDJ Vicia will keep the energy peaking all night long.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-neon-magenta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-neon-magenta w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 italic">Exclusive Vibe</h3>
              <p className="text-gray-400 font-medium">Experience the most exclusive poolside takeover in Yogyakarta. Limited capacity ensures a premium, high-energy atmosphere.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-neon-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 italic">Premium Service</h3>
              <p className="text-gray-400 font-medium">Our VIP Sofa and Pendopo areas offer prime views and dedicated service for the ultimate party experience.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 bg-neon-cyan text-dark-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-10">Price Increase In:</h2>
          <div className="flex justify-center gap-4 md:gap-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-5xl md:text-8xl font-black tabular-nums">{String(item.value).padStart(2, '0')}</span>
                <span className="text-sm md:text-lg font-bold uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Hour Section */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
              Happy Hour <span className="text-neon-cyan">Promo</span>
            </h2>
            <p className="text-neon-magenta font-bold uppercase tracking-widest">Single Bottle Promo • Before 10 PM</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-navy/50 p-8 rounded-3xl border border-white/10 text-center">
              <div className="text-5xl font-black text-neon-cyan mb-4">550K</div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Selection A</p>
              <ul className="text-gray-300 space-y-2 text-sm font-medium">
                <li>Captain Morgan Spiced Gold</li>
                <li>Saccharum Spiced</li>
                <li>Gordon's (Pink & White)</li>
                <li>Gilbey's Gin</li>
                <li>Bacardi (White & Spiced)</li>
              </ul>
            </div>
            <div className="bg-dark-navy/50 p-8 rounded-3xl border-2 border-neon-magenta text-center transform md:scale-105">
              <div className="text-5xl font-black text-neon-magenta mb-4">750K</div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Selection B</p>
              <ul className="text-gray-300 space-y-2 text-sm font-medium">
                <li>JW Red Label</li>
                <li>Jack Daniels No. 7</li>
                <li>Batavia Whisky</li>
                <li>Jameson Irish Whisky</li>
              </ul>
            </div>
            <div className="bg-dark-navy/50 p-8 rounded-3xl border border-white/10 text-center">
              <div className="text-5xl font-black text-neon-yellow mb-4">899K+</div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Premium Selection</p>
              <ul className="text-gray-300 space-y-2 text-sm font-medium">
                <li>Chivas Regal 12YO</li>
                <li>Jack Daniels Honey</li>
                <li>Bombay Sapphire</li>
                <li>Jose Cuervo Gold</li>
                <li>Jagermeister</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="tickets" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
            Layout <span className="text-neon-yellow">Pricing</span>
          </h2>
          <p className="text-gray-400 font-medium">Choose your spot. Limited tables available per floor.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Sofa Area */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black uppercase">Sofa Area</h3>
              <span className="bg-neon-cyan text-dark-navy px-3 py-1 rounded-full text-xs font-black">1ST FLOOR</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">8 Pax Capacity • Prime View</p>
            <div className="text-3xl font-black mb-8 text-neon-cyan">Rp 1,300,000</div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm"><ShieldCheck className="w-5 h-5 text-neon-cyan" /> Minimum Charge Basis</li>
              <li className="flex items-center gap-3 text-sm"><ShieldCheck className="w-5 h-5 text-neon-cyan" /> Best Poolside View</li>
              <li className="flex items-center gap-3 text-sm"><ShieldCheck className="w-5 h-5 text-neon-cyan" /> Premium Service</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-white/10 font-bold hover:bg-white/20 transition-colors uppercase">Book Sofa</button>
          </div>

          {/* Pendopo Area */}
          <div className="relative bg-white/10 border-2 border-neon-magenta p-10 rounded-3xl flex flex-col shadow-2xl shadow-neon-magenta/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black uppercase">Pendopo</h3>
              <span className="bg-neon-magenta text-white px-3 py-1 rounded-full text-xs font-black">1ST FLOOR</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">8 Pax Capacity • Traditional Vibe</p>
            <div className="text-3xl font-black mb-8 text-neon-magenta">Rp 1,000,000</div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-neon-magenta" /> Minimum Charge Basis</li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-neon-magenta" /> Spacious Seating</li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-neon-magenta" /> Perfect for Large Groups</li>
            </ul>
            <button className="w-full py-5 rounded-xl bg-neon-magenta text-white font-black text-lg hover:scale-105 transition-transform uppercase tracking-tight">Book Pendopo</button>
          </div>

          {/* Other Tables */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-black mb-6 uppercase text-neon-yellow">Table Options</h3>
            <div className="space-y-6 flex-grow">
              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between font-bold">
                  <span>Long Table (8 Pax)</span>
                  <span className="text-neon-yellow">850K</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">1st Floor • Minimum Charge</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between font-bold">
                  <span>Short Table (4 Pax)</span>
                  <span className="text-neon-yellow">550K</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">1st & 2nd Floor • Minimum Charge</p>
              </div>
              <div className="pb-4">
                <div className="flex justify-between font-bold">
                  <span>Short Table (3 Pax)</span>
                  <span className="text-neon-yellow">400K</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">1st Floor • Minimum Charge</p>
              </div>
            </div>
            <button className="w-full py-4 rounded-xl bg-neon-yellow text-dark-navy font-bold hover:scale-105 transition-transform uppercase mt-8">Book Table</button>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">The <span className="text-neon-cyan">Vibe</span> Check</h2>
              <p className="text-gray-400 max-w-md">Take a look at what awaits you. This isn't just a party; it's a memory in the making.</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-neon-magenta">2,000+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Party People</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-cyan">12</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Performers</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600" alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden md:mt-8">
              <img src="https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=600" alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600" alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden md:mt-8">
              <img src="https://images.unsplash.com/photo-1516600164263-c7b814942bc5?auto=format&fit=crop&q=80&w=600" alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Got <span className="text-neon-magenta">Questions?</span></h2>
          <p className="text-gray-400">Everything you need to know before you dive in.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openFaq === i ? <ChevronUp className="text-neon-cyan" /> : <ChevronDown className="text-gray-500" />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-neon-cyan to-neon-magenta">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-dark-navy uppercase italic mb-8 leading-tight">
            Don't Be The One <br /> Hearing About It Later.
          </h2>
          <button 
            onClick={scrollToTickets}
            className="bg-dark-navy text-white text-2xl font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all shadow-2xl"
          >
            GET YOUR TICKETS NOW
          </button>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-24 bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">
                Find <span className="text-neon-yellow">Us</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-neon-yellow w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1 uppercase">Dalam Agung Palagan 99</h4>
                    <p className="text-gray-400">Hotel and Garden Resto</p>
                    <p className="text-gray-400">Jl. Palagan Tentara Pelajar No.99, Sariharjo, Ngaglik, Sleman, Yogyakarta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-neon-magenta w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-1 uppercase">Event Hours</h4>
                    <p className="text-gray-400">21:00 - LATE (Saturday, April 11th)</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="https://maps.google.com/?q=Dalam+Agung+Palagan+99+Yogyakarta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-neon-yellow text-dark-navy font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform uppercase tracking-tight"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="aspect-video bg-dark-navy rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=1200" 
                alt="Venue Location" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark-navy/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
                  <MapPin className="text-neon-yellow w-12 h-12 mx-auto mb-4 animate-bounce" />
                  <p className="font-black uppercase tracking-widest text-sm">Palagan 99, Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-3xl font-black tracking-tighter text-neon-cyan italic mb-6">
                JOGJA<span className="text-white">POOLPARTY</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Yogyakarta's premier aquatic nightlife event. Bringing together the best music, people, and vibes under the tropical night sky.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-dark-navy transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-dark-navy transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-dark-navy transition-all"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">The Lineup</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Tickets</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-neon-cyan" /> 
                  <a href="https://wa.me/62882007815208" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                    WhatsApp: +62 882 0078 15208
                  </a>
                </li>
                <li className="flex items-center gap-3"><Instagram size={18} className="text-neon-cyan" /> @JogjaPoolParty</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2026 JOGJA POOL PARTY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
