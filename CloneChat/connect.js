


function outerChat(){
    console.log("welcome to the newton");
    //So for the outer chat section the image would be clickable and the headers as well.
    //So when you click on the image section it would come out to take up the full size of it's container
    let outerchatcontainer = document.getElementById("Outer-chat-container");
    let outerLinkChat = document.getElementById("outer-link-child");
    let outerLink = document.getElementById("outer-link");
    let innerChatContainer = document.getElementById("inner-chat-container")

    if (outerLink.click){
        outerchatcontainer.style = 'display: none';
        innerChatContainer.style = 'display: block';
    
    }else{
        //let it remain as it should remain as it is
        
    }

    
}