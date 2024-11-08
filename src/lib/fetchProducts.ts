export async function getCategories() {
    const GET_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";

    try {
        const response = await fetch(GET_CATEGORIES);

        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const categories = await response.json();
        type Category = {
            id: number;
            name: string;
            image: string;
            creationAt: string;
            updatedAt: string;
        };

        if (!Array.isArray(categories)) {
            throw new Error("Unexpected data format");
        }

        return categories.slice(0, 5).map((item: Category) => {
            const { id, name, image, creationAt, updatedAt } = item;
            return { id, name, image, creationAt, updatedAt };
        });
    } catch (error) {
        console.log("Failed to fetch categories:", error);
        return [];
    }
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