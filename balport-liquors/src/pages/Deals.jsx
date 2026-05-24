import { useState } from 'react'
import './Deals.css'

const FEATURED_BG = '/images/deal_hero_bg.jpg'
const FEATURED_BOTTLE = '/images/deal_hero_bottle.png'

const filters = ['All Deals', 'Spirits', 'Wine', 'Soda & Energy', 'Essentials', 'Under $20']

const dealsData = [
  // 1-29 Multi-buy/Bundle deals
  { id: 1, name: 'Yerba Mate', category: 'Soda & Energy', price: '$6.99', oldPrice: null, badge: '2 for $6.99', badgeType: 'primary', image: '/images/deals/yerba_mate.png', under20: true },
  { id: 2, name: 'Bucked Up', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/bucked_up.png', under20: true },
  { id: 3, name: 'Red Bull', category: 'Soda & Energy', price: '$7.99', oldPrice: null, badge: '2 for $7.99', badgeType: 'primary', image: '/images/deals/red_bull.png', under20: true },
  { id: 4, name: 'Ghost', category: 'Soda & Energy', price: '$5.99', oldPrice: null, badge: '2 for $5.99', badgeType: 'primary', image: '/images/deals/ghost.png', under20: true },
  { id: 5, name: 'Gatorade 20 oz', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/gatorade_20_oz.png', under20: true },
  { id: 6, name: 'New Mix', category: 'Soda & Energy', price: '$7.99', oldPrice: null, badge: '2 for $7.99', badgeType: 'primary', image: '/images/deals/new_mix.png', under20: true },
  { id: 7, name: 'Monster', category: 'Soda & Energy', price: '$5.99', oldPrice: null, badge: '2 for $5.99', badgeType: 'primary', image: '/images/deals/monster.png', under20: true },
  { id: 8, name: 'Celsius', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/celsius.png', under20: true },
  { id: 9, name: 'Rockstar Energy', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/rockstar_energy.png', under20: true },
  { id: 10, name: 'Sparkling Ice', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/sparkling_ice.png', under20: true },
  { id: 11, name: 'Gatorade 28 oz', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/gatorade_28_oz.png', under20: true },
  { id: 12, name: 'Pepsi Co Deal', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/pepsi_co_deal.png', under20: true },
  { id: 13, name: 'Brisk', category: 'Soda & Energy', price: '$2.99', oldPrice: null, badge: '2 for $2.99', badgeType: 'primary', image: '/images/deals/brisk.png', under20: true },
  { id: 14, name: 'Calypso', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/calypso.png', under20: true },
  { id: 15, name: 'Six Pack of Soda', category: 'Soda & Energy', price: '$10.99', oldPrice: null, badge: '6 for $10.99', badgeType: 'primary', image: '/images/deals/six_pack_of_soda.jpg', under20: true },
  { id: 16, name: 'Phorm Energy', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/phorm_energy.png', under20: true },
  { id: 17, name: 'CBD', category: 'Essentials', price: '$8.99', oldPrice: null, badge: '2 for $8.99', badgeType: 'primary', image: '/images/deals/cbd.png', under20: true },
  { id: 18, name: 'Cut Water', category: 'Spirits', price: '$9.99', oldPrice: null, badge: '3 for $9.99', badgeType: 'primary', image: '/images/deals/cut_water.png', under20: true },
  { id: 19, name: 'Starbox', category: 'Soda & Energy', price: '$7.99', oldPrice: null, badge: '2 for $7.99', badgeType: 'primary', image: '/images/deals/starbox.png', under20: true },
  { id: 20, name: 'Special Deal', category: 'Essentials', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/special_deal.png', under20: true },
  { id: 21, name: 'Rye RTD', category: 'Spirits', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/rye_rtd.png', under20: true },
  { id: 22, name: 'On The Rocks', category: 'Spirits', price: '$20.99', oldPrice: null, badge: '2 for $20.99', badgeType: 'primary', image: '/images/deals/on_the_rocks.png', under20: false },
  { id: 23, name: 'Vibe', category: 'Soda & Energy', price: '$6.99', oldPrice: null, badge: '2 for $6.99', badgeType: 'primary', image: '/images/deals/vibe.png', under20: true },
  { id: 24, name: 'Visvita Savila', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/visvita_savila.png', under20: true },
  { id: 25, name: 'Parrot Juice', category: 'Soda & Energy', price: '$4.99', oldPrice: null, badge: '2 for $4.99', badgeType: 'primary', image: '/images/deals/parrot_juice.png', under20: true },
  { id: 26, name: 'California Life', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/california_life.png', under20: true },
  { id: 27, name: 'BuzzBallz Cocktails', category: 'Spirits', price: '$7.99', oldPrice: null, badge: '2 for $7.99', badgeType: 'primary', image: '/images/deals/buzzballz_cocktails.png', under20: true },
  { id: 28, name: 'Langers 15.2 oz', category: 'Soda & Energy', price: '$3.99', oldPrice: null, badge: '2 for $3.99', badgeType: 'primary', image: '/images/deals/langers_15_2_oz.png', under20: true },
  { id: 29, name: 'Zyn', category: 'Essentials', price: '$45.99', oldPrice: null, badge: '5 for $45.99', badgeType: 'error', image: '/images/deals/zyn.png', under20: false },

  // 30-32 Single item deals
  { id: 30, name: 'Daou Cab Sauv', category: 'Wine', price: '$29.99', oldPrice: null, badge: 'Special Select', badgeType: 'primary', image: '/images/deals/daou_cab_sauv.png', under20: false },
  { id: 31, name: 'Frank Family Cab Sauv', category: 'Wine', price: '$50.99', oldPrice: null, badge: 'Reserve Cellar', badgeType: 'primary', image: '/images/deals/frank_family_cab_sauv.png', under20: false },
  { id: 32, name: 'Jack Single Barrel', category: 'Spirits', price: '$45.99', oldPrice: null, badge: 'Limited Release', badgeType: 'primary', image: '/images/deals/jack_single_barrel.png', under20: false },

  // 33-49 Discounted items with regular & NRS Go pricing
  { id: 33, name: "Don Julio 70's", category: 'Spirits', price: '$84.99', oldPrice: '$99.99', badge: 'Save $15.00', badgeType: 'error', badge2: 'Go: $87.99', badge2Type: 'primary', image: '/images/deals/don_julio_70_s.png', under20: false },
  { id: 34, name: 'Veuve Clicquot Brut', category: 'Wine', price: '$74.99', oldPrice: '$79.99', badge: 'Save $5.00', badgeType: 'error', badge2: 'Go: $77.39', badge2Type: 'primary', image: '/images/deals/veuve_clicquot_brut.png', under20: false },
  { id: 35, name: 'La Crema Pinot Noir', category: 'Wine', price: '$20.99', oldPrice: '$24.99', badge: 'Save $4.00', badgeType: 'error', badge2: 'Go: $21.74', badge2Type: 'primary', image: '/images/deals/la_crema_pinot_noir.png', under20: false },
  { id: 36, name: "Tito's 1.75L", category: 'Spirits', price: '$34.99', oldPrice: '$41.99', badge: 'Save $7.00', badgeType: 'error', badge2: 'Go: $36.25', badge2Type: 'primary', image: '/images/deals/tito_s_1_75l.png', under20: false },
  { id: 37, name: 'Kendall Jackson Sauv Blanc', category: 'Wine', price: '$12.99', oldPrice: '$13.99', badge: 'Save $1.00', badgeType: 'error', badge2: 'Go: $13.41', badge2Type: 'primary', image: '/images/deals/kendall_jackson_sauv_blanc.png', under20: true },
  { id: 38, name: 'Edna Valley Pinot Noir', category: 'Wine', price: '$21.99', oldPrice: '$23.99', badge: 'Save $2.00', badgeType: 'error', badge2: 'Go: $22.71', badge2Type: 'primary', image: '/images/deals/edna_valley_pinot_noir.png', under20: false },
  { id: 39, name: 'Stags Leap Cab Sauv', category: 'Wine', price: '$59.99', oldPrice: '$79.99', badge: 'Save $20.00', badgeType: 'error', badge2: 'Go: $62.39', badge2Type: 'primary', image: '/images/deals/stags_leap_cab_sauv.png', under20: false },
  { id: 40, name: 'Stags Leap Artemis', category: 'Wine', price: '$69.99', oldPrice: '$79.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $72.39', badge2Type: 'primary', image: '/images/deals/stags_leap_artemis.png', under20: false },
  { id: 41, name: 'Raymond Cab Sauv', category: 'Wine', price: '$29.99', oldPrice: '$39.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $31.19', badge2Type: 'primary', image: '/images/deals/raymond_cab_sauv.png', under20: false },
  { id: 42, name: 'Markham Napa Valley Cab', category: 'Wine', price: '$49.99', oldPrice: '$54.99', badge: 'Save $5.00', badgeType: 'error', badge2: 'Go: $51.64', badge2Type: 'primary', image: '/images/deals/markham_napa_valley_cab.png', under20: false },
  { id: 43, name: 'Caymus Anniversary', category: 'Wine', price: '$89.99', oldPrice: '$109.99', badge: 'Save $20.00', badgeType: 'error', badge2: 'Go: $93.29', badge2Type: 'primary', image: '/images/deals/caymus_anniversary.png', under20: false },
  { id: 44, name: 'Caymus California Cab', category: 'Wine', price: '$59.99', oldPrice: '$69.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $62.09', badge2Type: 'primary', image: '/images/deals/caymus_california_cab.png', under20: false },
  { id: 45, name: 'Meiomi Pinot Noir', category: 'Wine', price: '$19.99', oldPrice: '$29.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $20.89', badge2Type: 'primary', image: '/images/deals/meiomi_pinot_noir.png', under20: true },
  { id: 46, name: 'Fireball 750ml', category: 'Spirits', price: '$16.99', oldPrice: '$18.99', badge: 'Save $2.00', badgeType: 'error', badge2: 'Go: $17.56', badge2Type: 'primary', image: '/images/deals/fireball_750ml.png', under20: true },
  { id: 47, name: 'Skrew Ball 1L', category: 'Spirits', price: '$19.99', oldPrice: '$29.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $20.89', badge2Type: 'primary', image: '/images/deals/skrew_ball_1l.png', under20: true },
  { id: 48, name: 'Moët Brut', category: 'Wine', price: '$59.99', oldPrice: '$69.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $62.09', badge2Type: 'primary', image: '/images/deals/mo_t_brut.png', under20: false },
  { id: 49, name: 'Cîroc', category: 'Spirits', price: '$19.99', oldPrice: '$29.99', badge: 'Save $10.00', badgeType: 'error', badge2: 'Go: $20.89', badge2Type: 'primary', image: '/images/deals/c_roc.png', under20: true },
]

function Deals() {
  const [activeFilter, setActiveFilter] = useState('All Deals')
  const [visibleCount, setVisibleCount] = useState(12)

  // Filter logic
  const filteredDeals = dealsData.filter((deal) => {
    if (activeFilter === 'All Deals') return true
    if (activeFilter === 'Under $20') return deal.under20
    return deal.category === activeFilter
  })

  const currentDeals = filteredDeals.slice(0, visibleCount)

  return (
    <div className="deals-page">
      <div className="deals-page__inner">
        {/* Page Header */}
        <div className="deals-header">
          <div>
            <h1 className="deals-header__title font-display-lg">This Week's Deals</h1>
            <p className="deals-header__date font-body-lg">
              <span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', marginRight: '6px' }}>event</span>
              Valid for limited time.
            </p>
          </div>
          <div className="deals-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`deals-filter font-label-sm ${activeFilter === f ? 'deals-filter--active' : ''}`}
                onClick={() => {
                  setActiveFilter(f)
                  setVisibleCount(12) // Reset visible count on filter change
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Deal Hero */}
        <section className="deal-hero">
          <div className="deal-hero__gradient" />
          <img src={FEATURED_BG} alt="Featured Deal" className="deal-hero__bg" />
          <div className="deal-hero__content">
            <div className="deal-hero__info">
              <span className="deal-hero__badge font-label-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '4px' }}>star</span>
                Featured Deal
              </span>
              <h2 className="deal-hero__name font-headline-lg">Jack Daniel's Single Barrel</h2>
              <p className="deal-hero__desc font-body-md">
                Selected by our master tasters, this unique single barrel whiskey is bottled at 94 proof with a robust character and rich notes of toasted oak, sweet caramel, and warming spice.
              </p>
              <div className="deal-hero__pricing">
                <div className="deal-hero__prices">
                  <span className="deal-hero__old-price font-body-md">$59.99</span>
                  <span className="deal-hero__new-price font-display-lg">$45.99</span>
                </div>
                <div className="deal-hero__save font-label-sm">Save $14.00</div>
              </div>
              <button className="btn btn--primary deal-hero__cta font-label-sm">Add to Cart</button>
            </div>
            <div className="deal-hero__bottle-wrap">
              <div className="deal-hero__glow" />
              <img src="/images/deals/jack_single_barrel.png" alt="Jack Daniel's Single Barrel Bottle" className="deal-hero__bottle" onError={(e) => { e.target.onerror = null; e.target.src = '/images/watermark.png'; }} />
            </div>
          </div>
        </section>

        {/* Deals Grid */}
        <div className="deals-grid">
          {currentDeals.map((deal, i) => (
            <article key={deal.id} className="deal-card fade-in">
              {/* Badges */}
              {(deal.badge || deal.badge2) && (
                <div className="deal-card__badges">
                  {deal.badge && (
                    <span className={`deal-card__badge deal-card__badge--${deal.badgeType} font-label-sm`}>
                      {deal.badge}
                    </span>
                  )}
                  {deal.badge2 && (
                    <span className={`deal-card__badge deal-card__badge--${deal.badge2Type} font-label-sm`}>
                      {deal.badge2}
                    </span>
                  )}
                </div>
              )}
              {/* Image */}
              <div className="deal-card__image-wrap">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="deal-card__image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/watermark.png'; // Fallback to store logo watermark
                  }}
                />
              </div>
              {/* Content */}
              <div className="deal-card__body">
                <div className="deal-card__meta">
                  <span className="deal-card__category">{deal.category}</span>
                  {deal.oldPrice && <span className="deal-card__old-price">{deal.oldPrice}</span>}
                </div>
                <h3 className="deal-card__name">{deal.name}</h3>
                <div className="deal-card__footer">
                  <span className="deal-card__price font-headline-lg">{deal.price}</span>
                  <button className="deal-card__add" aria-label={`Add ${deal.name} to cart`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredDeals.length && (
          <div className="deals-load-more">
            <button className="deals-load-more__btn" onClick={() => setVisibleCount((prev) => prev + 12)}>
              <span className="font-label-sm">Load More Deals</span>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Deals
