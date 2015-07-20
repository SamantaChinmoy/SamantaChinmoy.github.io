function jsonval()
{

  var name=document.form1name.name.value;
  var email=document.form1name.email.value;
  var address=document.form1name.address.value;
  var object=[];
  object.name=name;
  object.email=email;
  object.address=address;
  JSON.stringify(object);
  console.log(object);

}