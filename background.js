console.log("Background Script is Running");

/*
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
     //fetch('http://127.0.0.1:8887/maxresdefault.jpg')
          //.then(response => response.text())
          //.then(data => {
            //let dataObj = JSON.parse(data);
            
          //})
		if(message.index%2 == 0){
		senderResponse({data: chrome.runtime.getURL('images/Animal-jokes-funny-sheep.jpg'), index: message.index});
		console.log("imhere");
		}
		else{
			senderResponse({data: chrome.runtime.getURL('images/maxresdefault.jpg'), index: message.index});
		}
		//let dataObj = JSON.parse('https://www.aljazeera.com/wp-content/uploads/2020/10/AP_20270097787136.jpg?resize=770%2C513');
		
        //senderResponse({data: "images/maxresdefault.jpg", index: message.index});
  
          //.catch(error => console.log("error", error))
		return true;  // Will respond asynchronously.
	}
});
*/


chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    const url='http://localhost:8000/server/';
  if(message.msg === "image") {
      fetch(url, {
          method: 'POST', // or 'PUT'
          headers: {
              'Content-Type': 'application/json',
          },
          body: 'helloWorld',
      })
  }
  });
    /*fetch(url)
          .then(response => response.text())
          .then(data => {
            let dataObj = JSON.parse(data);
            senderResponse({data: dataObj, index: message.index});
          })
          .catch(error => console.log("error", error))*/
     // return true;  // Will respond asynchronously.
 // }
//});


