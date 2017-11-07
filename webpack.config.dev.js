const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js'),
        vendors: ['react', 'react-dom']
    },
    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'public/js/')
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower-components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "react"],
                        plugins: ["transform-es2015-modules-umd"]
                    }
                },
            },            
        ]
    }
};