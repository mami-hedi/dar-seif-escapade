import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Maximize2, Eye, Wifi, Coffee, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import heroImage from "@/assets/hero-main.jpg";

const rooms = [
  {
    id: 1,
    name: "Chambre Azur",
    description: "Une chambre élégante avec une vue panoramique sur la mer Méditerranée. Profitez du lever du soleil depuis votre lit king size.",
    image: room1,
    price: 120,
    capacity: 2,
    size: "25m²",
    view: "Mer",
    amenities: ["Lit King Size", "Vue mer", "Terrasse privée", "Climatisation", "Salle de bain privée", "Wi-Fi gratuit"],
  },
  {
    id: 2,
    name: "Chambre Montagne",
    description: "Évadez-vous face aux sommets majestueux. Cette chambre spacieuse offre une vue imprenable sur les montagnes environnantes.",
    image: room2,
    price: 100,
    capacity: 2,
    size: "22m²",
    view: "Montagne",
    amenities: ["Lit Queen Size", "Vue montagne", "Balcon", "Climatisation", "Salle de bain privée", "Wi-Fi gratuit"],
  },
  {
    id: 3,
    name: "Suite Panoramique",
    description: "Notre suite la plus prestigieuse offrant une vue à 180° sur la mer et les montagnes. Un salon privé et une terrasse pour des moments d'exception.",
    image: room3,
    price: 180,
    capacity: 3,
    size: "40m²",
    view: "Mer & Montagne",
    amenities: ["Lit King Size", "Salon privé", "Grande terrasse", "Baignoire", "Mini-bar", "Service en chambre"],
  },
];

const Rooms = () => {
  return (
    <>
      <PageHero
        title="Nos Chambres"
        subtitle="Des espaces élégants conçus pour votre confort et votre bien-être"
        image={heroImage}
      />

      {/* Rooms List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                    {room.price}€ / nuit
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                    {room.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{room.capacity} personnes</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize2 className="w-5 h-5 text-primary" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="w-5 h-5 text-primary" />
                      <span>Vue {room.view}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Équipements</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Réserver cette chambre</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Inclus dans toutes nos chambres
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Profitez de nombreux services et équipements pour un séjour parfait.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Coffee, name: "Petit-déjeuner inclus" },
              { icon: Wifi, name: "Wi-Fi haut débit" },
              { icon: Bath, name: "Produits d'accueil" },
              { icon: Eye, name: "Vue exceptionnelle" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">{service.name}</h3>
              </motion.div>
            ))}
          </div>
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
              Une question sur nos chambres ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour plus d'informations ou pour effectuer une réservation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
