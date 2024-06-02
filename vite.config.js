import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default {
    build: {
        outDir: '../dist'
    },
    root: 'src/',
    publicDir: '../static/',
    base: './',
    plugins: [
        wasm(),
        topLevelAwait()
    ]
}