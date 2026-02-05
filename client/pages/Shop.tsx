import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Filter, X, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

const allProducts: Product[] = [
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
    description: "Stylish jacket with embroidered college crest. Water-resistant material for all seasons.",
  },
  {
    id: 4,
    name: "College Baseball Cap",
    category: "Accessories",
    price: 399,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1588156211139-22d0f0f44928?w=500&h=500&fit=crop",
    description: "Classic baseball cap with embroidered logo. Adjustable strap with UV protection.",
  },
  {
    id: 5,
    name: "Zip-up Hoodie Premium",
    category: "Hoodies",
    price: 999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512990182087-8d71bcdd2f18?w=500&h=500&fit=crop",
    description: "Premium zip-up hoodie with fleece lining. High-quality fabric with college patch.",
  },
  {
    id: 6,
    name: "Retro College Tee",
    category: "T-Shirts",
    price: 599,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=500&fit=crop",
    description: "Vintage-inspired college t-shirt with retro design. Perfect for collectors.",
  },
  {
    id: 7,
    name: "Bomber College Jacket",
    category: "Jackets",
    price: 1199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544623408-0edc4d5b1d9c?w=500&h=500&fit=crop",
    description: "Trendy bomber jacket with college crest. Modern design meets campus spirit.",
  },
  {
    id: 8,
    name: "Campus Beanie",
    category: "Accessories",
    price: 449,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=500&fit=crop",
    description: "Warm and cozy beanie with embroidered logo. Perfect for cold weather.",
  },
  {
    id: 9,
    name: "Soft Sweatshirt",
    category: "Hoodies",
    price: 799,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556821552-5b51e8b5c5f8?w=500&h=500&fit=crop",
    description: "Ultra-soft sweatshirt with college branding. Comfortable for casual wear.",
  },
  {
    id: 10,
    name: "Graphic College Tee",
    category: "T-Shirts",
    price: 579,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1535050487db-381e31ac8e4b?w=500&h=500&fit=crop",
    description: "Bold graphic tee with college artwork. Make a statement with your style.",
  },
  {
    id: 11,
    name: "Denim College Jacket",
    category: "Jackets",
    price: 1099,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop",
    description: "Classic denim jacket with embroidered college patch. Timeless and versatile.",
  },
  {
    id: 12,
    name: "Logo Backpack",
    category: "Accessories",
    price: 899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Durable backpack with college logo. Perfect for carrying books and essentials.",
  },
];

const categories = ["All", "Hoodies", "T-Shirts", "Jackets", "Accessories"];
const sortOptions = [
  { id: "latest", label: "Latest" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [priceRange, setPriceRange] = useState([300, 1500]);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter products
  let filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-muted/50 to-muted/30 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Shop</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-accent" />
              College Merchandise
            </h1>
            <p className="text-muted-foreground mt-2">
              Browse our complete collection of hoodies, t-shirts, jackets, and accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Section */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block">
              <motion.div
                className="bg-card rounded-lg border border-border p-6 sticky top-24 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-muted-foreground">Min: ₹{priceRange[0]}</label>
                      <input
                        type="range"
                        min="300"
                        max="1500"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full accent-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Max: ₹{priceRange[1]}</label>
                      <input
                        type="range"
                        min="300"
                        max="1500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-bold text-foreground">{filteredProducts.length}</span> products
                  </p>
                </div>
              </motion.div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Top Bar - Sort & Filter Button */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} items
                  </span>
                </div>

                <div className="w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground hover:border-primary transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  className="lg:hidden bg-card rounded-lg border border-border p-6 mb-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Filters</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowFilters(false);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Price Range</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">Min: ₹{priceRange[0]}</label>
                        <input
                          type="range"
                          min="300"
                          max="1500"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Max: ₹{priceRange[1]}</label>
                        <input
                          type="range"
                          min="300"
                          max="1500"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link to={`/product/${product.id}`}>
                        <motion.div
                          className="bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group relative"
                          whileHover={{ y: -10 }}
                        >
                          {/* Wishlist Button */}
                          <motion.button
                            onClick={(e) => toggleWishlist(product.id, e)}
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
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
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
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-lg text-muted-foreground">No products found</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try adjusting your filters or price range
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
