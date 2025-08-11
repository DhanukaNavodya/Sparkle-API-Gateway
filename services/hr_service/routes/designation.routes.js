import express from 'express';
import {
  getAllDesignations,
  getDesignationById,
  createDesignation,
  updateDesignation,
  deleteDesignation
} from '../controllers/designation.controller.js';

const router = express.Router();

router.get('/', getAllDesignations);
router.get('/:id', getDesignationById);
router.post('/', createDesignation);
router.put('/:id', updateDesignation);
router.delete('/:id', deleteDesignation);

export default router; 