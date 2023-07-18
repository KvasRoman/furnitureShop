
export default class homePageSlide {
    constructor(
        public primary: {
            imageUrl: string,
            link: string | undefined
        },
        public secondary: {
            imageUrl: string,
            roomType: string,
            title: string,
            link: string | undefined
        }
    ) { }
}