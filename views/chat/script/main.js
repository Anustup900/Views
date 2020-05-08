const socket = io();

const msg = $("#msg")
const submit = document.getElementById('submit');

const room = window.location.href.slice(27);

function msg_disp(msg,sent){
    let msg_Template = document.createElement('li');
    msg_Template.classList.add('message');
    msg_Template.classList.add('appeared');
    if(sent == true ){
        msg_Template.classList.add('right');
    }else{
        msg_Template.classList.add('left');

    }
    msg_Template.innerHTML = `<div class="avatar"></div><div class="text_wrapper"><div class="text">${msg}</div></div>`;
    document.querySelector(".messages").appendChild(msg_Template);
}
function status_disp(msg){
    let msg_Template = document.getElementById("status");
    
    msg_Template.innerHTML = msg;
    document.querySelector(".messages").appendChild(msg_Template);
}

socket.emit('joinRoom',room);



submit.addEventListener("click",()=>{
    let message = msg.val();
    msg_disp(message,true);
    socket.emit('chatMessage',({message,room}));
});

socket.on('chatMessage',msg =>{
    msg_disp(msg.message,false);
})

socket.on('greeting',(msg) => {
        status_disp(msg.message);
    
})


