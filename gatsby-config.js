module.exports = { 
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                minify: false,
            },
        },
        `gatsby-plugin-sass`,
    ],
    siteMetadata: {
        title: "Atelier Architecture Keutgens",
    },
    pathPrefix: "/atelier_keutgens",
}