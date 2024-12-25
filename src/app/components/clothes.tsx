import { productDataNew } from "@/app/DataBase/Database";

export default function ClothesCad() {
    return (
        <div className="w-full p-4 py-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
                {productDataNew.map((product: any) => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-auto"
                        />
                        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                        <p className="text-gray-600">Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
