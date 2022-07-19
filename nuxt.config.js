const pkg = require('./package')
const path = require('path')
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin")
const CKEditorStyles = require("@ckeditor/ckeditor5-dev-utils").styles

export default {
    telemetry: false,
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,600&family=Playfair+Display:wght@400;600;700&display=swap'},
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css'},
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'},
        ],
        script: [
            {src: '/js/bootstrap/bootstrap.bundle.min.js', body: true},
            {src: ' https://code.jquery.com/jquery-3.6.0.min.js', body: true},
            {src: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', body: true}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#3B8070'},

    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/style.css',
        '~/assets/bootstrap/css/bootstrap.min.css',
        '~/assets/bootstrap/css/bootstrap.rtl.min.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {
            src: '~/plugins/ckeditor.js', ssr: false
        }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: ['portal-vue/nuxt'],

    /*
    ** Build configuration
    */
    build: {
        transpile: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],

        plugins: [
            // If you set ssr: true that will cause the following error. This error does not affect the operation.
            // ERROR  [CKEditorWebpackPlugin] Error: No translation has been found for the zh language.
            new CKEditorWebpackPlugin({
                // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
                language: "en",
                additionalLanguages: 'all',
                addMainLanguageTranslationsToAllAssets: true,
            })
        ],

        // If you don't add postcss, the CKEditor css will not work.
        postcss: CKEditorStyles.getPostCssConfig({
            themeImporter: {
                themePath: require.resolve("@ckeditor/ckeditor5-theme-lark")
            },
            minify: true
        }),

        extend(config, ctx) {
            // If you do not exclude and use raw-loader to load svg, the following errors will be caused.
            // Cannot read property 'getAttribute' of null
            const svgRule = config.module.rules.find(item => {
                return /svg/.test(item.test);
            })
            svgRule.exclude = [path.join(__dirname, 'node_modules', '@ckeditor')];

            // add svg to load raw-loader
            config.module.rules.push(
                {
                    test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                    use: ["raw-loader"]
                },
                {
                    test: /\.(webp)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                    ]
                }
            )
        }
    }
}
