export async function getCategories() {

    const GET_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";
    const rawData = await fetch(GET_CATEGORIES);
    const categories = await rawData.json();

    type Category = {
        id: number,
        name: string,
        image: string,
        creationAt: string,
        updatedAt: string,
    };
    // console.log(categories);
    // const { data: categories } = json;

    return categories?.map((item: Category) => {
        const { id, name, image, creationAt, updatedAt } = item;
        return {
            id,
            name,
            image,
            creationAt,
            updatedAt,
        };
    });
}

export async function getContentCategories(id: number) {

    const GET_CONTENT_CATEGORIES = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
    const rawData = await fetch(GET_CONTENT_CATEGORIES);
    const categories = await rawData.json();

    type Product = {
        id: number;
        title: string;
        price: number;
        description: string;
        images: string[];
        creationAt: string;
        updatedAt: string;
        category: {
            id: number;
            name: string;
            image: string;
            creationAt: string;
            updatedAt: string;
        };
    };

    return categories?.slice(0, 5)?.map((item: Product) => {
        const { id, title, images, creationAt, updatedAt } = item;
        return {
            id,
            title,
            images,
            creationAt,
            updatedAt,
        };
    });
}