import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BeforeAfterViewer from "@/components/BeforeAfterViewer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen granite-texture">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vision
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the power of AI-driven visual enhancement. 
                Watch ordinary images become extraordinary works of art.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="aurora" size="lg" className="font-semibold text-lg px-8 py-6">
                Start Creating
              </Button>
              <Button variant="outline" size="lg" className="font-semibold text-lg px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="px-6 py-16">
          <BeforeAfterViewer />
        </section>

        {/* Features Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Premium Visual Storytelling
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI Enhancement",
                    description: "Advanced algorithms that understand and enhance your visual narrative"
                  },
                  {
                    title: "Instant Results",
                    description: "See transformations in real-time with our lightning-fast processing"
                  },
                  {
                    title: "Professional Quality",
                    description: "Studio-grade results that meet the highest creative standards"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Begin?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of creators who trust StageAi for their visual transformation needs.
            </p>
            <Button variant="rainbow" size="lg" className="font-semibold text-lg px-10 py-6">
              Get Started Today
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;