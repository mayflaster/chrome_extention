console.log("Hey I Work!");

//make a list of the web page images 
let images = document.getElementsByTagName('img');

for(let i = 0; i < images.length; i++){ //run over images list
//msg type is "image" (should be agreed by sender and reciever)
//index is important to inform reciever which image should be treated
	chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
	console.log("image index is"+i);
    images[index].src = chrome.runtime.getURL(data.link);
  });
	//images[i].src = chrome.runtime.getURL("images/maxresdefault.jpg");
}