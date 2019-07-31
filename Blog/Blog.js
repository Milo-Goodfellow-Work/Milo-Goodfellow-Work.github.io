let LinkList, ToServe, CurrentTitle, CurrentBody;

LinkList = ['Post1.txt'];

for(i=0; i<LinkList.length; i++){
  $.get(LinkList[i], function(RawFileText){
    console.log(RawFileText);
    CurrentTitle = '';
    CurrentBody = '';
    ToServe += "";

  })


}
