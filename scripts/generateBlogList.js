import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content/blog');
const outputFilePath = path.join(__dirname, '../data/blogPosts.js');

function getBlogPosts() {
    const files = fs.readdirSync(contentDir);
    const blogPosts = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(contentDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);
            return {
                title: data.title || '',
                date: data.date || '',
                slug: data.slug || file.replace('.md', ''),
                image: data.image || '',
                description: data.description || '',
            };
        });

    return blogPosts;
}

function generateBlogList() {
    const blogPosts = getBlogPosts();

    const outputContent = `export const blogPosts = ${JSON.stringify(blogPosts, null, 2)};`;

    fs.writeFileSync(outputFilePath, outputContent, 'utf-8');
    console.log(blogPosts.length + ' blog entries generated.');
}

generateBlogList();