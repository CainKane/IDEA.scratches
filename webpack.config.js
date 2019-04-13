//入口文件JSON;
const entJSON = [
    "./js/index.js",
    "./js/React.Components.js",
];
//入口文件处理函数
function ent (file) {
    return entJSON;
};

module.exports = {
    mode : [
        "development" ,
        "production",
    ][0] ,
    entry : ent() ,
    output : {
        path : `` ,
        filename : `${ __dirname }\\bundles\\${ __filename }` ,
    } ,
    modlue : {
        rules : [
            {
                test : /\.css$/ ,
                use : [
                    "style-loader" ,
                    "css-loader",
                ],
            } ,
            {
                test : /\.less$/ ,
                use : [
                    "style-loader" ,
                    "css-loader" ,
                    {
                        loader : "less-loader" ,
                        options : {
                            javascriptEnabled : true,
                        },
                    },
                ] ,
            } ,
            {
                test : /\.(js|jsx)$/ ,
                use : [
                    "babel-loader",
                ] ,
            } ,
            {
                test : /\.(png|jpg|jpeg|gif|bmp)$/ ,
                use : [
                    {
                        loader : "file-loader" ,
                        
                    },
                ],
            },
        ],
    },
};