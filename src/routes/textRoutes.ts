import { Router } from "express";
import { generateTextController} from "../controller/textGenerate"; 

const router = Router();

router.post('/generate-image', generateTextController);

export default router;
