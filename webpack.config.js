const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/app/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
    },
    devServer:{
        port:3000,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}