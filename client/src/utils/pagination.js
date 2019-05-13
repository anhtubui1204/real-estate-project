export default function pagination (list, n_elements_per_page, numPage){
     //Pagination
     var numPages = (parseInt(n_elements_per_page)===0)? 1 : Math.ceil(list.length/n_elements_per_page);
     var maxIndex = numPage*n_elements_per_page;
     var paginatedList = list.filter((item)=>
         list.indexOf(item) >= (maxIndex - n_elements_per_page) && list.indexOf(item) < maxIndex
     )
     var pages = Array.from({length: numPages}, (v, k)=> k+1);
     return {
         pages, paginatedList
     }
}