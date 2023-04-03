import User from '../models/User.js';
import JoinCode from '../models/JoinCode.js';

/**
 * Randomly generates a String of a particular length.
 * @param {*} length - the length of the random code
 * @returns the generated code
 */
export const generateCode = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export const generateStudentCode = async (request, response, next) => {
    try {
        // get instructor ID from the front end request
        const { id } = req.body;
        
        // generate random 10 character string as code
        const code = generateCode(10);

        // set the role
        const role = 'student';

        // Create expiry date as current date + 7 days
        const currentDate = new Date();
        const expiryDate = new Date();
        expiryDate.setDate(currentDate.getDate() + 7);

        // Create the join code in database
        const joinCode = await JoinCode.create({
            code: code,
            instructorId: id,
            role: role,
            expiryDate: expiryDate
        });

        return res.status(200).json({ result: joinCode });
    } catch (error) {
        next(error);
    }
}

export const generatePreceptorCode = async (request, response, next) => {
    try {
       // get instructor ID from the front end request
       const { id } = req.body;
        
       // generate random 10 character string as code
       const code = generateCode(10);

       // set the role
       const role = 'preceptor';

       // Create expiry date as current date + 7 days
       const currentDate = new Date();
       const expiryDate = new Date();
       expiryDate.setDate(currentDate.getDate() + 7);

       // Create the join code in database
       const joinCode = await JoinCode.create({
           code: code,
           instructorId: id,
           role: role,
           expiryDate: expiryDate
       });

       return res.status(200).json({ result: joinCode });
    } catch (error) {
        next(error);
    }
}
