export default function handler(req, res) {
  const { title, excerpt, image, slug } = req.query;

  if (!title || !excerpt || !image || !slug) {
    return res.status(400).send("Missing required parameters");
  }

  const ogImage = `https://handa-pilipinas-frontend.vercel.app/images/articles/${image}`;
  const articleUrl = `https://handa-pilipinas-frontend.vercel.app/view-article/${slug}`;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Pinoy-Made Tech on Disaster Risk Reduction</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Pinoy-Made Tech on Disaster Risk Reduction" />
    <meta property="og:description" content="Explore locally developed technologies showcased at the Handa Pilipinas Expo 2023, aimed at disaster risk reduction." />
    <meta property="og:image" content="https://handa-pilipinas-frontend.vercel.app/images/articles/3D.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="https://handa-pilipinas-frontend.vercel.app/view-article/ready-for-adoption-pinoy-made-tech-on-disaster-risk-reduction-at-handa-pilipinas-expo-2023" />
  </head>
  <body>
    <script>
      window.location.href = "https://handa-pilipinas-frontend.vercel.app/view-article/ready-for-adoption-pinoy-made-tech-on-disaster-risk-reduction-at-handa-pilipinas-expo-2023";
    </script>
  </body>
</html>

  `);
}
