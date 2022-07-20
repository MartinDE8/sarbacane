let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.setPublicPath('./');

const CopyWebpackPlugin  = require('copy-webpack-plugin');

mix.extract(['lodash'])
    .js('resources/scripts/main.js', 'public/assets/scripts')
    .disableNotifications()
    .version();

mix.sass('resources/styles/app.scss', 'public/assets/styles')
    .options({processCssUrls: true})
    .purgeCss({
        content: [`public/*.html`],
        whitelistPatterns: [/hljs/],
    })
    .disableNotifications();

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/i,
                enforce: "pre",
                use: [
                    {
                        loader: "import-glob-loader",
                    }
                ]
            },
            {
                test: /.js/,
                exclude: [/node_modules\/(?!(dom7)\/).*/, /\.test\?$/],
                enforce: "pre",
                use: [
                    {
                        loader: "import-glob-loader",
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: __dirname + '/resources/styles/fonts/',
                to: __dirname + `/public/assets/styles/fonts/`
            }
        ]),
    ]
});

mix.version();
