import { Dimensions } from "react-native"

export const Stories = [
    {
        title: 'Afro vibes',
        date: 'Nov 17th, 2020',
        poster: require('./assets/homeMain.jpg'),
        btnTitle: 'Donar',
    },
    {
        title: 'Afro vibes',
        date: 'Nov 17th, 2020',
        poster: require('./assets/imagenHome2.jpg'),
        btnTitle: 'Leer',
    },
    {
        title: 'Afro vibes',
        date: 'Nov 17th, 2020',
        poster: require('./assets/imagenHome3.jpg'),
        btnTitle: 'Ver más',
    },
]

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
export { SCREEN_WIDTH, SCREEN_HEIGHT }