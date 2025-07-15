import React, { useEffect, useState, useCallback, useMemo ,memo} from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
  useSpring,
} from "framer-motion";
import { Play, Pause, RotateCcw, Zap, Eye } from "lucide-react";

const DEFAULT_IMGS: string[] = [
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  // pauseOnHover?: boolean; // Removed unused prop
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = memo(({
  autoplay = false,
  // pauseOnHover = false, // Removed unused variable
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : DEFAULT_IMGS;
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState(0);

  // Use a state for screen size that updates only on resize for cylinder dimensions
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    // Check window only on client-side
    if (typeof window !== 'undefined') {
      setIsScreenSizeSm(window.innerWidth <= 640);
      const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Memoize these calculations as they depend on isScreenSizeSm and galleryImages.length
  const { cylinderWidth, faceCount, faceWidth, radius } = useMemo(() => {
    const calculatedFaceCount = galleryImages.length;
    const calculatedCylinderWidth: number = isScreenSizeSm ? 1200 : 2000;
    const calculatedFaceWidth: number = calculatedFaceCount > 0 ? (calculatedCylinderWidth / calculatedFaceCount) * 1.2 : 0;
    const calculatedRadius: number = calculatedFaceCount > 0 ? calculatedCylinderWidth / (2 * Math.PI) : 0;
    return {
      cylinderWidth: calculatedCylinderWidth,
      faceCount: calculatedFaceCount,
      faceWidth: calculatedFaceWidth,
      radius: calculatedRadius
    };
  }, [isScreenSizeSm, galleryImages.length]);

  const dragFactor: number = 0.08;
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 100, damping: 20 });
  const controls = useAnimation();

  // Use useTransform for direct CSS property mapping
  const transform = useTransform(
    smoothRotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  // Memoize animation functions to prevent re-creation on every render
  const startInfiniteSpin = useCallback((startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]); // controls is stable due to useAnimation

  const resetPosition = useCallback(() => {
    controls.stop();
    rotation.set(0);
    setCurrentView(0);
  }, [controls, rotation]);

  useEffect(() => {
    if (isPlaying) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [isPlaying, startInfiniteSpin, controls, rotation]);

  // Optimize onUpdate to only update currentView if it actually changes
  const handleUpdate = useCallback((latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      const newRotationValue = latest.rotateY;
      rotation.set(newRotationValue); // Update motion value directly

      // Calculate viewIndex only if currentView state might change
      const normalizedAngle = ((newRotationValue % 360) + 360) % 360;
      const newViewIndex = Math.round(normalizedAngle / (360 / faceCount)) % faceCount;
      if (newViewIndex !== currentView) {
        setCurrentView(newViewIndex);
      }
    }
  }, [rotation, faceCount, currentView]);

  const handleDrag = useCallback((
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  }, [controls, rotation, dragFactor]);

  const handleDragEnd = useCallback((
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (isPlaying) {
      startInfiniteSpin(finalAngle);
    }
  }, [rotation, dragFactor, isPlaying, startInfiniteSpin]);

  const toggleAutoplay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border border-gray-800">
      {/* Futuristic control panel */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-3">
        <motion.button
          onClick={toggleAutoplay}
          className="p-3 rounded-xl bg-black/50 hover:bg-black/70 text-cyan-400 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm border border-cyan-500/30"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </motion.button>
        
        <motion.button
          onClick={resetPosition}
          className="p-3 rounded-xl bg-black/50 hover:bg-black/70 text-purple-400 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm border border-purple-500/30"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={16} />
        </motion.button>
      </div>

      {/* View counter */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
        <Eye size={16} className="text-green-400" />
        <span className="text-sm text-white font-medium">
          {currentView + 1} / {faceCount}
        </span>
      </div>

      {/* Main gallery container */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Holographic gradient edges */}
        <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-black via-black/50 to-transparent" />
        
        {/* Ambient lighting effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-purple-900/20 z-5" />
        
        {/* 3D Gallery */}
        <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0.1}
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform, 
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex min-h-[300px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d]"
          >
            {galleryImages.map((url, i) => (
              <motion.div
                key={i}
                className="group absolute flex items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {/* Holographic frame */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 blur-sm"
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0.5,
                      scale: hoveredIndex === i ? 1.1 : 1, // Moved scale here
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Image container */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                    animate={{
                      borderColor: hoveredIndex === i ? 'rgba(6, 182, 212, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <img
                      src={url}
                      alt={`gallery-image-${i}`}
                      // Adjusted image dimensions to be more consistent and potentially smaller on desktop
                      className="w-[280px] h-[160px] object-cover transition-all duration-500 ease-out" // Removed sm: dimensions if unnecessary
                      style={{
                        filter: hoveredIndex === i ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)',
                      }}
                    />
                    
                    {/* Scan line effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                      animate={{
                        x: hoveredIndex === i ? ['-100%', '100%'] : '-100%',
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: hoveredIndex === i ? Infinity : 0,
                      }}
                    />
                  </motion.div>
                  
                  {/* Hologram indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                    animate={{
                      scale: hoveredIndex === i ? [1, 1.3, 1] : 1,
                      opacity: hoveredIndex === i ? 1 : 0.7,
                    }}
                    transition={{
                      scale: {
                        duration: 0.5,
                        repeat: hoveredIndex === i ? Infinity : 0,
                      }
                    }}
                  >
                    <Zap size={12} className="text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Status bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 px-6 py-3 rounded-xl bg-black/70 backdrop-blur-sm border border-white/10">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
          <span className="text-sm text-white">
            {isPlaying ? 'AUTO' : 'MANUAL'}
          </span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <span className="text-sm text-gray-300">
          {faceCount} Images
        </span>
      </div>
    </div>
  );
});

RollingGallery.displayName = 'RollingGallery';
export default RollingGallery;