import { Markup, Telegraf } from 'telegraf';

import { Command } from './command.class';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session)

      ctx.reply('Вопрос?', Markup.inlineKeyboard([
        Markup.button.callback('Like', 'CurLike'),
        Markup.button.callback('DisLike', 'CurDisLike'),
      ]));

    });

    this.bot.action("CurLike", (ctx) => {
      ctx.session.courseLike = true;
      ctx.editMessageText('Круто!');
    });

    this.bot.action("CurDisLike", (ctx) => {
      ctx.session.courseLike = false;
      ctx.editMessageText('Хреново!');
    });

  }
}