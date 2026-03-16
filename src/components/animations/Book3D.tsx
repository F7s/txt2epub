import { motion } from 'framer-motion';

export const Book3D = () => {
  return (
    <div className="relative w-64 h-80 perspective-1000 group mx-auto my-12">
      {/* Book Container */}
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out transform group-hover:rotate-y-[-30deg]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(10deg)' }}
        animate={{ 
          rotateY: [-25, -20, -25],
          rotateX: [10, 5, 10],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Front Cover */}
        <div 
          className="absolute inset-0 bg-primary rounded-r-md shadow-2xl origin-left"
          style={{ 
            transform: 'translateZ(25px)',
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)'
          }}
        >
          <div className="absolute inset-0 border-2 border-[#D4AF37]/30 m-4 rounded-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="text-[#D4AF37] text-xs tracking-[0.3em] font-serif mb-4">EDITION 2024</div>
            <h2 className="text-white font-serif text-3xl font-bold leading-tight mb-2">TXT<br/>TO<br/>EPUB</h2>
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 mt-4 flex items-center justify-center">
              <span className="text-[#D4AF37] text-xs font-serif">V1</span>
            </div>
          </div>
          {/* Spine Highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Pages (Thickness) */}
        <div 
          className="absolute top-1 bottom-1 right-0 w-[48px] bg-[#FDFBF7]"
          style={{ 
            transform: 'rotateY(90deg) translateZ(-2px) translateX(-24px)',
            backgroundImage: 'linear-gradient(90deg, #e3e3e3 0%, #fff 5%, #e3e3e3 10%, #fff 15%, #e3e3e3 20%, #fff 25%, #e3e3e3 30%, #fff 35%, #e3e3e3 40%, #fff 45%, #e3e3e3 50%, #fff 55%, #e3e3e3 60%, #fff 65%, #e3e3e3 70%, #fff 75%, #e3e3e3 80%, #fff 85%, #e3e3e3 90%, #fff 95%, #e3e3e3 100%)',
            backgroundSize: '4px 100%'
          }} 
        />

        {/* Back Cover */}
        <div 
          className="absolute inset-0 bg-primary rounded-l-md"
          style={{ transform: 'translateZ(-25px) rotateY(180deg)' }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Spine */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-[50px] bg-secondary rounded-l-sm"
          style={{ transform: 'rotateY(-90deg) translateZ(25px)' }}
        >
           <div className="h-full flex flex-col items-center justify-center py-8">
             <span className="text-[#D4AF37] font-serif font-bold text-lg tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
               TXT2EPUB CONVERTER
             </span>
           </div>
        </div>
      </motion.div>
      
      {/* Shadow */}
      <div className="absolute bottom-[-40px] left-10 right-10 h-8 bg-black/20 blur-xl rounded-full transform rotate-x-60" />
    </div>
  );
};
