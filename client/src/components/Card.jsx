import toast from "react-hot-toast";

function Card({ data }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <img 
          src={data.imageUrl} 
          alt={data.name} 
          className="rounded-xl object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{data.name}</h2>
        <p className="text-sm text-gray-500">{data.productType}</p>
        <p className="text-sm">{data.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-semibold text-primary">
            ${data.price.toFixed(2)}
          </span>
          <button className="btn btn-primary btn-sm" onClick={()=>toast.success("Order placed")} >Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
