import express from 'express';
import Student from './model/student.js';

const router = express.Router();
// MONGO QUERIES!!!!
// demographic metrics
router.get('/metrics/demographics', async (req, res) => {
    try {
        const demographics = await Student.aggregate([
            {
                $group: {
                    _id: null,
                    totalStudents: { $sum: 1 },
                    race: { $push: "$race" },
                    ethnicity: { $push: "$ethnicity" },
                    gender: { $push: "$gender" },
                    pronouns: { $push: "$pronouns" },
                    town: { $push: "$town" },
                    state: { $push: "$state" },
                }
            },
            {
                $project: {
                    _id: 0,
                    totalStudents: 1,
                    race: { $arrayToObject: { $map: { input: "$race", as: "r", in: { k: "$$r", v: { $sum: 1 } } } } },
                    ethnicity: { $arrayToObject: { $map: { input: "$ethnicity", as: "e", in: { k: "$$e", v: { $sum: 1 } } } } },
                    gender: { $arrayToObject: { $map: { input: "$gender", as: "g", in: { k: "$$g", v: { $sum: 1 } } } } },
                    pronouns: { $arrayToObject: { $map: { input: "$pronouns", as: "p", in: { k: "$$p", v: { $sum: 1 } } } } },
                    town: { $arrayToObject: { $map: { input: "$town", as: "t", in: { k: "$$t", v: { $sum: 1 } } } } },
                    state: { $arrayToObject: { $map: { input: "$state", as: "s", in: { k: "$$s", v: { $sum: 1 } } } } }
                }
            }
        ]);
        res.json(demographics[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// attendance metrics
router.get('/metrics/attendance', async (req, res) => {
    try {
        const attendance = await Student.aggregate([
            {
                $group: {
                    _id: null,
                    totalStudents: { $sum: 1 },
                    attendance: { $push: "$w1_through_w8_attendance" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalStudents: 1,
                    attendanceByWeek: {
                        $map: {
                            input: { $range: [0, 8] },
                            as: "week",
                            in: {
                                $reduce: {
                                    input: "$attendance",
                                    initialValue: 0,
                                    in: { $sum: ["$$value", { $cond: [{ $eq: [{ $arrayElemAt: ["$$this", "$$week"] }, true] }, 1, 0] }] }
                                }
                            }
                        }
                    }
                }
            }
        ]);
        res.json(attendance[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
