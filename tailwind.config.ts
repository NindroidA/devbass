/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { addDynamicIconSelectors } from '@iconify/tailwind';

const TAILWIND_PLUGINS = [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
];

const CUSTOM_PLUGINS = [addDynamicIconSelectors()];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Oswald', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            colors: {
                'darkmode': "#1a1c24",
                'lightmode': {
                    default: '#c8c8c8',
                    light: '#c8c8c8',
                    dark: '#ededed',
                },
                'red': '#eb3838',
                'crimson': '#de1f3f',
                'malachite': '#5ae68d',
                'turqoise': '#2aeba7',
                'aqua': '#3ef7df',
                'blue': {
                    default: '#1ca0ff',
                    light: '#36daff',
                    dark: '#1d4ef0',
                },
                'blurple': '#5d2dfa',
                'purple': {
                    default: '#a211f0',
                    light: '#8952e3',
                    dark: '#740ee8',
                },
                'magenta': {
                    default: '#ed1cb9',
                    light: '#e82edf',
                    dark: '#bf2cf5',
                },
                'pink': '#ed2b96',
            },
        },
    },
    plugins: [...TAILWIND_PLUGINS, ...CUSTOM_PLUGINS],
};
