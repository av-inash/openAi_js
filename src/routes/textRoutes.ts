import { Router } from "express";
import { generateTextController} from "../controller/textGenerate"; // Adjust the path as necessary

const router = Router();

router.post('/generate-image', generateTextController);

export default router;
