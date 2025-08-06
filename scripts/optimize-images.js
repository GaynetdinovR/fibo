import sharp from "sharp";
import fs from "fs/promises";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG = {
	quality: 75,
	targetExtensions: ['.jpg', '.jpeg', '.png'],
	deleteOriginals: true,
	concurrency: 10
};

let stats = {
	processed: 0,
	skipped: 0,
	errors: 0,
	startTime: Date.now()
};

const processImage = async (filePath) => {
	try {
		const outputPath = filePath.replace(/(\.\w+)$/, '.webp');

		try {
			await fs.access(outputPath);
			console.log(`Skipped (exists): ${filePath}`);
			stats.skipped++;
			return;
		} catch {}

		await sharp(filePath)
			.webp({ quality: CONFIG.quality })
			.toFile(outputPath);

		if (CONFIG.deleteOriginals) {
			await fs.unlink(filePath);
		}

		stats.processed++;
		console.log(`Optimized: ${filePath} → ${outputPath}`);
	} catch (error) {
		stats.errors++;
		console.error(`Error processing ${filePath}:`, error.message);
	}
};

const processDirectory = async (directory) => {
	try {
		const files = await fs.readdir(directory);

		const chunks = [];
		for (let i = 0; i < files.length; i += CONFIG.concurrency) {
			chunks.push(files.slice(i, i + CONFIG.concurrency));
		}

		for (const chunk of chunks) {
			await Promise.all(chunk.map(async (file) => {
				const fullPath = join(directory, file);
				const stat = await fs.stat(fullPath);

				if (stat.isDirectory()) {
					await processDirectory(fullPath);
				} else if (CONFIG.targetExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
					await processImage(fullPath);
				}
			}));
		}
	} catch (error) {
		console.error(`Error reading directory ${directory}:`, error.message);
	}
};

const main = async () => {
	try {
		const targetDir = join(__dirname, '../client/public');
		console.log('Starting image optimization...');
		console.log(`Target directory: ${targetDir}`);

		await processDirectory(targetDir);

		const executionTime = ((Date.now() - stats.startTime) / 1000).toFixed(2);
		console.log(`
		  Optimization complete!
		  Execution time: ${executionTime}s
		  Processed: ${stats.processed}
		  Skipped: ${stats.skipped}
		  Errors: ${stats.errors}
		`);
	} catch (error) {
		console.error('Fatal error:', error.message);
		process.exit(1);
	}
};


main();