import { Router } from 'express';
import { getTopics ,getsubtopicsdata,updateSubTopics} from '../controllers/topicController.js';
import {auth} from '../middleware/auth.js';
const router = Router();
router.get('/',auth, getTopics);
router.put('/update/:topicId',auth, updateSubTopics);
router.get('/subtopicsdata',auth, getsubtopicsdata);
// router.put('/:topicId/:subTopicId', auth, updateSubTopic);
export default router;
