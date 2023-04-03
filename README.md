# Name card
Technology used: SvelteKit, Typescript, Tailwind

## Background
I had this idea to create an online namecard where you people can just check you on a website instead of handing them a paper. Ideally, this namecard would be nice for a company or organization with multiple staffs. So they can just go to the same website and get their data with a /\[name] route.

This was my first time using TS and also Tailwind. Additionally, this was my second time learning Sveltekit.

## Process
The frontend is divided by 3 components: `/src/components/(background, details, foreground).svelte`, where `/main.svelte` wrapping all 3 of those together.

For the 'backend' part is rather simple, `/routes/[name]/+page.server.ts` searches your name from the \[name] route in `/src/database/names.ts` then it will put the props accordingly to `/main.svelte`. If your name is not found then a 404 page show instead.

## How to custom
In `/src/lib/database/names`, add accordingly with your data on the const names.

### Routes
/\[name] is the route to see your data. To get your data and your image is separated with a function in `/lib/database/utils`. 