import { Buffer } from 'buffer';

export default function handler(req, res) {
  const { title, excerpt, image, slug } = req.query;

  if (!title || !excerpt || !image || !slug) {
    return res.status(400).send("Missing required parameters");
  }

  const decodedTitle = decodeURIComponent(title);
  const decodedExcerpt = decodeURIComponent(excerpt);
  const ogImage = `https://handa-pilipinas-frontend.vercel.app/images/articles/${image}`;
  const articleUrl = `https://handa-pilipinas-frontend.vercel.app/view-article/${slug}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${decodedTitle}</title>

      <meta property="og:type" content="article" />
  <meta property="og:title" content="Pinoy-Made Tech" />
  <meta property="og:description" content="Explore DRR tech" />
  <meta property="og:image" content="https://handa-pilipinas-frontend.vercel.app/images/articles/3D.jpg" />
  <meta property="og:image:secure_url" content="https://handa-pilipinas-frontend.vercel.app/images/articles/3D.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://handa-pilipinas-frontend.vercel.app/view-article/ready-for-adoption-pinoy-made-tech-on-disaster-risk-reduction-at-handa-pilipinas-expo-2023" />

  <meta http-equiv="refresh" content="0;url=https://handa-pilipinas-frontend.vercel.app/view-article/ready-for-adoption-pinoy-made-tech-on-disaster-risk-reduction-at-handa-pilipinas-expo-2023" />
    </head>
    <body>
      <p>Redirecting to <a href="${articleUrl}">${articleUrl}</a>...</p>
    </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Length", Buffer.byteLength(html, 'utf-8'));
  res.status(200).send(html);
}
