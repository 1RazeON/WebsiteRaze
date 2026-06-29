// Zombie Survival v0.1
const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
addEventListener('resize',resize);resize();

const player={x:400,y:300,r:18,speed:4,hp:100};
const keys={};
const zombies=[];
for(let i=0;i<12;i++)zombies.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:16});

addEventListener('keydown',e=>keys[e.key.toLowerCase()]=true);
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);

function update(){
 if(keys.w)player.y-=player.speed;
 if(keys.s)player.y+=player.speed;
 if(keys.a)player.x-=player.speed;
 if(keys.d)player.x+=player.speed;
 zombies.forEach(z=>{
   let dx=player.x-z.x,dy=player.y-z.y,d=Math.hypot(dx,dy)||1;
   z.x+=dx/d*0.8; z.y+=dy/d*0.8;
 });
}
function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="#2b2";ctx.fillRect(0,0,canvas.width,canvas.height);
 ctx.fillStyle="red";
 zombies.forEach(z=>{ctx.beginPath();ctx.arc(z.x,z.y,z.r,0,6.28);ctx.fill();});
 ctx.fillStyle="cyan";
 ctx.beginPath();ctx.arc(player.x,player.y,player.r,0,6.28);ctx.fill();
 ctx.fillStyle="white";ctx.fillText("Prototype v0.1",20,20);
}
(function loop(){update();draw();requestAnimationFrame(loop)})();