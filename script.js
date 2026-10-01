const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const filters=document.querySelectorAll(".filter");
const cards=document.querySelectorAll(".seminar-card");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const filter=btn.dataset.filter;
  cards.forEach(card=>{
    const show=filter==="all"||card.dataset.category.split(" ").includes(filter);
    card.classList.toggle("hidden",!show);
  });
}));

const modal=document.getElementById("certificateModal");
const modalImg=document.getElementById("modalImage");
const modalImageLink=document.getElementById("modalImageLink");
const modalVerify=document.getElementById("modalVerify");
const modalTitle=document.getElementById("modalTitle");
document.querySelectorAll(".view-cert").forEach(btn=>btn.addEventListener("click",()=>{
  modalImg.src=btn.dataset.image;
  modalImg.alt=btn.dataset.title;
  modalTitle.textContent=btn.dataset.title;
  const verifyUrl = btn.dataset.verify || "";
  if (verifyUrl) {
    modalImageLink.href=verifyUrl;
    modalVerify.href=verifyUrl;
    modalVerify.style.display="flex";
  } else {
    modalImageLink.removeAttribute("href");
    modalVerify.removeAttribute("href");
    modalVerify.style.display="none";
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelector("#certificateModal .modal-close").addEventListener("click",e=>{e.preventDefault();e.stopPropagation();closeModal()});
document.querySelector("#certificateModal .modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});


const shotsModal=document.getElementById("screenshotsModal");
const shotsGrid=document.getElementById("shotsGrid");
const shotsTitle=document.getElementById("shotsTitle");
const screenshotViewer=document.getElementById("screenshotViewer");
const viewerImage=document.getElementById("viewerImage");
const viewerTitle=document.getElementById("viewerTitle");
function openShots(btn){
  shotsTitle.textContent=btn.dataset.title;
  shotsGrid.innerHTML="";
  const paths=(btn.dataset.shots||"").split("|").filter(Boolean);
  paths.forEach((src,i)=>{
    const a=document.createElement("button");
    a.type="button"; a.className="shot-item";
    a.setAttribute("aria-label","View "+btn.dataset.title+" screenshot "+(i+1));
    a.addEventListener("click",()=>openScreenshot(src,btn.dataset.title,i+1));
    const img=document.createElement("img");
    img.src=src; img.alt=btn.dataset.title+" screenshot "+(i+1); img.loading="lazy";
    a.appendChild(img); shotsGrid.appendChild(a);
  });
  shotsModal.classList.add("open"); shotsModal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeShots(){shotsModal.classList.remove("open");shotsModal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function openScreenshot(src,title,num){
  viewerImage.src=src; viewerImage.alt=title+" screenshot "+num; viewerTitle.textContent=title+" — Screenshot "+num;
  screenshotViewer.classList.add("open"); screenshotViewer.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeScreenshot(){screenshotViewer.classList.remove("open");screenshotViewer.setAttribute("aria-hidden","true");viewerImage.src="";document.body.style.overflow="hidden"}
document.querySelectorAll(".view-shots").forEach(btn=>btn.addEventListener("click",()=>openShots(btn)));
document.querySelector(".gallery-close").addEventListener("click",closeShots);
document.querySelector(".gallery-backdrop").addEventListener("click",closeShots);
document.querySelector(".viewer-close").addEventListener("click",e=>{e.preventDefault();e.stopPropagation();closeScreenshot()});
document.querySelector(".viewer-backdrop").addEventListener("click",closeScreenshot);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    if(screenshotViewer.classList.contains("open")) closeScreenshot();
    else if(shotsModal.classList.contains("open")) closeShots();
    else closeModal();
  }
});
