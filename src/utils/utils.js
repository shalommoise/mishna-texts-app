
const getNumbers = (start, end)=>{
  let mishnayos = []
if(!start && !end) return mishnayos;
const funStart = start*10;
const funEnd =end*10;
mishnayos = [funStart, funStart +1, funEnd -1, funEnd];
if(Math.round(end)-Math.round(start)){
   mishnayos = [funStart,Math.floor(start + 1)*10 + 1, funEnd -1, funEnd];
}
if( funEnd.toString().endsWith('3')){
  mishnayos = [funStart, funEnd -2, funEnd -1, funEnd];
}
if( funEnd.toString().endsWith('1')){
  mishnayos = [funStart, funStart +1, funStart +2, funEnd];
  if(Math.round(end)-Math.round(start)){

   mishnayos = [funStart,Math.floor(start + 1)*10 + 1, Math.floor(start + 1)*10 + 2, funEnd];
}
}
if(funStart + 1 === funEnd) mishnayos = [funStart, funEnd]
if(funStart + 2 === funEnd) mishnayos = [funStart, funEnd-1, funEnd]
return mishnayos.map((mishna)=> mishna/10)
}


const hebrewNumeralsSmall = ['','א',"ב","ג","ד","ה","ו","ז","ח","ט","י"]
const hebrewNumeralsBig =['', 'י','כ','ל','מ','נ','ס','ע','פ','צ','ק']
const convert =(num)=>{
  if(!num) num = 0;

const big = Math.floor(num/10);
const small = Math.round((num/10 - big)*10);

if(big === 1 && small === 5)  return 'טו'

if(big === 1 && small === 6) return 'טז'
return hebrewNumeralsBig[big] +hebrewNumeralsSmall[small]


}

const mishnaNumbers =(digits)=>{
if(!digits) return ''
const arr = digits.toString().split(".")

  return `${convert(arr[0])}:${convert(arr[1])}`
}
const mishnaSubHeading =(digits) =>{
if(!digits) return ''
const arr = digits.toString().split(".")

  return ` ${convert(arr[0])}  פרק  -  משנה  ${convert(arr[1])} `

}

const getChapter =(num)=>{
  if(!num) return '';
  return Math.floor(num);
};

 const getVerse =(num)=>{
    if(!num) return '';
const str = num.toString();
 const arr = str.split(".");
 return Number(arr[1]);
}

module.exports = {convert, mishnaNumbers, getNumbers, mishnaSubHeading, getVerse, getChapter}