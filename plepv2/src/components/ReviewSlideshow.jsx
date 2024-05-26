import { Carousel } from 'flowbite-react'

export const ReviewSlideshow = ({ images }) => {
  return (
    <div>
      <Carousel
        indicators={true}
        draggable={false}
        id='slideshow'
        autoPlay={false}
        pauseOnHover={true}
        wrap='wrap'
        infinite='true'
        style={{ alignItems: 'center', justifyContent: 'flex-start' }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt='image' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
