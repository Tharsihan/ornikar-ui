/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {

    if (config.env.platform === 'desktop') {
        config.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62';
    } else if (config.env.platform === 'mobile') {
        config.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/103.0.5060.114';


    }

    const webpackConfig = {
        resolve: {extensions: [".ts", ".js", ".tsx", ".jsx"],},
        module: {
            rules: [{test: /\.(ts|tsx)$/, exclude: [/node_modules/], use: [{loader: "ts-loader"}],}, {
                test: /\.feature$/,
                use: [{loader: "@badeball/cypress-cucumber-preprocessor/webpack", options: config,},],
            },],
        },

    };

    on(
        'file:preprocessor',
        webpackPreprocessor({ webpackOptions: webpackConfig })
    );

    return config
}
