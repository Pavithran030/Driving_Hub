import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars roughly (since we can't easily use dotenv in simple script without dependency, we'll parse .env manually if needed or just trust the build env)
// For simplicity in this project context, we'll try to read .env
let siteUrl = 'https://www.murugandrivinginstitute.in'; // Fallback

try {
    const envPath = path.resolve(__dirname, '../.env');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf-8');
        const match = envConfig.match(/VITE_SITE_URL=(.*)/);
        if (match && match[1]) {
            siteUrl = match[1].trim();
        }
    }
} catch (e) {
    console.log('Could not read .env, using default URL');
}

console.log(`Generating sitemap for: ${siteUrl}`);

const routes = [
    '/',
    '/about',
    '/services',
    '/contact',
    // Add other static routes here as they are added
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
        .map((route) => {
            return `
  <url>
    <loc>${siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
        })
        .join('')}
</urlset>`;

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const publicDir = path.resolve(__dirname, '../public');

// Ensure public dir exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('✅ sitemap.xml generated');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✅ robots.txt generated');
