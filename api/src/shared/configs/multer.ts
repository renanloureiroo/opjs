import path from 'node:path';
import multer, { Options } from 'multer';

const options: Options = {
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};

export { options };
