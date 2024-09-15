"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardContoller_1 = require("../controllers/dashboardContoller");
const router = (0, express_1.Router)();
router.get('/', dashboardContoller_1.getDashboardMetrics);
exports.default = router;
