import React, { useState, useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "/gallery1.jpg";
import galleryvideo1 from "/galleryvideo1.mp4";
import gallery2 from "/gallery2.jpg";
import gallery3 from "/gallery3.jpg";
import galleryvideo2 from "/galleryvideo2.mp4";
import gallery4 from "/gallery4.jpg";
import galleryvideo3 from "/galleryvideo3.mp4";
import gallery5 from "/gallery5.jpg";
import galleryvideo4 from "/galleryvideo4.mp4";
import galleryvideoscreenshot1 from "/galleryvideoscreenshot1.png";
import galleryvideoscreenshot2 from "/galleryvideoscreenshot2.png";
import galleryvideoscreenshot3 from "/galleryvideoscreenshot3.png";
import galleryvideoscreenshot4 from "/galleryvideoscreenshot4.png";
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment, PerspectiveCamera, Sphere, MeshDistortMaterial } from '@react-three/drei'
import WaterEffects from './WaterEffects';
// import PhotoVideoGallery from './PhotoVideoGallery'
// import * as THREE from 'three'

// Simplified 3D elements for animation
const AnimatedDroplet = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <Sphere args={[0.3, 32, 32]}>
        <MeshDistortMaterial
          color="#3b82f6"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </group>
  )
}

const AnimatedPump = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const AnimatedTractor = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[2, 0.8, 1.2]} />
        <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0.3, 0]} castShadow>
        <boxGeometry args={[1.2, 0.6, 1]} />
        <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const Animated3DScene = ({ onAnimationComplete }) => {
  const groupRef = useRef()
  const [scale, setScale] = useState(0.1)
  const [position, setPosition] = useState([0, 0, 10])

  useEffect(() => {
    // Animate coming to user's face
    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const startScale = 0.1
    const endScale = 1.5
    const startZ = 10
    const endZ = 2

    let animationFrame

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      
      setScale(startScale + (endScale - startScale) * easeOutCubic)
      setPosition([0, 0, startZ - (startZ - endZ) * easeOutCubic])
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Hold for a moment, then scale back
        setTimeout(() => {
          const scaleBackStart = Date.now()
          const scaleBackDuration = 1000
          
          const scaleBackAnimate = () => {
            const elapsed = Date.now() - scaleBackStart
            const progress = Math.min(elapsed / scaleBackDuration, 1)
            const easeInCubic = progress * progress * progress
            
            setScale(endScale - (endScale - 1) * easeInCubic)
            setPosition([0, 0, endZ + (3 - endZ) * easeInCubic])
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(scaleBackAnimate)
            } else {
              onAnimationComplete()
            }
          }
          scaleBackAnimate()
        }, 1000)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [onAnimationComplete])

  

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <AnimatedDroplet position={[-1.5, 1, 0]} scale={1} />
      <AnimatedDroplet position={[1.5, 1, 0]} scale={1} />
      <AnimatedDroplet position={[0, 2, 0]} scale={0.8} />
      <AnimatedPump position={[-1, -0.5, 0]} scale={1} />
      <AnimatedTractor position={[1, -0.5, 0]} scale={1} />
    </group>
  )
}

// pratixa's gallery

const mediaData = [
  {
    id: 1,
    type: "photo",
    src: gallery1,
    // title: "High-Depth Drilling",
    // desc: "Industrial borewell execution at GIDC."
  },
  {
    id: 2,
    type: "video",
    thumbnail: galleryvideoscreenshot1,
    videoSrc: galleryvideo1, 
    // title: "Live Drilling Process",
    // desc: "Watch our advanced rig in action."
  },
  {
    id: 3,
    type: "photo",
    src: gallery2,
    // title: "Pump Installation",
    // desc: "Installing heavy-duty submersible pumps."
  },
  {
    id: 4,
    type: "photo",
    src: gallery3,
    // title: "Water Recharge",
    // desc: "Rainwater harvesting system setup."
  },
  {
    id: 5,
    type: "video",
    thumbnail: galleryvideoscreenshot2,
    videoSrc: galleryvideo2,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },
  {
    id: 6,
    type: "photo",
    src: gallery4,
    // title: "Soil Testing",
    // desc: "Analyzing ground layers for best water yield."
  },
  {
    id: 7,
    type: "video",
    thumbnail: galleryvideoscreenshot3,
    videoSrc: galleryvideo3,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },
  {
    id: 8,
    type: "photo",
    src: gallery5,
    // title: "Soil Testing",
    // desc: "Analyzing ground layers for best water yield."
  },
  {
    id: 9,
    type: "video",
    thumbnail: galleryvideoscreenshot4,
    videoSrc: galleryvideo4,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },

];

const Gallery = () => {
  // from pratixa's gallery

  const [filter, setFilter] = useState("all");
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Filter logic
  const filteredItems = mediaData.filter((item) => 
    filter === "all" ? true : item.type === filter
  );

  // Open Lightbox
  const openLightbox = (item) => {
    setActiveLightbox(item);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close Lightbox
  const closeLightbox = () => {
    setActiveLightbox(null);
    document.body.style.overflow = "auto";
  };

  const [show3DAnimation, setShow3DAnimation] = useState(false)
  const [showGallery, setShowGallery] = useState(true)

  const handleAnimationComplete = () => {
    setShow3DAnimation(false)
    setTimeout(() => {
      setShowGallery(true)
    }, 500)
  }

  

  return (
    <section id="gallery" className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <WaterEffects variant="waves" />
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      {/* 3D Animation Section */}
      {show3DAnimation && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
          <div className="w-full h-full">
            <Canvas
              shadows
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [0, 2, 10], fov: 50 }}
              style={{ background: 'transparent' }}
            >
              <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} />
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
              <pointLight position={[-5, 5, -5]} intensity={0.6} color="#3b82f6" />
              <pointLight position={[0, 5, 0]} intensity={0.5} color="#fbbf24" />
              
              <Suspense fallback={null}>
                <Animated3DScene onAnimationComplete={handleAnimationComplete} />
              </Suspense>
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
              <Environment preset="sunset" />
            </Canvas>
            
            {/* Loading Text */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
              <p className="text-white text-xl md:text-2xl font-semibold animate-pulse">
                Experience Our 3D Showcase
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      <div className="gallery-page">
      
      {/* Header Section */}
      <div className="gallery-header" data-aos="fade-down">
        <h4>Our Portfolio</h4>
        <h2 className='text-5xl font-bold mb-4'>Work In Action</h2>
        <p>Explore our latest drilling projects, machinery, and successful water solutions.</p>
      </div>

      {/* Filter Buttons */}
      <div className="gallery-filters" data-aos="fade-up">
        <button 
          className={`filter-btn ${filter === "all" ? "active" : ""}`} 
          onClick={() => setFilter("all")}
        >
          All Work
        </button>
        <button 
          className={`filter-btn ${filter === "photo" ? "active" : ""}`} 
          onClick={() => setFilter("photo")}
        >
          Photos
        </button>
        <button 
          className={`filter-btn ${filter === "video" ? "active" : ""}`} 
          onClick={() => setFilter("video")}
        >
          Videos
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item" 
            data-aos="zoom-in" 
            onClick={() => openLightbox(item)}
          >
            <div className="media-wrapper">
              <img 
                src={item.type === 'video' ? item.thumbnail : item.src} 
                alt={item.title} 
              />
              {/* Overlay Icon */}
              <div className="media-overlay">
                <div className="icon-box">
                  {item.type === 'video' ? '▶' : '⊕'}
                </div>
              </div>
              {item.type === 'video' && <div className="video-badge">VIDEO</div>}
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
            
            {activeLightbox.type === 'video' ? (
              <video controls autoPlay className="lightbox-media">
                <source src={activeLightbox.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={activeLightbox.src} alt={activeLightbox.title} className="lightbox-media" />
            )}
            
            <div className="lightbox-caption">
              <h3>{activeLightbox.title}</h3>
              <p>{activeLightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  )
}

export default Gallery

