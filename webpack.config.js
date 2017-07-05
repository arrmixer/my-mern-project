/**
 * Created by Angel on 7/4/17.
 */
module.exports = {
    entry: './src/App.jsx',
    output: {
        path: '/Users/Angel/WebstormProjects/myMern/static',
        filename: "app.bundle.js"
    },
    module: {
        loaders:[
            {
                test:/\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
        ]
    }
};

