export interface Product {

    image: string;
    title: string;
    category: string;
    colours: number;
    categorySearch: string,
    price: string;
    id: number
}

export const productData: Product[] = [
    
    {
        image: "/shoes/shoe1.webp",
        title: "Nike Air Max Pulse",
        category: "Women's Shoes",
        categorySearch: "kids",
        colours: 2,
        price: "13,995",
        id: 1
    },
    {
        image: "/shoes/imge1.webp",
        title: "Nike Air Max 97 SE",
        category: "Men's Shoes",
        categorySearch: "women",
        colours: 2,
        price: "16,995",
        id: 2
    },
    {
        image: "/shoes/imgeer.webp",
        title: "Air Jordan XXXVII Low PF",
        category: "Men's Basketball Shoes",
        categorySearch: "men",
        colours: 1,
        price: "16,295",
        id: 3
    },
    {
        image: "/shoes/shoe2.webp",
        title: "Nike Dri-FIT Ready",
        category: "Men's Short-Sleeve Fitness Top",
        categorySearch: "men",
        colours: 3,
        price: "2,495",
        id: 4
    },
   ]



















  export const productDataNew : Product[] = [
    {
        image: "/clothes/girl.webp",
        title: "Nike One Leak Protection: Period",
        category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
        categorySearch: "women",
        colours: 2,
        price: "3,395",
        id: 5
    },
    {
        image: "/clothes/neela.webp",
        title: "Nike Wildhorse 8",
        category: "Women's Trail Running Shoes",
        categorySearch: "men",
        colours: 2,
        price: "11,895",
        id: 6
    },
    {
        image: "/clothes/kalu.webp",
        title: "Nike Sportswear",
        category: "Women's Ribbed Jersey Short-Sleeve Top",
        categorySearch: "women",
        colours: 2,
        price: "3,295",
        id: 7
    },
    {
        image: "/clothes/kid.png",
        title: "Nike Outdoor Play",
        category: "Older Kids' Oversized Woven Jacket",
        categorySearch: "kids",
        colours: 1,
        price: "3,295",
        id: 8
    },

   ]