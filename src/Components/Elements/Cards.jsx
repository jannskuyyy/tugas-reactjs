export default function Cards({ image, title, brand, price, description }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl h-fit">
      <div className="w-full h-80">
        <img
          className="rounded-md w-full h-64 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="card-body h-64">
        <h1 className="font-bold text-xl">{brand}</h1>
        <div className="card-actions flex justify-between">
          <div className="font-semibold">${price}</div>
          <button className="btn btn-primary">Buy now !!</button>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
