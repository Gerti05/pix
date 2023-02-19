function ImageShow({ image }) {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={image.urls.small} alt={image.alt_description} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImageShow;