import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

dbConnect();

// DB 연결 함수 : 익명함수, 비동기 함수로 실
export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            /* READ */
            try {
                // find 에 빈객체를 전송 => 모든 것을 가져 옴
                const notes = await Note.find({});
                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            /* WRITE */
            try {
                const note = await Note.create(req.body);
                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}