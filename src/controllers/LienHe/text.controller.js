const LienHe = require("../../model/LienHe");


module.exports = {


    // đã thay
    getOneLienHe: async (req, res) => {
        try {
            const lienHe = await LienHe.findOne({});
            res.status(200).json({data: lienHe});
        } catch (error) {
            res.json({ message: error });
        }
    },

    updateLienHe: async (req, res) => {
        try {
            const { _id, text } = req.body;
            const updateLienHe = await LienHe.updateOne({ _id: _id }, { text: text });
            if (updateLienHe) {
                res.status(200).json({ message: "Update LienHe thành công", data: updateLienHe });
            } else {
                res.status(404).json({ message: "Update LienHe thất bại" });
            }
        } catch (error) {
            res.json({ message: error });
        }
    },

    createLienHe: async (req, res) => {
        try {
            const { text } = req.body;
            const newLienHe = new LienHe({ text });
            await newLienHe.save();
            res.status(200).json({ message: "Thêm LienHe thành công", data: newLienHe });
        } catch (error) {
            res.json({ message: error });
        }
    },
}