// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardsData
  return (
    <div className={`${className} banner-card-container`}>
      <h1 className="header">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-button" type="button">
        Show More
      </button>
    </div>
  )
}

export default BannerCardItem
