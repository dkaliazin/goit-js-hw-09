import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},o=localStorage.getItem("feedback-form-state");document.addEventListener("DOMContentLoaded",()=>{if(o){const a=JSON.parse(o);t.value=a.email,l.value=a.message,e.email=a.email,e.message=a.message}});const t=document.querySelector(".feedback-form-email");console.log(t.value);const l=document.querySelector(".feedback-form-textarea");t.addEventListener("input",()=>{e.email=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});l.addEventListener("input",()=>{e.message=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});const m=document.querySelector(".feedback-form");m.addEventListener("submit",a=>{a.preventDefault();const s=t.value.trim(),r=l.value.trim();s==""||r==""?alert("Fill please all field"):(console.log(e),localStorage.clear(),e.email="",e.message="",t.value="",l.value="")});
//# sourceMappingURL=commonHelpers2.js.map
