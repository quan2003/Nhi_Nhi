export async function apiGet(path){
  const r = await fetch(path);
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}
export async function apiPost(path, body){
  const r = await fetch(path, {method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)});
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}
