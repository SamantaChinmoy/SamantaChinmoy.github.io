function core()
{
  var lib={};
    return {
      showlib:lib,
      Set:function register(key,value)
        {
          if(typeof lib[key]==='undefined') 
          {
            lib[key]=value;
            console.log(lib);
          }
          else
          {
            console.log("key already exists");
          }
        },
      Get:function setter(key)
        {
          return lib[key];
        }
  };
}