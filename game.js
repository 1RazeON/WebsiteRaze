const c=document.getElementById('game');
const x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}
addEventListener('resize',r);r();

let p={x:200,y:200,vx:4,vy:0};
let rope=null;
const g=0.45;

addEventListener('mousedown',()=>rope={x:p.x+120,y:p.y-180,len:220});
addEventListener('mouseup',()=>rope=null);

function loop(){
 x.clearRect(0,0,c.width,c.height);
 p.vy+=g;p.x+=p.vx;p.y+=p.vy;

 if(rope){
   let dx=p.x-rope.x,dy=p.y-rope.y;
   let d=Math.hypot(dx,dy);
   if(d>rope.len){
      let nx=dx/d, ny=dy/d;
      p.x=rope.x+nx*rope.len;
      p.y=rope.y+ny*rope.len;
   }
   x.beginPath();x.moveTo(p.x,p.y);x.lineTo(rope.x,rope.y);x.stroke();
 }

 x.beginPath();x.arc(p.x,p.y,18,0,Math.PI*2);x.fill();
 requestAnimationFrame(loop);
}
loop();
