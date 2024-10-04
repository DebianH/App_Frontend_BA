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