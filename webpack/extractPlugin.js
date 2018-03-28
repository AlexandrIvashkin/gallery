const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = function(){
	return{
		module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader',
                        	'sass-loader',{ 
                			loader: 'postcss-loader',
                			options: {
                  				ident: 'postcss',
                  				plugins: (loader) => [
                    				require('autoprefixer')()
                			]}
              			}],
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('style.css'),
        ],
    }
}
