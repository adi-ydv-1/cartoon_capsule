var http=require("http")
var console=require("console")
module.exports.function = function search (keyword, category, author)
{
  var url="http://perfectcartoon.com/site/search"
  var options={}
  var ret=[]
  if(typeof(keyword) != "undefined")
  {
    options["keyword"] = keyword
  }
    if(typeof(category) != "undefined")
  {
    options["category"] = category
  }
    if(typeof(author) != "undefined")
  {
    options["author"] = author
  }
  try{
  res=http.getUrl(url,{query:options} )
  ret=JSON.parse(res)
  }
  catch(err)
  {
    console.log("ERROR: "+err)
  }
  return ret
}