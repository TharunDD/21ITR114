let previous=[];
let currarr=[];
function avgcal(arr) {
  previous=[...currarr];
  currarr.length=0;
  const startind= Math.max(arr.length - 10, 0);
    let s= 0;
    for (let i = startind;i<arr.length; i++) {
        s+= arr[i];
        currarr.push(arr[i]);
    }
    const avg= s/Math.min(10,arr.length); 
    return avg;
}
const even =(req,res)=>{
  try{
  const numarr=req.body.numbers
  let av=avgcal(numarr);
  res.status(200).json({"numbers":numarr,"windowPrevState":previous,"windowCurrState":currarr,"avg":av});
  }catch (error)
  {
    res.status(500).json({error:'Tnternal error'});
  }
}
const prime=(req,res)=>{  try{
    const numarr=req.body.numbers
    let av=avgcal(numarr);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({"numbers":numarr,"windowPrevState":previous,"windowCurrState":currarr,"avg":av});
    }catch (error)
    {
      res.status(500).json({error:'Tnternal error'});
    }
}
const Fibanacci=(req,res)=>{
  try{
    const numarr=req.body.numbers
    let av=avgcal(numarr);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({"numbers":numarr,"windowPrevState":previous,"windowCurrState":currarr,"avg":av});
    }catch (error)
    {
      res.status(500).json({error:'Tnternal error'});
    }
}
const Random=(req,res)=>{
  try{
    const numarr=req.body.numbers
    let av=avgcal(numarr);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({"numbers":numarr,"windowPrevState":previous,"windowCurrState":currarr,"avg":av});
    }catch (error)
    {
      res.status(500).json({error:'Tnternal error'});
    }
}
module.exports={even,prime,Fibanacci,Random};