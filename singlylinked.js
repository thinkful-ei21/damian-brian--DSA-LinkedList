'use strict';
const LinkedList = require('./linkedlist.js');


function main(){
  const SLL = new LinkedList();
  
  

  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertLast('Helo');
  SLL.insertLast('squirrel');
  SLL.insertLast('Apollo');  
  SLL.insertBefore('Damian', 'Helo');
  //SLL.remove('squirrel');
  console.log('runs');
  //console.log(SLL.find('squirrel'));
  console.log(JSON.stringify(SLL));
}


main();