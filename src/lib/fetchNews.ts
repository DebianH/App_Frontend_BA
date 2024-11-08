export async function getArticles() {
    const API_KEY = '0b8856e329bd4c5b8a93f99094102425';
    const GET_News = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    const rawData = await fetch(GET_News);

    if (!rawData.ok) {
        throw new Error(`HTTP error! status: ${rawData.status}`);
    }

    const News = await rawData.json();

    type Article = {
        title: string;
        content: string;
        urlToImage: string;
    };

    return News.articles.map((item: Article) => {
        const { title, content, urlToImage } = item;
        return {
            title,
            content,
            image: urlToImage,
        };
    });
}
