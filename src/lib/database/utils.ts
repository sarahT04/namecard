import images from "./images";
import names, { type Datas } from "./names";

export default function getName(route: string): Datas {
    return names.filter((name) => name.route === route)[0].datas;
};

export function getImage(route: string): string {
    return images.filter((image) => image.route === route)[0].path;
}
