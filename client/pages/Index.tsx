import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Shirt, TrendingUp, ChevronRight } from "lucide-react";

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
    description: "Comfortable and warm hoodie with college emblem. Perfect for cold campus mornings and late-night study sessions. Premium cotton blend fabric.",
  },
  {
    id: 2,
    name: "Premium University Tee",
    category: "T-Shirts",
    price: 549,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    badge: "New",
    description: "Versatile and stylish university t-shirt. Soft cotton fabric with college branding. Great for everyday wear and college events.",
  },
  {
    id: 3,
    name: "Embroidered Campus Jacket",
    category: "Jackets",
    price: 1299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop",
    description: "Stylish jacket with embroidered college crest. Water-resistant material keeps you protected from weather. Perfect for all-season wear.",
  },
  {
    id: 4,
    name: "College Baseball Cap",
    category: "Accessories",
    price: 399,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1588156211139-22d0f0f44928?w=500&h=500&fit=crop",
    description: "Classic baseball cap with embroidered college logo. Adjustable strap for perfect fit. UV protection for outdoor activities.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  Welcome to Flip Wear
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Express Your <span className="text-primary">College Pride</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the ultimate collection of college hoodies, t-shirts, and accessories. Show your school spirit with style and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    Shop Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1556821552-7e4e7f1000d6?w=600&h=600&fit=crop"
                alt="Student wearing college hoodie"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shirt className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Quality Products</h3>
              <p className="text-muted-foreground">Premium materials and excellent craftsmanship for every item</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Student Friendly</h3>
              <p className="text-muted-foreground">Affordable prices designed for college students and their budgets</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Wide Selection</h3>
              <p className="text-muted-foreground">Multiple colleges, styles, and sizes to choose from</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular college merchandise items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Product Image Container */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 flex-grow">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-foreground">₹{product.price}</span>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline">
                View All Products
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Showcase Your College Spirit?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Start shopping now and find the perfect college merchandise that matches your style
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Shopping
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
