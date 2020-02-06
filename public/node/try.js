
var admin = require("firebase-admin");

var serviceAccount = require("D://work//techingacademy//Teacing-master//Teacing//public//node//teaching-time-firebase-adminsdk-ced15-139bac863e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teaching-time.firebaseio.com"
});
var db = admin.database();
var ref = db.ref("KMITL/1/i");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});  
startCount();
function startCount(){
  const dbb = db.ref("KMITL/1/i");
  var a = 0;

  dbb.on('value',function(snapshot){
    console.log(dataSnapshot.val());
    //document.getElementById("h3").innerHTML=dataSnapshot.val();
    a = snapshot.val();
    if (a==1)
    {
      get =0;
      display();
    }
    else {
		startCount();
    }
  })
}
  

var counter = 0;
var counter2 = 0;
var get = 0;
var nowsec = 0;
var nowmin = 3;
var value = 0;
var a = 0;
var b = 0;


function display() {
  nowmin = Math.floor(get/60)
	nowsec = get%60;
	var ddbb = db.ref("KMITL");	
	if(b == 0)
	{
		if (get>=0)
  		{
		if(nowsec < 10 && nowsec != 0)
		{
			nowmin = '0'+String(nowmin)
    }
    var usersRef = ref.child("KMITL");
      usersRef.set({
        alanisawesome: {
          date_of_birth: "June 23, 1912",
          full_name: "Alan Turing"
           },
      gracehop: {
          date_of_birth: "December 9, 1906",
          full_name: "Grace Hopper"
        }
      });
  	get = get + 1 ;
		setTimeout("display()",1000);
		var r = 0;
    	var stpr = db.ref("KMTIL/1/i");
    	stpr.on('value',function(dataSnapshot){
      	r = snapshot.val();
      	if (r==0){
			var sec = db.ref("KMITL/1/sec");
			var min = db.ref("KMITL/1/min");
			sec.on('value',function(dataSnapshot1){
				var ss = snapshot1.val();
			min.on('value',function(dataSnapshot2){
				var mm = snapshot2.val();
				if(ss < 10)
				{
					ss = '0'+String(ss)
				}
			})	
			})
			get = 0;
			b = 1;
      	}
  		})
  		}
	}
	else
	{
		console.log(".")
  }  
}
  	