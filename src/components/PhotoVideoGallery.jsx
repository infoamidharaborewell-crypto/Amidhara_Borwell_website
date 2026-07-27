import React, { useState } from 'react'

const PhotoVideoGallery = ({ photos = [], videos = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [mediaType, setMediaType] = useState(null) // 'photo' or 'video'

  const openModal = (item, type) => {
    setSelectedMedia(item)
    setMediaType(type)
  }

  const closeModal = () => {
    setSelectedMedia(null)
    setMediaType(null)
  }

  // Default sample images if none provided
  // To add your own photos: Place them in /public/images/ folder and reference as '/images/your-photo.jpg'
  const defaultPhotos = photos.length > 0 ? photos : [
    // Add your photo paths here, for example:
    // '/images/borewell-drilling-1.jpg',
    // '/images/borewell-drilling-2.jpg',
    // '/images/borewell-drilling-3.jpg',
    // '/images/borewell-drilling-4.jpg',
    // Or use placeholder images for now:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    'https://images.unsplash.com/photo-1581092160561-40aa08e78837?w=800',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
  ]

  // To add your own videos: Place them in /public/videos/ folder and reference as '/videos/your-video.mp4'
  // Or use YouTube/Vimeo embed URLs
  const defaultVideos = videos.length > 0 ? videos : [
    // Add your video paths here, for example:
    // '/videos/drilling-process.mp4',
    // Or YouTube embed: 'https://www.youtube.com/embed/VIDEO_ID'
  ]

  return (
    <div className="py-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work Gallery</h3>
      
      {/* Photos Section */}
      {defaultPhotos.length > 0 && (
        <div className="mb-12">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Photos</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 gallery-item"
                onClick={() => openModal(photo, 'photo')}
              >
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={photo}
                    alt={`Borewell service ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Borewell+Service'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-semibold">Click to view full size</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Photo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Videos Section */}
      {defaultVideos.length > 0 && (
        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Videos</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultVideos.map((video, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 gallery-item"
                onClick={() => openModal(video, 'video')}
              >
                <div className="aspect-video bg-gray-200 relative">
                  {typeof video === 'string' ? (
                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <iframe
                      src={video}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-semibold">Click to play video</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Video
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Full View */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl w-full max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl font-bold p-2 min-h-[44px] min-w-[44px]"
              aria-label="Close media preview modal"
            >
              ×
            </button>
            {mediaType === 'photo' ? (
              <img
                src={selectedMedia}
                alt="Full size borewell service preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain rounded-lg modal-content"
              />
            ) : (
              <div className="aspect-video modal-content">
                {typeof selectedMedia === 'string' ? (
                  <video
                    src={selectedMedia}
                    className="w-full h-full object-contain rounded-lg"
                    controls
                    autoPlay
                  />
                ) : (
                  <iframe
                    src={selectedMedia}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoVideoGallery

