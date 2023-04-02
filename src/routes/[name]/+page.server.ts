import { error } from '@sveltejs/kit';
import getName, { getImage } from '$lib/database/utils';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }: { params: { name: string }; }) {
    const route: string = params.name;
    try {
        let databaseName = getName(route);
        databaseName.image = getImage(route);
        if (databaseName) return databaseName;
        throw error(404, 'Data not found');
    } catch (e) {
        throw error(404, 'Data not found');
    }
}