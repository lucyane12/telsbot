import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN || "6268859723:AAHcb3ZiN2WQapIXWDRnhtamHL06C1tstT8");


bot.start((ctx) => {
  ctx.reply("Hai saya adalah bot.kirim /menu atau /help untuk melihat list menu.");
});

bot.command(["help","menu"], (ctx) => {
  var messMenu = `MENU BOT \n
    Nsfw Menu\n
send /aiwaifu -> Gambar nsfw AI
send /ayaka -> Gambar cosplay nsfw Kamisato Ayaka
send /bocchi -> Gambar cosplay nsfw bocchi
send /bunny -> Gambar cosplay nsfw Bunny Girls
send /genshin -> Gambar nsfw Genshin impact
send /osakana -> Gambar cosplay nsfw Osakana Chan`;
  ctx.reply(messMenu);
});

bot.command("aiwaifu", (ctx) => {
  var rand = Math.floor(Math.random()*134)+1;
  var url = `https://zeevalya.cyclic.app/ai-waifu/zeev-ai-waifu-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.command("ayaka", (ctx) => {
  var rand = Math.floor(Math.random()*58)+1;
  var url = `https://zeevalya.cyclic.app/ayaka/zeev-kamisato-ayaka-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.command("bocchi", (ctx) => {
  var rand = Math.floor(Math.random()*30)+1;
  var url = `https://zeevalya.cyclic.app/bocchi/zeev-bocchi-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.command("bunny", (ctx) => {
  var rand = Math.floor(Math.random()*61)+1;
  var url = `https://zeevalya.cyclic.app/bunny/zeev-bunny-girls-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.command("genshin", (ctx) => {
  var rand = Math.floor(Math.random()*349)+1;
  var url = `https://zeevalya.cyclic.app/genshin/zeev-hentai-genshin-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.command("osakana", (ctx) => {
  var rand = Math.floor(Math.random()*25)+1;
  var url = `https://zeevalya.cyclic.app/osakana/zeev-osakana-chan-${rand}-image.jpg`;
  bot.telegram.sendPhoto(ctx.chat.id,url,{});
});

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));