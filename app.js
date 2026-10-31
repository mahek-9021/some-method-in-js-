let cl=console.log;

var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];


// company run atleast 12 years && 90's company 

let result = companies.some((comp)=>{
    return comp.end - comp.start >= 12 && comp.start >= 1990 && comp.start <= 1999
});

cl(result);
    
// company name whose category is retail 

let result1 = companies.some((comp)=>{
    return comp.category === 'retail'
});

cl(result1);

// 80's companies

let result2 = companies.some((comp)=>{
    return comp.start >= 1980 && comp.start <= 1989
});

cl(result2);


// company name whose category is Finance

let result3 = companies.some((comp)=>{
    return comp.category === 'finance'
});
cl(result3);


// company run atleast 10 years && 80's company 
let result4 = companies.some((params)=>{
    return params.end - params.start >= 10 && params.start >= 1980 && params.start <= 1989

});
cl(result4);