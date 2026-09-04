import { BEZ_CONFIG, FIREBASE_ENABLED } from './config.js';
import { auth, waitForAuth, signOut } from './firebase-client.js';

let currentUser=null;
function toUser(u){return u&&u.emailVerified?{uid:u.uid,email:u.email,display_name:u.displayName||u.email?.split('@')[0]||'Player',email_verified:true,created_at:u.metadata?.creationTime||new Date().toISOString()}:null}
async function session(){const raw=await waitForAuth();currentUser=toUser(raw);updateAuth();return {user:currentUser,rawUser:raw}}
function updateAuth(){document.querySelectorAll('[data-auth="guest"]').forEach(el=>el.classList.toggle('hide',!!currentUser));document.querySelectorAll('[data-auth="user"]').forEach(el=>el.classList.toggle('hide',!currentUser));document.querySelectorAll('[data-user-name]').forEach(el=>el.textContent=currentUser?.display_name||'Library')}
function toast(msg,type='ok'){let s=document.querySelector('.toast-stack');if(!s){s=document.createElement('div');s.className='toast-stack';document.body.appendChild(s)}const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;s.appendChild(t);setTimeout(()=>t.remove(),4500)}
function msg(el,text,type='error'){if(!el)return;el.textContent=text;el.className='form-msg show '+type}
function qs(name){return new URLSearchParams(location.search).get(name)}
function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function safeNext(v,fallback='library.html'){if(!v)return fallback;try{const u=new URL(v,location.href);if(u.origin!==location.origin)return fallback;return u.pathname.split('/').pop()+u.search}catch{return fallback}}
function authReady(){return FIREBASE_ENABLED}
async function logout(){if(auth)await signOut(auth);currentUser=null;location.href='index.html'}
function libraryKey(){return 'bez_library_'+(currentUser?.uid||'guest')}
function getLibrary(){try{return JSON.parse(localStorage.getItem(libraryKey())||'[]')}catch{return []}}
function recordLibrary(g){if(!currentUser)return;const all=getLibrary();const old=all.find(x=>x.slug===g.slug);if(old){old.last_downloaded=new Date().toISOString();old.download_count=(old.download_count||0)+1}else all.unshift({slug:g.slug,title:g.title,last_downloaded:new Date().toISOString(),download_count:1});localStorage.setItem(libraryKey(),JSON.stringify(all.slice(0,100)))}
document.addEventListener('click',e=>{if(e.target.closest('[data-logout]')){e.preventDefault();logout()}if(e.target.closest('[data-menu]'))document.querySelector('.nav-links')?.classList.toggle('open')});
document.addEventListener('DOMContentLoaded',async()=>{document.querySelectorAll('[data-support-email]').forEach(el=>{el.textContent=BEZ_CONFIG.supportEmail;el.href='mailto:'+BEZ_CONFIG.supportEmail});await session();if(!FIREBASE_ENABLED&&document.querySelector('[data-requires-firebase]')){const n=document.createElement('div');n.className='setup-banner';n.innerHTML='<strong>Account setup required:</strong> add your Firebase web configuration in <code>assets/js/config.js</code> before publishing account features.';document.body.prepend(n)}});
export const BEZ={session,toast,msg,qs,escapeHtml,safeNext,authReady,getLibrary,recordLibrary,get user(){return currentUser}};
window.BEZ=BEZ;
