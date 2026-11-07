const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const html=fs.readFileSync('docs/index.html','utf8');
test('website is static and has no remaining simulator or browser network code',()=>{
 assert.match(html,/connect-src 'none'/);assert.match(html,/script-src 'none'/);
 assert.doesNotMatch(html,/<(?:script|input|textarea|form|button)\b/i);
 assert.doesNotMatch(html,/id="(?:thread|reply|choices|input-form|reset)"|Conversation simulator|Start chatting|SESSION: LOCAL/i);
 assert(!fs.existsSync('docs/app.js'));
});
test('product identity, architecture CTA and source are explicit',()=>{
 for(const s of ['Telegram Learning Gateway','A clearer path through Telegram learning.','href="#architecture">Explore the Architecture','Self-hosted PHP/MySQL','No live Telegram service','https://github.com/AlirezaBelal/telegram-learning-gateway'])assert(html.includes(s),s);
});
test('anchors are unique and all local links resolve',()=>{
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
 for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(id),id);
 for(const [,asset] of html.matchAll(/(?:href|src)="\.\/([^"]+)"/g))assert(fs.existsSync('docs/'+asset),asset);
});
test('requirements and operator-only installation match the implementation',()=>{
 for(const s of ['PHP 8.0–8.4 (64-bit)','Composer','PDO MySQL','InnoDB','composer install --no-interaction','Copy-Item config/.env.example config/.env','cp config/.env.example config/.env','migrations/001_update_receipts.sql','public/','php scripts/purge_messages.php'])assert(html.includes(s),s);
 assert.match(html,/No registration command or active endpoint/);
});
test('Persian course excerpts and actual command routes are source grounded',()=>{
 assert.match(html,/lang="fa" dir="rtl"/);
 const courses=fs.readFileSync('commands/courses.php','utf8');
 for(const s of ['مدیریت محصول دیجیتال','هوش مصنوعی در خدمت مدیران محصول','محصول و کسب‌وکار برای متخصصین منابع انسانی']){assert(courses.includes(s));assert(html.includes(s));}
 for(const route of ['/start','/help','/courses','/interview','/support','/contact'])assert(html.includes(route));
 assert.doesNotMatch(html,/href="(?:https:\/\/t\.me|tg:)/);
});
test('privacy and failure boundaries are not overstated',()=>{
 for(const s of ['STORE_RAW_MESSAGES=false','MESSAGE_RETENTION_DAYS=30','not exactly-once','503','hash_equals','depth 32','legacy compatibility','historical','No learner data'])assert(html.includes(s),s);
 assert.doesNotMatch(html,/[0-9]{8,12}:[A-Za-z0-9_-]{30,}/);
});
