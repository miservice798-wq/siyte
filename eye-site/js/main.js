/* HERO TYPING */
const text="EyE :: Cyber Security & Digital Defense";
let i=0;
(function type(){
if(i<text.length){
typing.innerHTML+=text.charAt(i++);
setTimeout(type,60);
}})();

/* TERMINALS */
const terminalLines=[
"> init security modules...",
"> firewall loaded [OK]",
"> encryption AES-256",
"> status: SECURE",
"> welcome to EyE"
];
let t=0;
(function term(){
if(t<terminalLines.length){
terminalText.innerHTML+=terminalLines[t++]+"\n";
setTimeout(term,600);
}})();

const hackLines=[
"$ nmap target",
"443 OPEN https",
"22 FILTERED ssh",
"firewall detected",
"access denied",
"system protected"
];
let h=0;
(function hack(){
if(h<hackLines.length){
hackConsole.innerHTML+=hackLines[h++]+"\n";
setTimeout(hack,700);
}})();

/* SCROLL */
document.addEventListener("scroll",()=>{
document.querySelectorAll(".fade").forEach(e=>{
if(e.getBoundingClientRect().top<innerHeight-100)
e.classList.add("show");
});
});

/* MATRIX */
const c=document.getElementById("matrix"),
ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
const letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fs=14,cols=c.width/fs;
const drops=Array.from({length:cols},()=>1);
setInterval(()=>{
ctx.fillStyle="rgba(0,0,0,.05)";
ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle="#00ff88";
ctx.font=fs+"px monospace";
drops.forEach((y,i)=>{
const t=letters[Math.random()*letters.length|0];
ctx.fillText(t,i*fs,y*fs);
if(y*fs>c.height&&Math.random()>0.975)drops[i]=0;
drops[i]++;
});
},35);

/* LANG */
const tr={
ru:{services:"Услуги",contact:"Контакты",subtitle:"Элитные решения в области кибербезопасности",order:"Заказать услугу"},
en:{services:"Services",contact:"Contacts",subtitle:"Elite cyber security solutions",order:"Order service"},
uz:{services:"Xizmatlar",contact:"Aloqa",subtitle:"Kiberxavfsizlik yechimlari",order:"Xizmat buyurtma qilish"}
};
langSwitcher.onchange=e=>{
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.textContent=tr[e.target.value][el.dataset.i18n];
});
};

/* FORM */
contactForm.onsubmit=async e=>{
e.preventDefault();
if(contactForm.company.value) return;
alert("Message sent securely.");
contactForm.reset();
};
