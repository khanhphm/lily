import { Telegraf } from "telegraf";
const TOKEN = "6369457969:AAH5zTHneZBQ4CuoMTMyJ70xuEf1jaIhYOQ";
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));

export default bot;
