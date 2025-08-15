import Card from "../components/Card";
import { ProductDetails } from "../Utils/Resource";

function Items() {
  const items = ProductDetails();

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
}

export default Items;
