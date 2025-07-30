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
      <title>${decodeURIComponent(title)}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${decodeURIComponent(title)}" />
      <meta property="og:description" content="${decodeURIComponent(excerpt)}" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="${articleUrl}" />
      <meta http-equiv="refresh" content="0;url=${articleUrl}" />
    </head>
    <body>
      <p>Redirecting to <a href="${articleUrl}">${articleUrl}</a>...</p>
    </body>
    </html>
  `);
}
