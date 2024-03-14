import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/imscc-packager.ts'),
            name: 'ImsccPackager',
            // the proper extensions will be added
            fileName: 'imscc-packager',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['jszip'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    jszip: 'JSZip',
                },
            },
        },
    },
    plugins: [
        dts({
            exclude: ['src/exampleStructure.ts', 'src/demo.ts'],
        }),
    ],
})