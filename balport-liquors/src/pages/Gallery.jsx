import { useState, useCallback } from 'react'
import './Gallery.css'

const filterTabs = ['All', 'Store', 'Spirits', 'Wine', 'Beer', 'Events']

const galleryItems = [
  {
    id: 1,
    alt: 'Store Interior',
    aspect: '3/4',
    image: '/images/gallery_store_interior.jpg',
  },
  {
    id: 2,
    alt: 'Premium Spirits',
    aspect: '1/1',
    image: '/images/gallery_spirits.jpg',
  },
  {
    id: 3,
    alt: 'Wine Cellar',
    aspect: '4/3',
    image: '/images/gallery_wine_cellar.jpg',
  },
  {
    id: 4,
    alt: 'Craft Beer Section',
    aspect: '16/9',
    image: '/images/gallery_craft_beer.jpg',
  },
  {
    id: 5,
    alt: 'Cocktail Event',
    aspect: '3/4',
    image: '/images/gallery_event.jpg',
  },
  {
    id: 6,
    alt: 'Whiskey Detail',
    aspect: '1/1',
    image: '/images/gallery_whiskey.jpg',
  },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const openLightbox = useCallback((src) => {
    setLightboxSrc(src)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null)
    document.body.style.overflow = ''
  }, [])

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="gallery-header fade-in">
        <h1 className="gallery-header__title font-display-lg">Inside Balport</h1>
        <p className="gallery-header__subtitle font-body-lg">
          Explore the curated ambiance, premium selections, and coastal elegance of our flagship location.
        </p>
      </section>

      {/* Filters */}
      <section className="gallery-filters fade-in delay-100">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            className={`gallery-filter font-label-sm ${activeFilter === tab ? 'gallery-filter--active' : ''}`}
            onClick={() => setActiveFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* Masonry Grid */}
      <section className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            className={`gallery-item fade-in delay-${((i % 3) + 1) * 100}`}
            onClick={() => openLightbox(item.image)}
          >
            <div className="gallery-item__inner" style={{ aspectRatio: item.aspect }}>
              <img src={item.image} alt={item.alt} className="gallery-item__image" />
              <div className="gallery-item__overlay">
                <span className="material-symbols-outlined gallery-item__zoom">zoom_in</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" onClick={(e) => e.target === e.currentTarget && closeLightbox()}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
            <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>close</span>
          </button>
          <img src={lightboxSrc} alt="Expanded View" className="lightbox__image" />
        </div>
      )}
    </div>
  )
}

export default Gallery
