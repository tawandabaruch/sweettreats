import React, { useState } from 'react';
import './admindashboard.css';

function AdminDashboard() {
  const [cakeName, setCakeName] = useState('');
  const [cakeDescription, setCakeDescription] = useState('');
  const [cakeImage, setCakeImage] = useState('');
  const [cakePrice, setCakePrice] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // submit cake information to server
    // reset form fields
    setCakeName('');
    setCakeDescription('');
    setCakeImage('');
    setCakePrice('');
  };

  const handleGallerySelect = (e) => {
    const files = e.target.files;
    const images = [...galleryImages];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        images.push(reader.result);
        setGalleryImages(images);
      };
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Add a new cake</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Cake Name:
          <input
            type="text"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={cakeDescription}
            onChange={(e) => setCakeDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={cakePrice}
            onChange={(e) => setCakePrice(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={cakeImage}
            onChange={(e) => setCakeImage(e.target.value)}
          />
        </label>
        <button type="submit">Add Cake</button>
      </form>
      <div className="gallery">
        <h2>Gallery</h2>
        {galleryImages.map((cakeGalleryImage, index) => (
          <img src={cakeGalleryImage} key={index} alt={`A cake ${index}`} />
        ))}
        <input type="file" accept="image/*" onChange={handleGallerySelect} />
        <button>Add to Gallery</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
