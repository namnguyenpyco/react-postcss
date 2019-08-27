module.exports = {
    plugins: [
        require('postcss-import'),
        require('lost'),

        require('precss'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-css-variables'),
        require('postcss-functions'),
        require('cssnano')({
            preset: 'default',
        })
    ],
};

