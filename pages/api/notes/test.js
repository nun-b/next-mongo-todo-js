import dbConnect from '../../../utils/dbConnect';

dbConnect();

// DB 연결 함수 : 익명함수, 비동기 함수로 실
export default async (req, res) => {
    res.json({test : 'test'});
}