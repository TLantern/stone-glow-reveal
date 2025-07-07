import { useState, useRef } from "react";
import { motion } from "framer-motion";
import beforeImage from "@/assets/before-image.jpg";
import afterImage from "@/assets/after-image.jpg";

const BeforeAfterViewer = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Before & After
        </h2>
        <p className="text-muted-foreground text-lg">
          Drag the slider or click to reveal the transformation
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-border/50"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
      >
        {/* After Image (Background) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-medium">
            AFTER
          </div>
        </motion.div>

        {/* Before Image (Overlay with clip-path) */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-medium">
            BEFORE
          </div>
        </motion.div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-0.5 h-3 bg-gray-400 mx-0.5"></div>
              <div className="w-0.5 h-3 bg-gray-400 mx-0.5"></div>
            </div>
          </div>
        </div>

        {/* Gradient Dissolve Effects */}
        <div 
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background: `linear-gradient(to bottom, 
              hsl(var(--background)) 0%, 
              transparent 10%, 
              transparent 90%, 
              hsl(var(--background)) 100%)`
          }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-8"
      >
        <p className="text-muted-foreground">
          Position: {Math.round(sliderPosition)}%
        </p>
      </motion.div>
    </div>
  );
};

export default BeforeAfterViewer;