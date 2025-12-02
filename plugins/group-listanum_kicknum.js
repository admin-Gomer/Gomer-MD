  const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*[❗] ВВЕДИТЕ ПРЕФИКС СТРАНЫ ДЛЯ ПОИСКА НОМЕРОВ В ЭТОЙ ГРУППЕ ЭТОЙ СТРАНЫ, ПРИМЕР: ${usedPrefix + command} 52*`);
  if (isNaN(args[0])) return m.reply(`*[❗] ВВЕДИТЕ ПРЕФИКС СТРАНЫ ДЛЯ ПОИСКА НОМЕРОВ В ЭТОЙ ГРУППЕ ЭТОЙ СТРАНЫ, ПРИМЕР: ${usedPrefix + command} 52*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*[❗] В ЭТОЙ ГРУППЕ НЕТ НОМЕРОВ С ПРЕФИКСОМ +${lol}*`);
  const numeros = ps.map((v)=> '⭔ @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'лист_номер': case 'listnum':
      conn.reply(m.chat, `*СПИСОК НОМЕРОВ С ПРЕФИКСОМ +${lol}, КОТОРЫЕ ВХОДЯТ В ЭТУ ГРУППУ:*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'удалить_номер':
      if (!bot.restrict) return m.reply('*[❗] У ВЛАДЕЛЬЦА БОТА НЕ ВКЛЮЧЕНЫ ОГРАНИЧЕНИЯ (#включить ограничение) СВЯЖИТЕСЬ С НИМ, ЧТОБЫ ВКЛЮЧИТЬ ЕГО*');
      if (!isBotAdmin) return m.reply('*[❗] БОТ НЕ ЯВЛЯЕТСЯ АДМИНОМ, ОН НЕ МОЖЕТ ИСТРЕБЛЯТЬ ЛЮДЕЙ*');
      conn.reply(m.chat, `*[❗] НАЧИНАЯ УДАЛЕНИЕ НОМЕРА С ПРЕФИКСОМ +${lol}, КАЖДЫЕ 10 СЕКУНД ПОЛЬЗОВАТЕЛЬ БУДЕТ УДАЛЯТЬСЯ*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]} Уже удалён или покинул группу.*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*[❗] ОШИБКА*');
      }
      break;
  }
};
handler.command = /^(лист_номер|удалить_номер|listnum)$/i;
handler.fail = null;
handler.register = false;
handler.group = true;
export default handler;
