import { resolve } from 'path';

export default {
    root: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                booking: resolve(__dirname, 'booking.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true
    }
}

