module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Dra Jury Ocampo",
    titleTemplate: "%s · Dra Jury Ocampo",
    description:
      "Servicios de psicología para niños, jóvenes y adultos.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "./images/icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
