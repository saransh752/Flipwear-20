import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Shirt, TrendingUp, ChevronRight, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  description?: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Classic College Hoodie",
    category: "Hoodies",
    price: 899,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556821552-7e4e7f1000d6?w=500&h=500&fit=crop",
    badge: "Popular",
    description: "Comfortable and warm hoodie with college emblem. Perfect for cold campus mornings.",
  },
  {
    id: 2,
    name: "Premium University Tee",
    category: "T-Shirts",
    price: 549,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    badge: "New",
    description: "Soft cotton t-shirt with university branding. Great for everyday wear and college events.",
  },
  {
    id: 3,
    name: "Embroidered Campus Jacket",
    category: "Jackets",
    price: 1299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop",
    description: "Stylish jacket with embroidered college crest. Water-resistant material keeps you protected from weather.",
  },
  {
    id: 4,
    name: "College Baseball Cap",
    category: "Accessories",
    price: 399,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1588156211139-22d0f0f44928?w=500&h=500&fit=crop",
    description: "Classic baseball cap with embroidered college logo. Adjustable strap for perfect fit.",
  },
];

// Animation variants
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
    transition: { duration: 0.5 },
  },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Index() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 text-accent rounded-full text-sm font-bold border border-accent/50 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Welcome to Flip Wear
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Express Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">College Pride</span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Discover the ultimate collection of college hoodies, t-shirts, and accessories. Show your school spirit with style and comfort.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Shop Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              className="relative h-96 md:h-full min-h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1556821552-7e4e7f1000d6?w=600&h=600&fit=crop"
                alt="Student wearing college hoodie"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Shirt, title: "Quality Products", desc: "Premium materials and excellent craftsmanship for every item" },
              { icon: TrendingUp, title: "Student Friendly", desc: "Affordable prices designed for college students and their budgets" },
              { icon: Star, title: "Wide Selection", desc: "Multiple colleges, styles, and sizes to choose from" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                variants={featureVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div className="flex justify-center">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-primary/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Wearing College Merch Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1543163521-9efcc06b9aea?w=600&h=700&fit=crop"
                  alt="College student wearing Flip wear merchandise"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/50">
                  Real Students, Real Style
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                See <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your College Merch</span> in Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of college students who are already rocking Flip wear. Our quality merchandise is designed for comfort and style, perfect for your everyday campus life.
              </p>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Premium comfort for all-day wear",
                  "Stand out on campus with unique designs",
                  "Durable quality that lasts all semester",
                  "Perfect for college events and tailgates",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link to="/shop">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Explore Collection
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-accent" />
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular college merchandise items
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group relative">
                    {/* Wishlist Button */}
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart
                        className={`w-5 h-5 transition-all ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 hover:text-red-500"
                        }`}
                      />
                    </motion.button>

                    {/* Product Image Container */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {product.badge && (
                        <motion.div
                          className="absolute top-3 left-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                            {product.badge}
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{product.category}</p>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-grow">{product.description}</p>
                      )}

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating)
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground ml-1">({product.rating})</span>
                      </div>

                      {/* Price & Button */}
                      <div className="flex items-center justify-between mt-auto">
                        <motion.span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          ₹{product.price}
                        </motion.span>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white">
                            View
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/10">
                View All Products
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen"
            animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to Showcase Your <span className="text-white">College Spirit?</span>
          </motion.h2>
          <motion.p
            className="text-lg opacity-95 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Start shopping now and find the perfect college merchandise that matches your style
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/shop">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold">
                Start Shopping
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
