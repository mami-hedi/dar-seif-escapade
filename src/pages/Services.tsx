import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Coffee,
  Wifi,
  Car,
  Mountain,
  Waves,
  Sun,
  MapPin,
  Utensils,
  Compass,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import breakfastImage from "@/assets/breakfast.jpg";
import loungeImage from "@/assets/lounge.jpg";
import landscapeImage from "@/assets/landscape.jpg";

const mainServices = [
  {
    icon: Coffee,
    title: "Petit-déjeuner",
    description: "Savourez un petit-déjeuner généreux préparé avec des produits frais et locaux. Servi sur notre terrasse avec vue sur la mer.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi gratuit",
    description: "Restez connecté avec notre Wi-Fi haut débit disponible dans toute la maison et sur les terrasses.",
  },
  {
    icon: Car,
    title: "Parking privé",
    description: "Stationnement gratuit et sécurisé sur place pour tous nos hôtes.",
  },
  {
    icon: Sun,
    title: "Terrasses panoramiques",
    description: "Plusieurs espaces extérieurs aménagés pour profiter de la vue et du soleil à toute heure de la journée.",
  },
  {
    icon: Utensils,
    title: "Cuisine locale",
    description: "Sur demande, découvrez les saveurs de la cuisine tunisienne traditionnelle préparée par notre chef.",
  },
  {
    icon: Heart,
    title: "Service personnalisé",
    description: "Une équipe attentive à vos besoins pour un séjour sur mesure et des moments inoubliables.",
  },
];

const activities = [
  {
    icon: Mountain,
    title: "Randonnées en montagne",
    description: "Explorez les sentiers de montagne avec nos recommandations de circuits adaptés à tous les niveaux.",
  },
  {
    icon: Waves,
    title: "Plages secrètes",
    description: "Découvrez les plus belles criques et plages cachées de la région, à quelques minutes de la maison.",
  },
  {
    icon: Compass,
    title: "Excursions guidées",
    description: "Partez à la découverte des trésors de la région avec nos excursions organisées.",
  },
  {
    icon: MapPin,
    title: "Visites culturelles",
    description: "Sites historiques, villages traditionnels et marchés locaux à explorer aux alentours.",
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        title="Nos Services"
        subtitle="Tout pour un séjour parfait entre mer et montagne"
        image={loungeImage}
      />

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Services"
            title="À votre service"
            description="Des prestations de qualité pour votre confort et votre bien-être."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast Feature */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={breakfastImage}
                alt="Petit-déjeuner à Dar Seif"
                className="rounded-lg shadow-elevated w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
                Gastronomie
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Un petit-déjeuner d'exception
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Commencez chaque journée avec notre petit-déjeuner copieux, 
                  préparé avec soin à partir de produits frais et locaux.
                </p>
                <p>
                  Servi sur notre terrasse panoramique, vous dégusterez viennoiseries 
                  artisanales, fruits de saison, fromages locaux, œufs frais, 
                  et bien d'autres délices tout en admirant la vue sur la mer.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {["Produits frais et locaux", "Viennoiseries artisanales", "Fruits de saison", "Vue panoramique"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Activités"
            title="Explorer la région"
            description="De nombreuses activités et découvertes vous attendent aux alentours de Dar Seif."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 p-6 bg-card rounded-lg shadow-soft"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                    <activity.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Feature */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={landscapeImage}
            alt="Paysage de la région"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              La nature à perte de vue
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
              Dar Seif est située dans un environnement préservé, offrant un accès privilégié 
              à la beauté naturelle de la région. Entre mer et montagne, chaque jour 
              est une invitation à l'émerveillement.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/gallery">Voir la galerie</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Prêt pour l'aventure ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant et laissez-nous vous faire découvrir 
              les merveilles de notre région.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Réserver votre séjour</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
