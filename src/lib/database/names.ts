type DetailsTypes = {
    icon: string;
    display: string;
    link: string;
    title?: string;
};

interface Datas {
    name: string;
    role: string;
    place: string;
    image?: string;
    colors: string;
    detailsArray: DetailsTypes[];
    abbreviation?: string;
    backgroundCSS?: string;
}

interface Names {
    route: string;
    datas: Datas;
}

const names: Names[] = [
    {
        route: 'sarah',
        datas: {
            name: "Sarah Tanujaya",
            role: "Full Stack Developer",
            place: "Self-learner",
            detailsArray: [
                {
                    icon: "website",
                    display: "Check our my portofolio website!",
                    link: "https://saraht04.github.io/",
                    title: "Sarah's portofolio website",
                },
                {
                    icon: "github",
                    display: "sarahT04",
                    link: "sarahtanujaya@gmail.com",
                    title: "sarahT04",
                },
                {
                    icon: "email",
                    display: "sarahtanujaya@gmail.com",
                    link: "mailto:sarahtanujaya@gmail.com",
                    title: "Email me!",
                },
            ],
            colors: '--foreground: #FF8B13; --secondary: #ECECEC; --tertiary: #F273E6; --background: #CF4DCE;',
            backgroundCSS: `background: rgb(207, 77, 206);
            background: radial-gradient(
                circle,
                rgba(207, 77, 206, 0.745) 0%,
                rgba(255, 139, 19, 0.734) 100%
            );`
        },

    },
]

export default names;
export type { Datas };
