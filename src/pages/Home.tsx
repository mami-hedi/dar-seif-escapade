import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Waves, Sun, Coffee, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import heroImage from "@/assets/hero-main.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import landscapeImage from "@/assets/landscape.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage}
            alt="Dar Seif - Vue mer et montagne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Maison d'hôtes d'exception
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 leading-tight">
              Dar Seif
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre ciel et mer, découvrez un havre de paix où la nature et l'élégance 
              se rencontrent pour une expérience inoubliable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/rooms">
                  Nos Chambres
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Découvrir</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: "Vue Montagne",
                description: "Réveillez-vous face aux sommets majestueux et profitez d'un panorama à couper le souffle.",
              },
              {
                icon: Waves,
                title: "Vue Mer",
                description: "Laissez-vous bercer par le bleu de la Méditerranée visible depuis nos terrasses.",
              },
              {
                icon: Sun,
                title: "Sérénité",
                description: "Un cadre paisible et authentique pour vous ressourcer loin du quotidien.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card p-8 rounded-lg shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
                Bienvenue
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                Une maison d'exception entre mer et montagne
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Dar Seif vous accueille dans un cadre enchanteur où chaque détail a été pensé 
                pour votre confort. Perchée sur les hauteurs, notre maison d'hôtes offre 
                une vue panoramique exceptionnelle sur la mer Méditerranée et les montagnes environnantes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Vivez une expérience unique d'hospitalité tunisienne, où authenticité 
                et modernité se rencontrent pour créer des souvenirs inoubliables.
              </p>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/about">
                  En savoir plus
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={landscapeImage}
                  alt="Vue de Dar Seif"
                  className="rounded-lg shadow-elevated w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-medium">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-display text-2xl font-semibold">4.9</span>
                  </div>
                  <p className="text-sm opacity-90">Avis clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Hébergement"
            title="Nos chambres d'exception"
            description="Des espaces élégants et confortables, conçus pour votre bien-être avec une vue imprenable."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                image: room1,
                name: "Chambre Azur",
                description: "Vue mer panoramique, lit king size",
                price: "120",
              },
              {
                image: room2,
                name: "Chambre Montagne",
                description: "Vue montagne, terrasse privée",
                price: "100",
              },
            ].map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">
                      {room.price}€ <span className="text-muted-foreground font-normal text-sm">/ nuit</span>
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/rooms">Voir plus</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="elegant" size="lg" asChild>
              <Link to="/rooms">
                Voir toutes les chambres
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Services"
            title="Tout pour votre confort"
            description="Des prestations haut de gamme pour un séjour parfait."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Coffee, name: "Petit-déjeuner" },
              { icon: Waves, name: "Vue mer" },
              { icon: Mountain, name: "Randonnées" },
              { icon: MapPin, name: "Excursions" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium">{service.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              Réservez votre séjour
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Offrez-vous une pause bien méritée dans un cadre idyllique. 
              Contactez-nous pour réserver votre chambre.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
