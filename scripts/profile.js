$(document).ready(function () {
	var myUsername = $("#myUsername").text();
	var thisUsername = $("#thisUsername").text();
	var firebaseRootUrl = $("#firebaseRootUrl").text();
	var rootRef = new Firebase(firebaseRootUrl);

	var nameEditor = new MediumEditor('#profile-name', {
		disableReturn: true,
		disableEditing: myUsername != thisUsername
	});

	$("#profile-name").keyupAsObservable()
		.map(function(event){
			return event.target.innerHTML
		})
		.subscribe(function(html){
			rootRef.child(thisUsername).update({
				name: html
			});
		});
		
		
	rootRef.child(thisUsername).child('name').on('value', function(snapshot){
		if(!$("#profile-name").is(":focus")){
			nameEditor.setContent(snapshot.val());	
		}
	});

	var tagLineEditor = new MediumEditor('#profile-tagline', {
		disableReturn: true,
		disableEditing: myUsername != thisUsername
	});
	
	$("#profile-tagline").keyupAsObservable()
		.map(function(event){
			return event.target.innerHTML
		})
		.subscribe(function(html){
			rootRef.child(thisUsername).update({
				tagline: html
			});
		});
		
	rootRef.child(thisUsername).child('tagline').on('value', function(snapshot){
		if(!$("#profile-tagline").is(":focus")){
			tagLineEditor.setContent(snapshot.val());	
		}
	});
	
	var profileDescriptionEditor = new MediumEditor('#profile-desc', {
		disableDoubleReturn: true,
		disableEditing: myUsername != thisUsername
	});
	
	$("#profile-desc").keyupAsObservable()
		.map(function(event){
			return event.target.innerHTML
		})
		.subscribe(function(html){
			rootRef.child(thisUsername).update({
				summary: html
			});
		});
		
	rootRef.child(thisUsername).child('summary').on('value', function(snapshot){
		if(!$("#profile-desc").is(":focus")){
			profileDescriptionEditor.setContent(snapshot.val());	
		}
	});
	
	
	rootRef.child(thisUsername).child('name').on('value', function(snapshot){
		$("#sidebar-name").html(snapshot.val());
	});
	
	if(myUsername.length > 0){
		$("#logout-menu-item").show();
		$("#login-menu-item").hide();
	}else{
		$("#logout-menu-item").hide();
		$("#login-menu-item").show();
	}
});