/**
 * 
 */
const errorHandler = (error, request, response, next) => {
    console.log('hello from error handling middleware!');
    console.log(error);
    next();
}

export default errorHandler;