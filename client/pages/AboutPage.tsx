import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Zap, Heart, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Quality First",
      description: "We deliver premium merchandise that lasts through all four years of college",
    },
    {
      icon: Target,
      title: "Student Focused",
      description: "Built by students, for students. We understand campus life and style",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Quick delivery and excellent customer service to support your needs",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Supporting college communities and fostering school spirit everywhere",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-5 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Flip Wear
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Bringing College Spirit to Life, One Piece at a Time
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/50 mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Our Mission
                </motion.div>
                <h2 className="text-5xl font-black text-foreground mb-6">
                  Celebrate Your<br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    College Identity
                  </span>
                </h2>
              </div>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Flip Wear was born from a simple idea: college students deserve quality merchandise that represents their school spirit. We started because we saw a gap in the market - students wanted a one-stop destination for authentic, stylish college apparel.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Today, Flip Wear is the trusted partner for thousands of college students across the country, providing premium hoodies, t-shirts, jackets, and accessories that make you proud to wear your college colors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/shop">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Explore Our Collection
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1552941141-bee0e8814cbf?w=600&h=700&fit=crop"
                  alt="College students"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What drives us to deliver the best college merchandise
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(264, 80, 255, 0.2)" }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: "50K+", label: "Happy Students" },
              { number: "100+", label: "Colleges Served" },
              { number: "10K+", label: "5-Star Reviews" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black text-foreground">Built by Students</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of college graduates dedicated to your experience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Alex Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
              { name: "Sarah Johnson", role: "Head of Design", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
              { name: "Mike Patel", role: "Operations Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="mb-4 rounded-2xl overflow-hidden w-40 h-40 mx-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen"
            animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Show Your College Spirit?
          </motion.h2>
          <motion.p
            className="text-lg opacity-95 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join thousands of students rocking Flip wear merchandise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/shop">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold">
                Start Shopping Now
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
