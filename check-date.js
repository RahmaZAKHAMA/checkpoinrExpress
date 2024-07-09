const checkdate=(req,res,next)=>{
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
    if (day>=1 && day <=5 && hour >= 9 && hour <+ 17) {
      next();
    } else {
        res.send('Sorry the web application not available on this date');
    }
}
module.exports = checkdate ;
