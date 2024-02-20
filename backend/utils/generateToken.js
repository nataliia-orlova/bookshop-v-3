import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    //  create the token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '300d',
    });

    //  set JWT as http-only cookie instead of storing it in local storage on the client
    res.cookie('jwt', token, {
        httpOnly: true,
        //  set only true for production
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 300 * 24 * 60 * 60 * 1000, //   in ms
    });
};

export default generateToken;
