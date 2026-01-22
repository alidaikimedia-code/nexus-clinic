'use client'

import { useState, useEffect } from 'react'
import {
  Menu, X, ArrowRight, Phone, MapPin, Clock,
  ChevronDown, MessageCircle, ShieldCheck, Award,
  CheckCircle2, Star, Microscope, Stethoscope, Sparkles,
  Zap, Heart, Scissors, UserCheck
} from 'lucide-react'
import Image from 'next/image'

const Instagram = ({ size }: { size: number }) => (
  <span
    style={{width: size, height: size}}
    className="block border-2 border-current rounded-lg relative after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-current after:rounded-full before:absolute before:inset-1 before:border-2 before:border-current before:rounded-full"
  />
)

const Facebook = ({ size }: { size: number }) => (
  <span
    style={{width: size, height: size}}
    className="block relative font-bold text-center leading-none"
  >
    f
  </span>
)

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    { quote: "They explained what I didn't need, which made me trust them more.", name: "Sean Ng", treatment: "Facial Rejuvenation" },
    { quote: "Finally found a clinic that listens first and recommends later.", name: "Priya Sharma", treatment: "Weight Loss Program" },
    { quote: "Natural results without looking overdone. Exactly what I wanted.", name: "Michelle Tan", treatment: "Dermal Fillers" },
    { quote: "The doctor took time to explain everything. No pressure at all.", name: "Ahmad Razak", treatment: "Hair Restoration" },
    { quote: "Professional team and amazing results. Highly recommend!", name: "Sarah Lim", treatment: "Skin Treatment" }
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Auto-slide testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(testimonialInterval)
    }
  }, [testimonials.length])

  const faqs = [
    { q: "What is an aesthetic clinic?", a: "An aesthetic clinic is a medical-led facility focused on enhancing appearance, skin health, and overall confidence through evidence-based, non-surgical medical aesthetic services. Treatments and programmes are overseen by licensed medical professionals." },
    { q: "What are aesthetic treatments?", a: "Aesthetic treatments are non-surgical medical procedures designed to improve skin quality, facial balance, and body contours. These treatments are personalised and typically performed under medical supervision following a consultation." },
    { q: "Is Nexus Clinic a medical aesthetic clinic?", a: "Yes. Nexus Clinic operates as a medical aesthetic clinic where consultations, treatment planning, and clinical procedures are overseen by qualified medical doctors in accordance with medical guidelines." },
    { q: "Does Nexus Clinic only sell weight loss products?", a: "No. Nexus Clinic does not operate as a product-only provider. We offer structured weight management programmes designed around individual needs rather than standalone product sales." },
    { q: "Does Nexus Clinic provide a medical weight loss programme?", a: "Yes. We offer a doctor-guided weight loss programme that focuses on medical assessment, lifestyle guidance, and clinically supervised solutions tailored to each individual." },
    { q: "Do you offer WhatsApp support for enquiries?", a: "Yes. We provide dedicated WhatsApp support for enquiries, appointment scheduling, and general assistance during business hours to ensure fast and convenient communication." },
    { q: "How can I book an appointment with your clinic?", a: "Appointments can be booked via WhatsApp, phone call, or through our website contact form. Our team will confirm your slot and guide you through the next steps." },
    { q: "Is the clinic doctor-led?", a: "Yes. Our clinic operates under licensed medical doctors who oversee consultations, treatment planning, and clinical protocols to ensure safety and professional standards." },
    { q: "Where is your clinic located and is parking available?", a: "Our clinic is centrally located and easily accessible. Parking options are available nearby, and our team can assist with directions before your visit." },
    { q: "What languages does your team speak?", a: "Our team is multilingual and commonly assists patients in English, Malay, and Mandarin to ensure clear communication and comfort." },
    { q: "Is consultation required before proceeding?", a: "Yes. Every patient begins with a professional consultation to understand goals, medical background, and suitability before any procedure is considered." },
    { q: "Do you accept walk-ins or is booking required?", a: "We recommend booking in advance to avoid waiting time. Walk-ins are subject to availability on the day." },
    { q: "How do you ensure patient privacy and confidentiality?", a: "We strictly follow medical confidentiality standards. All consultations, records, and communications are handled securely and discreetly." },
    { q: "Are your products and equipment medically approved?", a: "Yes. We only use clinically approved products and medical-grade equipment that comply with regulatory and safety standards." },
    { q: "How can I contact the clinic after my visit?", a: "You may reach us via WhatsApp or phone for follow-up questions or general support. Our team remains accessible to ensure a smooth patient experience." }
  ]

  const servicesList = [
    "Fractional Laser", "Dermaroller", "Medlite C6 Laser", "Platelet Rich Plasma (PRP)",
    "Venus Freeze", "MesoLipo Fat Melting Injections", "Zeltiq Coolsculpting", "HCG Weight Loss Program",
    "Nexus Hair Implantation", "Female Laser Rejuvenation", "Tattoo Removal", "Dermal Fillers",
    "Skin Peel", "Non Surgical Threadlift", "Ion Magnum", "Candela Gentle YAG Laser"
  ]

  return (
    <div className="bg-nexus-light font-body">

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-nexus-primary/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#">
            <Image
              src="/logo_nexus1-1.webp"
              alt="Nexus Clinic"
              width={150}
              height={40}
              className="brightness-0"
            />
          </a>

          <nav className="hidden lg:flex gap-10 text-[11px] uppercase tracking-ultra font-bold text-nexus-primary/70">
            <a href="#about" className="hover:text-nexus-primary transition-colors">About</a>
            <a href="#treatments" className="hover:text-nexus-primary transition-colors">Treatments</a>
            <a href="#weight-loss" className="hover:text-nexus-primary transition-colors">Weight Loss</a>
            <a href="#faq" className="hover:text-nexus-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-nexus-primary transition-colors">Contact</a>
          </nav>

          <a href="#contact" className="hidden md:flex items-center gap-2 border border-nexus-primary px-6 py-2.5 font-heading text-[10px] uppercase tracking-ultra font-bold hover:bg-nexus-primary hover:text-white transition-all duration-500">
            Book Assessment
          </a>

          <button className="lg:hidden text-nexus-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 animate-fadeIn">
          {['About', 'Treatments', 'Weight Loss', 'FAQ', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-3xl font-heading uppercase tracking-ultra font-bold text-nexus-primary" onClick={() => setIsMenuOpen(false)}>{link}</a>
          ))}
          <a href="#contact" className="bg-nexus-primary text-white px-10 py-4 font-heading uppercase tracking-ultra font-bold" onClick={() => setIsMenuOpen(false)}>Book Assessment</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 min-h-[80vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-nexus-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-nexus-primary"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-nexus-primary">MOH Accredited Clinic</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[62px] leading-[0.9] tracking-tight font-medium text-nexus-primary uppercase mb-8">
              Advanced Aesthetic <br />
              <span className="font-light italic text-nexus-primary/70">& Medical Weight Loss</span>
            </h1>

            <p className="text-lg lg:text-xl font-light text-nexus-primary/80 max-w-lg leading-relaxed mb-10">
              Ministry of Health (MOH) registered and compliant. Doctor-led. Non-surgical, results-focused care for face, skin, hair, and body in Kuala Lumpur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact" className="flex justify-center items-center gap-3 bg-nexus-primary text-white px-8 py-5 rounded-full font-heading text-[11px] uppercase tracking-ultra font-bold hover:bg-nexus-dark transition-all">
                Book Your Assessment
              </a>
              <a href="#treatments" className="flex justify-center items-center gap-3 border border-nexus-primary/30 px-8 py-5 rounded-full font-heading text-[11px] uppercase tracking-ultra font-bold hover:border-nexus-primary transition-all">
                Explore Treatments
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-nexus-primary/10">
              <div>
                <div className="font-heading text-3xl font-bold">5,000+</div>
                <div className="text-[9px] uppercase tracking-widest font-bold opacity-40">Patients Treated</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold">15+ Yrs</div>
                <div className="text-[9px] uppercase tracking-widest font-bold opacity-40">Clinical Excellence</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold uppercase">FDA</div>
                <div className="text-[9px] uppercase tracking-widest font-bold opacity-40">Approved Collagen</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold">98%</div>
                <div className="text-[9px] uppercase tracking-widest font-bold opacity-40">Natural Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[75vh] relative overflow-hidden rounded-[4rem] reveal" style={{ transitionDelay: '200ms' }}>
            <Image
              src="/hero-clinic.png"
              alt="Nexus Clinic Reception"
              fill
              className="object-cover img-luxury"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-md p-10 max-w-sm m-8 rounded-[2rem] border border-nexus-primary/10 hidden md:block">
              <p className="font-heading text-lg leading-tight mb-3 text-nexus-primary uppercase">Doctor-guided excellence</p>
              <p className="text-xs font-light text-nexus-primary/70 leading-relaxed">&quot;Every plan starts with an assessment, not a sales pitch, so you understand what you actually need before you commit.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nexus */}
      <section id="about" className="py-24 bg-nexus-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <span className="text-nexus-gold font-heading text-xs uppercase tracking-[0.3em] mb-4 block">Our Approach</span>
              <h2 className="font-heading text-4xl lg:text-6xl tracking-tight mb-6 lg:mb-8 leading-none uppercase">Why Nexus Clinic <br /><span className="italic font-light">Kuala Lumpur</span></h2>
              <p className="text-white/80 font-light leading-relaxed mb-4 lg:mb-8 text-base lg:text-lg">
                Nexus Clinic is a medical aesthetic clinic, not a beauty salon. Our approach is doctor-first and diagnosis-driven. We prioritise safety, facial harmony, and long-term skin health over short-term trends.
              </p>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-[2.5rem] group">
                <div className="w-12 h-12 rounded-full border border-nexus-gold/30 flex items-center justify-center mb-6 text-nexus-gold group-hover:bg-nexus-gold group-hover:text-white transition-all">
                  <Stethoscope size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3 tracking-widest uppercase">Doctor-led care</h3>
                <p className="text-sm font-light text-white/60">Injectables and prescriptions are assessed and performed by doctors, ensuring medical safety.</p>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-[2.5rem] group">
                <div className="w-12 h-12 rounded-full border border-nexus-gold/30 flex items-center justify-center mb-6 text-nexus-gold group-hover:bg-nexus-gold group-hover:text-white transition-all">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3 tracking-widest uppercase">MOH-registered clinic</h3>
                <p className="text-sm font-light text-white/60">Fully registered and compliant with Ministry of Health Malaysia guidelines for medical care.</p>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-[2.5rem] group">
                <div className="w-12 h-12 rounded-full border border-nexus-gold/30 flex items-center justify-center mb-6 text-nexus-gold group-hover:bg-nexus-gold group-hover:text-white transition-all">
                  <Microscope size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3 tracking-widest uppercase">Evidence-based planning</h3>
                <p className="text-sm font-light text-white/60">Our team follows conservative dosing and ethical patient selection. We only recommend what is suitable.</p>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-[2.5rem] group">
                <div className="w-12 h-12 rounded-full border border-nexus-gold/30 flex items-center justify-center mb-6 text-nexus-gold group-hover:bg-nexus-gold group-hover:text-white transition-all">
                  <Heart size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3 tracking-widest uppercase">Natural Harmony</h3>
                <p className="text-sm font-light text-white/60">We focus on long-term skin health and natural results that enhance your existing features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Treatments - Bento Grid Redesign */}
      <section id="treatments" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-xs uppercase tracking-ultra text-nexus-primary/40 mb-3 block">Expert Solutions</span>
          <h2 className="font-heading text-5xl lg:text-7xl tracking-tight mb-8 uppercase font-bold text-nexus-primary leading-none">Our Specialized <br /><span className="italic font-light">Treatments</span></h2>
          <p className="text-nexus-primary/60 font-light text-lg">Medically guided solutions for Face, Body, and Hair. Personalized for your unique anatomy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">

            {/* Card 1: Face (Wide) */}
            <div className="lg:col-span-2 group relative overflow-hidden bg-white rounded-[3rem] p-12 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-700 reveal">
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-nexus-light rounded-2xl flex items-center justify-center text-nexus-primary mb-8">
                      <Zap size={28} />
                    </div>
                    <h3 className="font-heading text-4xl mb-4 uppercase text-nexus-primary">Facial & Anti-Aging</h3>
                    <p className="text-nexus-primary/60 max-w-md font-light mb-8 text-lg">Restore balance, not freeze expressions. Specialized in Botox, Fillers, Sculptra, and HIFU.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-nexus-primary/80"><CheckCircle2 size={16} className="text-nexus-gold" /> Botox (Wrinkles & Slimming)</li>
                        <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-nexus-primary/80"><CheckCircle2 size={16} className="text-nexus-gold" /> Dermal Fillers (Cheek, Chin, Jaw)</li>
                        <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-nexus-primary/80"><CheckCircle2 size={16} className="text-nexus-gold" /> Sculptra Collagen Stimulation</li>
                        <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-nexus-primary/80"><CheckCircle2 size={16} className="text-nexus-gold" /> Laser for Acne & Pigmentation</li>
                    </ul>
                    <a href="#contact" className="inline-flex items-center gap-3 font-heading text-[11px] uppercase tracking-ultra font-bold text-nexus-primary border-b border-nexus-primary pb-1 hover:gap-6 transition-all">View Facial Treatments <ArrowRight size={14} /></a>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                  alt="Face"
                  fill
                  className="absolute right-0 top-0 object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-multiply pointer-events-none"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
            </div>

            {/* Card 2: Weight (Tall) */}
            <div id="weight-loss" className="bg-nexus-primary text-white p-12 flex flex-col justify-between rounded-[3rem] group reveal" style={{ transitionDelay: '150ms' }}>
                <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                      <Heart size={28} />
                    </div>
                    <h3 className="font-heading text-3xl mb-4 uppercase">Medical Weight Loss</h3>
                    <p className="text-white/70 font-light text-sm leading-relaxed mb-8">Science-backed programs including Ozempic, Mounjaro, and CoolSculpting fat reduction.</p>
                    <ul className="space-y-4 text-xs font-bold tracking-widest uppercase text-white/60 mb-10">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-nexus-gold rounded-full"></span> Ozempic (Semaglutide)</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-nexus-gold rounded-full"></span> Mounjaro (Tirzepatide)</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-nexus-gold rounded-full"></span> HCG Medical Programmes</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-nexus-gold rounded-full"></span> CoolSculpting Fat Reduction</li>
                    </ul>
                </div>
                <a href="#contact" className="flex items-center gap-2 font-heading text-[11px] uppercase tracking-ultra font-bold text-nexus-gold group-hover:gap-4 transition-all">Explore Programs <ArrowRight size={14} /></a>
            </div>

            {/* Card 3: Hair (Square) */}
            <div className="bg-white border border-nexus-primary/5 p-12 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 rounded-[3rem] reveal" style={{ transitionDelay: '300ms' }}>
                <div>
                    <div className="w-14 h-14 bg-nexus-light rounded-2xl flex items-center justify-center text-nexus-primary mb-8">
                      <Scissors size={28} />
                    </div>
                    <h3 className="font-heading text-3xl mb-4 uppercase text-nexus-primary">Hair Restoration</h3>
                    <p className="text-nexus-primary/60 font-light text-sm leading-relaxed mb-8">Medical-grade PRP and mesotherapy for thinning hair and scalp rejuvenation. Addressing hormonal and genetic factors.</p>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-nexus-gold">Featured Services:</p>
                       <p className="text-xs font-medium text-nexus-primary/80">PRP / Hair Keratin / Mesotherapy</p>
                    </div>
                </div>
                <a href="#contact" className="inline-block border-b border-nexus-primary/20 pb-1 font-heading text-[11px] uppercase tracking-ultra font-bold text-nexus-primary hover:border-nexus-primary transition-colors self-start">Hair Solutions</a>
            </div>

            {/* Card 4: Skin/Regenerative (Wide) */}
            <div className="lg:col-span-2 bg-white border border-nexus-primary/10 p-12 flex flex-col md:flex-row gap-12 items-center group rounded-[3rem] reveal" style={{ transitionDelay: '450ms' }}>
                <div className="flex-1">
                    <div className="w-14 h-14 bg-nexus-light rounded-2xl flex items-center justify-center text-nexus-primary mb-8">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="font-heading text-3xl mb-4 uppercase text-nexus-primary">Regenerative Skin</h3>
                    <p className="text-nexus-primary/60 font-light text-sm leading-relaxed mb-8">
                        Natural rejuvenation focuses on repairing tissue quality, not just adding volume. Our doctors offer treatments that activate the body&apos;s own repair mechanisms.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-bold tracking-ultra uppercase opacity-80 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-nexus-gold rounded-full"></span>
                            <span>PRP Rejuvenation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-nexus-gold rounded-full"></span>
                            <span>Stem Cell-based</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-nexus-gold rounded-full"></span>
                            <span>Acne Scar Repair</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-nexus-gold rounded-full"></span>
                            <span>Pico Laser</span>
                        </div>
                    </div>
                    <a href="#contact" className="font-heading text-[11px] uppercase tracking-ultra font-bold text-nexus-gold hover:text-nexus-primary transition-colors">Check Suitability</a>
                </div>
                <div className="w-full md:w-2/5 h-64 md:h-80 relative overflow-hidden rounded-[2rem]">
                    <Image
                      src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2071&auto=format&fit=crop"
                      alt="Regenerative Medicine"
                      fill
                      className="object-cover img-luxury grayscale group-hover:grayscale-0 transition-all duration-1000"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
            </div>

        </div>
      </section>

      {/* Regenerative Text Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <div className="reveal">
              <span className="text-[11px] uppercase tracking-ultra text-nexus-gold font-bold mb-4 block">Advanced Science</span>
              <h2 className="font-heading text-4xl lg:text-6xl font-bold uppercase mb-8 leading-none">Tissue Repair <br /><span className="italic font-light text-nexus-primary">Technology</span></h2>
              <p className="text-nexus-primary/70 font-light leading-relaxed mb-6 text-lg">
                Natural rejuvenation focuses on repairing tissue quality, not just adding volume or freezing movement. At Nexus Clinic, our doctors offer regenerative treatments that activate the body&apos;s own repair mechanisms to support healthier skin, hair, and scalp over time.
              </p>
              <div className="bg-nexus-light p-10 border-l-4 border-nexus-primary rounded-r-[2rem] mb-8">
                 <p className="text-sm italic font-body text-nexus-primary leading-relaxed">
                   &quot;This approach aligns with evidence-based medical understanding described by leading institutions such as the Mayo Clinic, where procedures like medical laser resurfacing work by creating controlled thermal effects that stimulate the skin&apos;s natural healing response and collagen production.&quot;
                 </p>
              </div>
              <p className="text-nexus-primary/60 font-light mb-10 leading-relaxed">
                These treatments are suited for patients seeking gradual improvement in skin texture, tone, elasticity, and hair quality, with minimal downtime and doctor-guided planning.
              </p>
           </div>
           <div className="reveal order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                alt="Lab Science"
                width={800}
                height={600}
                className="rounded-[4rem] luxury-shadow"
              />
           </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section id="results" className="pt-32 pb-12 bg-nexus-primary text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 reveal relative z-10">
              <Star className="mx-auto mb-10 text-nexus-gold fill-nexus-gold" size={44} />

              {/* Slider Container */}
              <div className="relative min-h-[200px] lg:min-h-[240px]">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ${activeTestimonial === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    <blockquote className="font-heading text-3xl lg:text-6xl font-light leading-tight mb-6">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="h-0.5 w-16 bg-nexus-gold mx-auto mb-4"></div>
                    <cite className="not-italic text-[11px] uppercase tracking-ultra font-bold text-white block mb-1">— {testimonial.name}</cite>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">{testimonial.treatment}</div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-nexus-gold w-8' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <ChevronDown className="rotate-90" size={20} />
                </button>
                <button
                  onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <ChevronDown className="-rotate-90" size={20} />
                </button>
              </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
            <div className="font-heading text-[25vw] font-bold leading-none uppercase">REVIEWS</div>
          </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-12 pb-32 bg-nexus-primary relative">
          <div className="max-w-6xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-16 reveal">
                <span className="text-nexus-gold font-heading text-xs uppercase tracking-widest mb-4 block">Got Questions?</span>
                <h2 className="font-heading text-4xl lg:text-6xl font-bold uppercase text-white">Frequently Asked <br /><span className="italic font-light text-white/70">Questions</span></h2>
              </div>

              {/* FAQ Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                      style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                        <button
                          className="w-full p-6 text-left"
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4">
                                <span className="text-nexus-gold font-heading text-lg font-bold mt-0.5">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-white font-medium text-base leading-snug">
                                  {faq.q}
                                </h3>
                              </div>
                              <div className={`text-nexus-gold transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                                <ChevronDown size={20} />
                              </div>
                            </div>

                            {activeFaq === idx && (
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-white/60 text-sm leading-relaxed pl-10">
                                  {faq.a}
                                </p>
                              </div>
                            )}
                        </button>
                    </div>
                  ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-16 reveal">
                <p className="text-white/40 text-sm mb-6">Still have questions?</p>
                <a href="#contact" className="inline-flex items-center gap-3 bg-nexus-gold text-nexus-primary px-8 py-4 rounded-full font-heading text-[11px] uppercase tracking-widest font-bold hover:bg-white transition-all duration-300">
                  Contact Our Team <ArrowRight size={14} />
                </a>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-nexus-light py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="reveal">
              <span className="text-[11px] uppercase tracking-ultra text-nexus-gold font-bold mb-6 block">Inquiry & Visit</span>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold uppercase text-nexus-primary mb-12">Visit Our <br /><span className="italic font-light">Kuala Lumpur Center</span></h2>

              <div className="space-y-16">
                 <div>
                    <h3 className="font-heading text-xl uppercase tracking-widest text-nexus-primary mb-6">Nexus Clinic Kuala Lumpur</h3>
                    <address className="not-italic text-nexus-primary/70 font-light text-lg leading-relaxed mb-8 flex gap-4">
                       <MapPin className="shrink-0 text-nexus-gold mt-1" size={24} />
                       LG 10, Lower Ground Floor, Wisma UOA II, <br />Jalan Pinang, 50450 Kuala Lumpur, Malaysia.
                    </address>

                    <div className="space-y-4 pt-4 border-t border-nexus-primary/10">
                       <div className="flex items-center gap-4 text-nexus-primary font-heading text-[11px] uppercase tracking-ultra font-bold">
                          <Phone size={16} className="text-nexus-gold" /> 016-702 5699 / 03-2163 5699
                       </div>
                       <div className="flex items-center gap-4 text-nexus-primary font-heading text-[11px] uppercase tracking-ultra font-bold">
                          <MessageCircle size={16} className="text-nexus-gold" /> WA: +016-921 5699
                       </div>
                       <div className="flex items-center gap-4 text-nexus-primary font-heading text-[11px] uppercase tracking-ultra font-bold">
                          <Clock size={16} className="text-nexus-gold" /> Mon-Sat: 9:00am - 6:00pm
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-nexus-primary/10">
                    <h3 className="font-heading text-xl uppercase tracking-widest text-nexus-primary mb-4">Wellness Clinic</h3>
                    <p className="text-nexus-primary/50 text-xs font-light tracking-widest leading-relaxed">
                       Address: LG 9, Lower Ground Floor, Wisma UOA 2, Jalan Pinang, Kuala Lumpur, 50450
                    </p>
                 </div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-20 rounded-[4rem] luxury-shadow reveal">
              <h3 className="font-heading text-3xl font-bold uppercase text-nexus-primary mb-4">Request Consultation</h3>
              <p className="text-nexus-primary/40 text-sm mb-12 font-light">Confidential, professional, and personalized services for your aesthetic needs.</p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-ultra opacity-40">Full Name</label>
                     <input type="text" className="w-full bg-transparent border-b border-nexus-primary/10 py-4 font-heading text-[10px] uppercase tracking-ultra outline-none focus:border-nexus-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-ultra opacity-40">Email Address</label>
                     <input type="email" className="w-full bg-transparent border-b border-nexus-primary/10 py-4 font-heading text-[10px] uppercase tracking-ultra outline-none focus:border-nexus-gold transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-ultra opacity-40">Select Treatment</label>
                   <div className="relative">
                      <select className="w-full bg-transparent border-b border-nexus-primary/10 py-4 font-heading text-[10px] uppercase tracking-ultra outline-none focus:border-nexus-gold appearance-none cursor-pointer">
                        <option>General Aesthetic Consultation</option>
                        <option>Medical Weight Loss Program</option>
                        <option>Facial Rejuvenation (Botox/Fillers)</option>
                        <option>Skin/Acne Repair Plan</option>
                        <option>Hair Restoration Consultation</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-ultra opacity-40">Message</label>
                   <textarea rows={3} className="w-full bg-transparent border-b border-nexus-primary/10 py-4 font-heading text-[10px] uppercase tracking-ultra outline-none focus:border-nexus-gold resize-none transition-colors"></textarea>
                </div>

                <button type="button" className="w-full bg-nexus-primary text-white py-6 rounded-2xl font-heading text-[12px] uppercase tracking-ultra font-bold hover:bg-black transition-all duration-500">
                  Submit Assessment Request
                </button>
                <div className="flex items-center justify-center gap-2 opacity-30">
                  <UserCheck size={14} />
                  <span className="text-[9px] uppercase tracking-widest">Medical Confidentiality Guaranteed</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nexus-dark text-white/40 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <a href="#" className="mb-8 block">
                <Image
                  src="/logo_nexus1-1.webp"
                  alt="Nexus Clinic"
                  width={180}
                  height={50}
                />
              </a>
              <p className="max-w-md font-body text-sm font-light leading-relaxed mb-10">
                Founded in 2001, Nexus Clinic is a top-notch aesthetic center, providing a comprehensive range of non-surgical aesthetic procedures and advanced laser treatments. We serve our clients&apos; needs with confidential, professional and personalized medical aesthetic services.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-nexus-primary transition-all"><Instagram size={20} /></a>
                 <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-nexus-primary transition-all"><Facebook size={20} /></a>
              </div>
            </div>

            <div className="lg:col-span-2">
               <h4 className="font-heading text-white text-sm uppercase tracking-wide font-bold mb-10">Medical Aesthetic Services</h4>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                  {servicesList.map(s => (
                    <a key={s} href="#" className="font-body text-[11px] uppercase tracking-wide font-medium hover:text-white transition-colors">{s}</a>
                  ))}
               </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wide">
            <p className="font-body">&copy; 2024 Nexus Clinic Kuala Lumpur. All Rights Reserved.</p>
            <div className="flex gap-10 mt-6 md:mt-0 font-body">
               <a href="#" className="hover:text-white transition-colors">Privacy & Records</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">Medical Disclosure</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/60167025699"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[110] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce hover:animate-none flex items-center justify-center"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  )
}
