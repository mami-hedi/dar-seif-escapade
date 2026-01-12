import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "@/components/shared/PageHero";
import exteriorImage from "@/assets/exterior.jpg";

const Contact = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Route de la Montagne, Vue Mer\nTunisie",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+216 XX XXX XXX",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@darseif.com",
    },
    {
      icon: Clock,
      title: "Réception",
      content: "Tous les jours: 8h00 - 22h00",
    },
  ];

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="N'hésitez pas à nous contacter pour toute question ou réservation"
        image={exteriorImage}
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Réservation, Information..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                  />
                </div>

                <Button
                  type="button"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Send size={18} />
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Nos coordonnées
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Vous pouvez également nous contacter directement par téléphone ou email.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-secondary rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-lg overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">Notre localisation</h3>
                  <p className="text-muted-foreground">
                    Entre mer et montagne, dans un cadre naturel exceptionnel
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Informations de réservation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold mb-2">Check-in</h3>
                <p className="text-muted-foreground">14h00 - 20h00</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold mb-2">Check-out</h3>
                <p className="text-muted-foreground">Jusqu'à 11h00</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold mb-2">Petit-déjeuner</h3>
                <p className="text-muted-foreground">8h00 - 10h30</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Pour toute demande spéciale ou arrivée tardive, merci de nous contacter à l'avance.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
