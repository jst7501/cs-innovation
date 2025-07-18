/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cs-innovation.vercel.app", // ✅ 여기에 본인 사이트 URL 적으세요
  generateRobotsTxt: true, // (선택) robots.txt 생성
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  trailingSlash: true,
};
