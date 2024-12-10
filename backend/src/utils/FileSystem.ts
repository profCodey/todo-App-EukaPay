import fs from 'fs/promises';
import path from 'path';

// const DATA_FILE = path.resolve(__dirname, '../../data/todos.json');

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.resolve(__dirname, '../../data/todos.json');

export class FileSystem {
    static async readData(): Promise<any[]> {
        try {
            const data = await fs.readFile(DATA_FILE, 'utf-8');
            return JSON.parse(data || '[]');
        } catch (err) {
            if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
                await FileSystem.writeData([]);
                return [];
            }
            throw err;
        }
    }

    static async writeData(data: any[]): Promise<void> {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    }
}
