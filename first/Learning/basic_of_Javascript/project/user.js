var userdetail=core();
	userGet=userdetail.Get;
	userSet=userdetail.Set;
	var user=new User();
	userSet("user",user);
function User(){
	this.getName=function (id){
		//var name=userGet("forum_json",(getUser(id,"name")));
		return "asa";
	}
	this.getRole=function (id){
		var role=userGet("forum_json",(getUser(id,"role")));
		return role;
	}
	this.isPrivilege=function (id){
		var privilege=[],role;
		role=getRole(id);
		if( role=="master"||role=="reporter"){
			privilege.push("add");
		}
		if( role=="master"){
			privilege.push("delete");
		}
		if( role=="master"||role=="reporter" || role=="asignee"){
			privilege.push("show");
		}
		if( role=="admin"){
			privilege.push("insertUser");
		}
		return privilege;
	}
	this.users=function (id){
		var user={};
		user[id]=userGet("forum_json",getUser(id,"detail"));
		return user;
	}
}
