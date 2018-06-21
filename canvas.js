var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


c.fillStyle = "rgb(77, 60, 15)";
c.fillRect(0, 50, 200, 25);
c.fillRect(200, 50, 25, 200);
c.fillRect(100, 225, 100, 25);
c.fillRect(100, 225, 25, 100);
c.fillRect(100, 300, 300, 25);
c.fillRect(375, 0, 25, 300);



function drag(){
  const fill = document.querySelector('.fill');
  const empties = document.querySelectorAll('.empty');
  
  // Fill listeners
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
  
  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
  }
  
  // Drag Functions
  
  function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
  }
  
  function dragEnd() {
    this.className = 'fill';
    this.draggable = false;


  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
  }
  
  function dragLeave() {
    this.className = 'empty';
  }
  
  function dragDrop() {
    this.className = 'empty';
    this.append(fill);
  }
}
  
  

  function aBought(){

    var newArcher = document.createElement('div');
    newArcher.className = 'fill';
    newArcher.draggable = 'true';
    newArcher.style.position = 'absolute';
    console.log(newArcher);
    var towerbought = document.getElementById('tt');
    towerbought.appendChild(newArcher);
    drag();


    
  }
















