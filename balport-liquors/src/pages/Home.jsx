import { Link } from 'react-router-dom'
import './Home.css'

const HERO_BG = '/images/hero_bg.webp'
const WATERMARK = '/images/watermark.png'
const STORE_EXTERIOR = '/images/store_exterior.jpg'

const featuredProducts = [
  {
    id: 1,
    name: 'Coastal Reserve 12 Yr',
    category: 'Bourbon',
    price: '$85.00',
    image: '/images/product_coastal_reserve.png',
  },
  {
    id: 2,
    name: 'Ocean Ridge Pinot Noir',
    category: 'Red Wine',
    price: '$42.00',
    image: '/images/product_pinot_noir.png',
  },
  {
    id: 3,
    name: 'Sea Mist Botanicals',
    category: 'Gin',
    price: '$38.00',
    image: '/images/product_sea_mist_gin.png',
  },
]

const categories = [
  { icon: 'liquor', label: 'Spirits' },
  { icon: 'wine_bar', label: 'Wine' },
  { icon: 'sports_bar', label: 'Beer' },
  { icon: 'local_cafe', label: 'Essentials' },
]

function Home() {
  const handleSubscribe = (e) => {
    e.preventDefault()
    // placeholder
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url('${HERO_BG}')` }} />
        <div className="hero__overlay" />
        <div className="hero__content fade-in">
          <img src={WATERMARK} alt="Balport Liquors watermark" className="hero__watermark" />
          <h1 className="hero__title font-display-lg">Your Neighborhood. Elevated.</h1>
          <p className="hero__subtitle font-body-lg">
            Curated spirits, fine wines, and craft beers for the discerning palate. Discover your next favorite pour.
          </p>
          <div className="hero__actions">
            <Link to="/deals" className="btn btn--primary font-label-sm">SHOP ONLINE</Link>
            <Link to="/deals" className="btn btn--ghost font-label-sm">VIEW DEALS</Link>
          </div>
        </div>
      </section>

      {/* What We Carry */}
      <section className="categories">
        <h2 className="categories__title font-headline-lg">What We Carry</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <div key={cat.label} className="category-card glass-panel">
              <span
                className="material-symbols-outlined category-card__icon"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {cat.icon}
              </span>
              <h3 className="category-card__label font-body-lg">{cat.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured This Week */}
      <section className="featured">
        <div className="featured__inner">
          <div className="featured__header">
            <h2 className="font-headline-lg featured__title">Featured This Week</h2>
            <Link to="/deals" className="font-label-sm featured__view-all">VIEW ALL</Link>
          </div>
          <div className="featured__grid">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className={`product-card fade-in delay-${(i + 1) * 100}`}>
                <div className="product-card__image-wrap">
                  <img src={product.image} alt={product.name} className="product-card__image" />
                  <span className="product-card__tag font-label-sm">{product.category}</span>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name font-body-lg">{product.name}</h3>
                  <div className="product-card__footer">
                    <span className="product-card__price font-headline-lg">{product.price}</span>
                    <button className="product-card__add" aria-label={`Add ${product.name} to cart`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about__inner">
          <div className="about__image-wrap deep-shadow">
            <div className="about__image" style={{ backgroundImage: `url('${STORE_EXTERIOR}')` }} />
          </div>
          <div className="about__content">
            <h2 className="font-headline-lg about__heading">About Balport</h2>
            <p className="font-body-md about__text">
              Nestled by the coast, Balport Liquors bridges the gap between a high-end boutique and a welcoming
              neighborhood shop. We curate a selection that speaks to both the enthusiast collector and the casual
              weekend sipper.
            </p>
            <div className="about__details">
              <div className="about__detail">
                <h4 className="font-label-sm about__detail-label">LOCATION</h4>
                <p className="font-body-md about__detail-value">
                  123 Coastal Way<br />Balport, CA 90210
                </p>
              </div>
              <div className="about__detail">
                <h4 className="font-label-sm about__detail-label">HOURS</h4>
                <p className="font-body-md about__detail-value">
                  Mon-Thu: 10am - 9pm<br />Fri-Sat: 10am - 10pm<br />Sun: 11am - 8pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <h3 className="font-headline-lg newsletter__title">Join the Reserve List</h3>
          <p className="font-body-md newsletter__subtitle">
            Get early access to rare allocations, exclusive tastings, and local deals.
          </p>
          <form className="newsletter__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter__input font-body-md"
              required
            />
            <button type="submit" className="btn btn--primary font-label-sm">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
