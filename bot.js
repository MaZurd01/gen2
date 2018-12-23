const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();



client.on('message', message => {
   
    let command = message.content.split(" ")[0];
     let args = message.content.split(" ").slice(1);
   if (command == "$say1") {
   message.channel.send(args.join("  "))
     }
   });

   client2.on('message', message => {
   
    let command = message.content.split(" ")[0];
     let args = message.content.split(" ").slice(1);
   if (command == "$say2") {
   message.channel.send(args.join("  "))
     }
   });

   client3.on('message', message => {
   
    let command = message.content.split(" ")[0];
     let args = message.content.split(" ").slice(1);
   if (command == "$say3") {
   message.channel.send(args.join("  "))
     }
   });


   client4.on('message', message => {
   
    let command = message.content.split(" ")[0];
     let args = message.content.split(" ").slice(1);
   if (command == "$say4") {
   message.channel.send(args.join("  "))
     }
   });


client.on('message', message => {
    if(message.content === '$مرتبك'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '$رصيدك'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '$ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});




client2.on('message', message => {
    if(message.content === '$مرتبك'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '$رصيدك'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '$ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});





client3.on('message', message => {
    if(message.content === '$مرتبك'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === '$رصيدك'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '$ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});



client4.on('message', message => {
    if(message.content === '$مرتبك'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === '$رصيدك'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === '$ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});




client.on('message', message => { 
if (message.content === '!startgen') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Generator Credits, By MaZurd, Generator Credits, By Mazurd, Generator - توليد كريديت مجاني , بواسطه مازورد مصنع الكريديت ** ["${x}"]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { 
if (message.content === '!startgen') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Generator Credits, By MaZurd, Generator Credits, By Mazurd, Generator - توليد كريديت مجاني , بواسطه مازورد مصنع الكريديت ** ["${x}"]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { 
    if (message.content === '!startgen') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`**Generator Credits, By MaZurd, Generator Credits, By Mazurd, Generator - توليد كريديت مجاني , بواسطه مازورد مصنع الكريديت ** ["${x}"]`)
              .then(m => {
                count++;
              })
              
            }
          }
    });


    client4.on('message', message => { 
        if (message.content === '!startgen') {
              let count = 0;
              let ecount = 0;
              for(let x = 0; x < 90000; x++) {
                message.channel.send(`**Generator Credits, By MaZurd, Generator Credits, By Mazurd, Generator - توليد كريديت مجاني , بواسطه مازورد مصنع الكريديت ** ["${x}"]`)
                  .then(m => {
                    count++;
                  })
                  
                }
              }
        });




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
