const liveServer='/api';const localServer='http://localhost:5003';const activeServer=location.host.startsWith('localhost')||location.host.startsWith('127.0.0.1')?localServer:liveServer;function fetcher(endpoint,options){let updatedOptions={...options};updatedOptions.headers={...(options?options.headers:null),'Content-Type':'application/json',};updatedOptions.credentials='include';if(options&&options.hasOwnProperty('body')){updatedOptions.method='POST';updatedOptions.body=JSON.stringify({...(options?options.body:null),});}
return fetch(`${activeServer}${endpoint}`,updatedOptions);}
function numFormatter(num){if(num<0){return 0;}
if(num>999&&num<1000000){return(num/1000).toFixed(1)+'K';}else if(num>1000000){return(num/1000000).toFixed(1)+'M';}else if(num<1000){return num;}}
function randomProperty(object){let keys=Object.keys(object);return keys[Math.floor(keys.length*Math.random())];}
function capitalizeFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1);}
function counter(id,start,end,duration){const obj=document.getElementById(id);const range=end-start;if(range==0)return;const increment=end>start?1:-1;const step=Math.abs(Math.floor(duration/range));let current=start;let timer=setInterval(()=>{current+=increment;obj.textContent=current;if(current==end){clearInterval(timer);}},step);}
if(localStorage.getItem('website')==null)localStorage.setItem('website','https://classroom.google.com/');if(localStorage.getItem('disguise')==null){localStorage.setItem('disguise','none');}else{const disguise=localStorage.getItem('disguise');const favicon=document.querySelector('[rel=icon]');const title=document.querySelector('title');if(disguise=='gc'){title.innerHTML='Google Classroom';favicon.href='./assets/images/disguises/gcicon.png';}else if(disguise=='gd'){title.innerHTML='Google Docs';favicon.href='./assets/images/disguises/gdicon.png';}else if(disguise=='canvas'){title.innerHTML='Dashboard';favicon.href='./assets/images/disguises/canvasicon.jpg';}else if(disguise=='g'){title.innerHTML='Google';favicon.href='./assets/images/disguises/googleicon.png';}else if(disguise=='calc'){title.innerHTML='Calculator';favicon.href='./assets/images/disguises/calculator.png';}else if(disguise=='wiki'){title.innerHTML='Wikipedia';favicon.href='./assets/images/disguises/wikipedia.png';}}
var isMac=navigator.platform.toUpperCase().indexOf('MAC')>=0;if(typeof screen.orientation!=='undefined'||isMac){}else{window.open('/mobile/index.php','_self');}
window.addEventListener('keydown',(e)=>{if(e.key=='`')window.open(localStorage.getItem('website'),'_blank');else if(e.key=='[')aboutInBlank();},false);window.addEventListener('load',()=>{if('serviceWorker'in navigator){navigator.serviceWorker.register('sw.js');}});async function setPointsDisplay(numPoints){document.getElementById('pointsDisplay').innerText=numPoints;}
async function logout(){await fetcher(`/auth/logout`);location.reload();}
function aboutInBlank(){let url=location.href;maskedWindow=window.open();const doc=maskedWindow.document;doc.title='';let embed=doc.createElement('embed');if(url.includes('https://')||url.includes('http://')){embed.src=url;}else{embed.src='https://'+url;}
embed.width='100%';embed.height='100%';embed.style.position='fixed';embed.style.top='0';embed.style.left='0';let script=document.createElement('script');script.innerHTML=`
        window.onbeforeunload = function() {
            return "reloading the site will end the aboutblank session. Are you sure you want to continue?";
        };
    `;doc.body.appendChild(embed);doc.body.appendChild(script);}
function getCookie(name){const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2)return parts.pop().split(';').shift();}