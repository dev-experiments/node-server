const config = require('./../server-config');
let debug = {};
debug.report = function (err, req, res, next) {
    // Do logging and user-friendly error message display    
    //res.redirect('/public/500.html')  
    if (res.status == 500) {
        console.log(err.stack);
        let options = {
            headers: {
                'err-msg': err.message,
                'err-info': encodeURIComponent(err.stack)
            }
        };
        res.sendFile(config.server.public_dir + '/html/errors/error-500.html', options);
        //res.redirect('/public/error-500.html')  
    }else{
        next(err);
    }
   //next(err);
    //res.json({ code:res.status, message: err.message });
};

module.exports = debug;
/*
200- OK; Standard response for successful HTTP requests
201- Created; Request has been fulfilled. New resource created
204- No Content; Request processed. No content returned
301- Moved Permanently; This and all future requests directed to the given URI
304- Not Modified; Resource has not been modified since last requested
400- Bad Request; Request cannot be fulfilled due to bad syntax
401- Unauthorized; Authentication is possible, but has failed
403- Forbidden; Server refuses to respond to request
404- Not Found; Requested resource could not be found
500- Internal Server Error; Generic error message when server fails
501- Not Implemented; Server does not recognize method or lacks ability to fulfill
503- Service Unavailable; Server is currently unavailable

*/