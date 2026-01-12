import { motion } from "framer-motion";
import { Heart, Leaf, Mountain, Sun, Users, Award } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import landscapeImage from "@/assets/landscape.jpg";
import exteriorImage from "@/assets/exterior.jpg";
import loungeImage from "@/assets/lounge.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Hospitalité",
      description: "Un accueil chaleureux et personnalisé pour chaque hôte, dans la plus pure tradition tunisienne.",
    },
    {
      icon: Leaf,
      title: "Nature",
      description: "Un environnement préservé au cœur de la nature, entre mer et montagne.",
    },
    {
      icon: Sun,
      title: "Sérénité",
      description: "Un havre de paix où le temps s'arrête pour vous offrir repos et tranquillité.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Des prestations de qualité et une attention particulière à chaque détail.",
    },
  ];

  return (
    <>
      <PageHero
        title="À propos"
        subtitle="Découvrez l'histoire et les valeurs de Dar Seif"
        image={landscapeImage}
      />

      {/* Story Section */}
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
                Notre histoire
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Un rêve devenu réalité
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Dar Seif est née d'une passion pour l'hospitalité et d'un amour profond 
                  pour cette région unique où la mer rencontre la montagne. Notre maison 
                  d'hôtes a été créée avec une vision claire : offrir à nos visiteurs 
                  une expérience authentique et inoubliable.
                </p>
                <p>
                  Perchée sur les hauteurs, notre demeure offre des vues panoramiques 
                  époustouflantes sur la Méditerranée et les montagnes environnantes. 
                  Chaque chambre a été conçue pour capturer cette beauté naturelle 
                  tout en offrant le confort moderne.
                </p>
                <p>
                  Aujourd'hui, Dar Seif est devenue une destination prisée des voyageurs 
                  en quête de calme, de beauté et d'authenticité. Nous sommes fiers 
                  d'accueillir des hôtes du monde entier et de leur faire découvrir 
                  les trésors de notre région.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={exteriorImage}
                alt="Extérieur de Dar Seif"
                className="rounded-lg shadow-elevated w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Nos valeurs"
            title="Ce qui nous définit"
            description="Des valeurs authentiques qui guident chacune de nos actions pour vous offrir le meilleur."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card p-8 rounded-lg shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={loungeImage}
                alt="Salon de Dar Seif"
                className="rounded-lg shadow-elevated w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
                L'expérience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Bien plus qu'un séjour
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  À Dar Seif, nous croyons que les vacances doivent être une expérience 
                  transformatrice. C'est pourquoi nous avons créé un environnement où 
                  vous pouvez véritablement vous déconnecter et vous ressourcer.
                </p>
                <p>
                  Que vous souhaitiez vous détendre sur notre terrasse avec vue sur la mer, 
                  explorer les sentiers de montagne environnants, ou simplement profiter 
                  du silence et de la beauté de la nature, nous sommes là pour rendre 
                  votre séjour parfait.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="font-display text-3xl font-semibold text-primary mb-1">5+</div>
                  <div className="text-muted-foreground text-sm">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="font-display text-3xl font-semibold text-primary mb-1">1000+</div>
                  <div className="text-muted-foreground text-sm">Hôtes accueillis</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
              Une équipe passionnée
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Notre équipe dévouée est là pour vous accueillir et vous accompagner 
              tout au long de votre séjour. Avec une connaissance approfondie de la région 
              et un souci constant du détail, nous nous efforçons de rendre chaque moment 
              spécial. Bienvenue chez vous, bienvenue à Dar Seif.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
