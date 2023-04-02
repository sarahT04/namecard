import { error } from '@sveltejs/kit';
import getName, { getImage } from '$lib/database/utils';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    try {
        let databaseName = getName('sarah');
        databaseName.image = getImage('sarah');
        if (databaseName) return databaseName;
        throw error(404, 'Data not found');
    } catch (e) {
        throw error(404, 'Data not found');
    }
}