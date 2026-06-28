import "./Gallery.css";

function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg.webp",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
    "/images/gallery13.jpg",
    "/images/gallery14.jpg",
     "/images/gallery15.jpg", 
     "/images/gallery16.jpg",
      "/images/gallery17.jpg", 
       "/images/gallery18.jpg",
        "/images/gallery19.jpg", 
        "/images/gallery20.jpg",  
         "/images/gallery21.jpg",
         "/images/gallery22.jpg",
         "/images/gallery23.jpg",
         "/images/gallery24.jpg",
         "/images/gallery25.jpg", 
         "/images/gallery26.jpg",
         "/images/gallery27.jpg", 
         "/images/gallery28.jpg",   
         "/images/gallery29.jpg", 
         "/images/gallery30.jpg", 
         "/images/gallery31.jpg",   
         "/images/gallery32.jpg", 
         "/images/gallery33.jpg",
         "/images/gallery34.jpg",
         "/images/gallery35.jpg",
         "/images/gallery36.jpg",
         "/images/gallery37.jpg", 
         "/images/gallery38.jpg", 
         "/images/gallery39.jpg", 
         "/images/gallery40.jpg",
         "/images/gallery41,jpg", 
         "/images/gallery42.jpg",
         "/images/gallery43.jpg", 
         "/images/gallery44.jpg",  
         "/images/gallery45.jpg", 
         "/images/gallery46.jpg", 
         "/images/gallery47.jpg",
         "/images/gallery48.jpg",
         "/images/gallery49.jpg",
         "/images/gallery50.jpg",
         "/images/gallery51.jpg",                   

         
  
  ];

  return (
    <section className="gallery-page">
      <h1>My Gallery</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;