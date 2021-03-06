const transString = (date, format = "YY/MM/DD h:i") => {
  const time = date ? new Date(date) : new Date();
  let yy = time.getFullYear();      //年
  let mm = time.getMonth() + 1;     //月
  let dd = time.getDate();          //日
  let hh = time.getHours();         //时
  let ii = time.getMinutes();       //分
  let ss = time.getSeconds();       //秒
  let clock = yy + "/";
  if(mm < 10) clock += "0";
  clock += mm + "/";
  if(dd < 10) clock += "0";
  clock += dd + " ";
  if(hh < 10) clock += "0";
  clock += hh + ":";
  if (ii < 10) clock += '0'; 
  clock += ii ;
  // + ":";
  // if (ss < 10) clock += '0'; 
  // clock += ss;
  return clock;     //获取当前日期
}

export default {
  transString
};