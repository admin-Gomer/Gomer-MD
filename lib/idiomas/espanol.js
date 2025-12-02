const lenguaje = () => { return 'es' } //Español  

const smsAvisoRG = () => { return `✅*РЕЗУЛЬТАТ*✅\n\n` } 
const smsAvisoAG = () => { return `⚠️*ПРЕДУПРЕЖДЕНИЕ*⚠️\n\n` }
const smsAvisoIIG = () => { return `❕*ИНФОРМАЦИЯ*❕\n\n` }
const smsAvisoFG = () => { return `❌*ОШИБКА❌*\n\n` }
const smsAvisoMG = () => { return `*❗️НЕПРАВОМЕРНОЕ ДЕЙСТВИЕ❗️*\n\n` }
const smsAvisoEEG = () => { return `*📩СЧЕТ📩*\n\n` }
const smsAvisoEG = () => { return `*💚УСПЕХ💚*\n\n` }

const smsRowner = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО НОМЕР БОТА!!\`\`\`` }
const smsOwner = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОЙ СОЗДАТЕЛЬ!!\`\`\`` }
const smsMods = () => { return `\`\`\`ЭТУ КОМАНДУ МОГУТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОДЕРАТОРЫ И МОЙ СОЗДАТЕЛЬ!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ДЛЯ ПРЕМИУМ ПОЛЬЗОВАТЕЛЕЙ И МОЕГО СОЗДАТЕЛЯ!! ЧТОБЫ БЫТЬ ПРЕМИАЛЬНЫМ, КУПИТЕ ПРОПУСК С ПОМОЩЬЮ #pass\`\`\`` }
const smsGroup = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ГРУППАХ!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ЧАСТНОМ ПОРЯДКЕ!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`ЭТА КОМАНДА ТОЛЬКО ДЛЯ АДМИНОВ!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ВЫ МОГЛИ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`ВАМ НЕОБХОДИМО ЗАРЕГИСТРИРОВАТЬСЯ, ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ, ВВЕДИТЕ #verificar ДЛЯ РЕГИСТРАЦИИ!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ ПРИВЕТ!*\n┊💖 @user\n┊📄 *ПРАВИЛА ГРУППЫ*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *ДОСВИДАНИЯ!*\n┊ *@user!* 👣\n*╰┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ПОВЫШЕН ДО АДМИНИСТРАТОРА ГРУППЫ!!*'}
const smsSdemote = () => { return '*@user БЫЛ ПОНИЖЕН В ДОЛЖНОСТИ АДМИНИСТРАТОРА ГРУППЫ!!*'}
const smsSdesc = () => { return '*ПОЗНАКОМЬТЕСЬ С НОВЫМ ОПИСАНИЕМ ГРУППЫ:*\n\n@desc'}
const smsSsubject = () => { return '*ОБНОВЛЕННОЕ НАЗВАНИЕ ГРУППЫ!!*\n@subject'}
const smsSicon = () => { return '*ОБНОВЛЕННАЯ ГРУППОВАЯ ФОТОГРАФИЯ!!*'}
const smsSrevoke = () => { return '*ВСТРЕЧАЙТЕ НОВУЮ ССЫЛКУ НА ГРУППУ!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 УСПЕШНОЕ СОЕДИНЕНИЕ С WHATSAPP 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ ПОГРУЗКА...\n`}
const methodCode1 = () => { return `МЕТОД СВЯЗЫВАНИЯ` }
const methodCode2 = () => { return `КАК ВЫ ХОТИТЕ ПОДКЛЮЧИТЬСЯ?` }
const methodCode3 = () => { return `Выбор` }
const methodCode4 = () => { return `QR-код` }
const methodCode5 = () => { return `8-значный код.` }
const methodCode6 = () => { return `Введите только количество` }
const methodCode7 = () => { return `возможность подключения.` }
const methodCode8 = () => { return `СОВЕТ` }
const methodCode9 = () => { return `Если США Termux, Replit, Linux или Windows` }
const methodCode10 = () => { return `Используйте эти команды для непосредственного выполнения:` }
const methodCode11 = (chalk) => { return `НИКАКИХ НОМЕРОВ, КРОМЕ ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, А ТАКЖЕ СПЕЦИАЛЬНЫЕ БУКВЫ ИЛИ СИМВОЛЫ.\n${chalk.bold.yellowBright("СОВЕТ: СКОПИРУЙТЕ НОМЕР ОПЦИИ И ВСТАВЬТЕ ЕГО В КОНСОЛЬ.")}` }
const methodCode12 = () => { return `Начните с QR-кода` }
const methodCode13 = () => { return `Начните с 8-значного кода` }
const methodCode14 = () => { return `Запуск по умолчанию с опциями` }
const phNumber = (chalk) => { return `Сконфигурировать файл ${chalk.bold.greenBright("config.js")} Введенный номер не имеет кода страны. ${chalk.bold.yellowBright("Пример: +593090909090")}` }
const phNumber2 = (chalk) => { return `Пожалуйста, введите номер WhatsApp.\n${chalk.bold.yellowBright("СОВЕТ: Скопируйте номер WhatsApp и вставьте его в консоль.")}\n${chalk.bold.yellowBright("Пример: +593090909090")}\n${chalk.bold.magentaBright('---> ')}` }
const phNumber3 = () => { return `Обязательно добавьте код страны.` }
const pairingCode = () => { return `КОД ПРИВЯЗКИ:` }
const smsCodigoQR = () => { return `\n✅ ОТСКАНИРУЙТЕ QR-КОД ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД ✅`}
const smsConexionOFF = () => { return `\n⚠️ В АВТОНОМНОМ РЕЖИМЕ УДАЛИТЕ ФАЙЛ ${global.authFile} И ОТСКАНИРУЙТЕ QR-КОД ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ МУЛЬТИМЕДИА ☘️\n┆• УДАЛЕННЫЕ ФАЙЛЫ ПАПОК TMP\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• УДАЛЕННЫЕ НЕОБЯЗАТЕЛЬНЫЕ СЕАНСЫ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 ЗАПИСИ 🌹\n┆• УДАЛЕННЫЕ ОСТАТОЧНЫЕ ФАЙЛЫ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• НИЧЕГО НЕ НУЖНО УСТРАНЯТЬ \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• УДАЛЕННЫЕ НЕСУЩЕСТВЕННЫЕ ФАЙЛЫ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• ПРОИЗОШЛА ОШИБКА\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ФАЙЛ ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `УСПЕШНОЕ СТИРАНИЕ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ФАЙЛ ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `СТЕРЕТЬ НЕ УДАЛОСЬ\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smsConexioncerrar = () => { return `\n⚠️ СОЕДИНЕНИЕ ЗАКРЫТО, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....`}
const smsConexionperdida = () => { return `\n⚠️ ПОТЕРЯ СВЯЗИ С СЕРВЕРОМ, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....`}
const smsConexionreem = () => { return `\n⚠️ ПОДКЛЮЧЕНИЕ ЗАМЕНЕНО, ОТКРЫТА ЕЩЕ ОДНА НОВАЯ СЕССИЯ, ПОЖАЛУЙСТА, СНАЧАЛА ВЫЙДИТЕ ИЗ СИСТЕМЫ.`}
const smsConexionreinicio = () => { return `\n❇️ ПОДКЛЮЧЕНИЕ К СЕРВЕРУ...`}
const smsConexiontiem = () => { return `\n⌛ ТАЙМ-АУТ СОЕДИНЕНИЯ, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ ПРИЧИНА ОТКЛЮЧЕНИЯ НЕИЗВЕСТНА: ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ Теперь язык настроен.`} 
const languageRegister = (selectedLanguage) => { return `❇️ Язык был установлен на "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "ОБНОВЛЕНО 'main.js' УСПЕШНО"}

//_antiprivado 
const smsprivado = () => { return `*ВЫ НЕ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ЭТОГО БОТА В ПРИВАТНОМ ЧАТЕ*\n\n*Вступите в официальную группу бота, чтобы использовать бота*`}

//Boton
const smsConMenu = () => { return `🌻 МЕНЮ`}

//info-creadora.js
const smsCreA = () => { return 'Привет'}
const smsCreB = () => { return 'Меня зовут'}
const smsCreC = () => { return 'Всегда готов помочь вам 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '🌸 *◜ОФИЦИАЛЬНЫЕ АККАУНТЫ◞* 🌸'}
const smsOfc2 = () => { return `*❥ _Подпишитесь на нас в официальных аккаунтах, чтобы быть в курсе событий_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Добровольная поддержка принимается PayPal, если вы хотите поддержать другим способом, вы можете пожертвовать номер в Instagram, чтобы репозиторий оставался действительным, Спасибо!!\n\n🌺 Вы всегда можете поддержать, подписавшись на официальные аккаунты и поделившись проделанной работой ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ ДОБРОВОЛЬНОЕ ПОЖЕРТВОВАНИЕ ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_Вы также можете поделиться следующим в качестве Apoyo_*\n*_Califica репозиторий с благодарностью 🌟!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*◜🌺 ОФИЦИАЛЬНЫЕ ГРУППЫ 🌺◞*'}
const smsGrupoOfc2 = () => { return '*◜🌸 СОТРУДНИЧЕСТВО 🌸◞*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ВХОДИТ В ЭТИ ГРУППЫ:*_'}
const smsLisB = () => { return '*⭔ Всего групп:*'}
const smsLisC = () => { return '*⋄ Группа:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Участников:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ А О Й О'}
const smsEstado1 = () => { return 'ГОСУДАРСТВО'}
const smsEstado2 = () => { return 'Версия'}
const smsEstado3 = () => { return 'Пользователей'}
const smsEstado4 = () => { return 'Зарегистрированный'}
const smsEstado5 = () => { return 'Чат Запрещено(и)'}
const smsEstado6 = () => { return 'Заблокированные пользователи'}
const smsEstado7 = () => { return 'Активен во время'}

//info-ping.js
const smsVl1 = () => { return 'СКОРОСТЬ'}
const smsVl2 = () => { return 'С Е Р В И Д О Р*'}
const smsVl3 = () => { return '*🔵 Свободная оперативная память:*'}
const smsVl4 = () => { return '*💻 Платформа :*'}
const smsVl5 = () => { return '*📡 Место :*'}
const smsVl6 = () => { return '*Использование памяти NodeJS*'}

//info-infobot.js
const smsBT1 = () => { return 'СОЗДАТЕЛЬ'}
const smsBT2 = () => { return 'ВЕРСИЯ'}
const smsBT3 = () => { return 'ПРИСТАВКА'}
const smsBT4 = () => { return 'ПРИВАТНЫЕ ЧАТЫ'}
const smsBT5 = () => { return 'ГРУППОВЫЕ ЧАТЫ'}
const smsBT6 = () => { return 'ЧАТОВ ВСЕГО'}
const smsBT7 = () => { return 'АКТИВНОСТЬ'}
const smsBT8 = () => { return 'ПОЛЬЗОВАТЕЛЕЙ'}
const smsBT9 = () => { return 'АКТИВНЫЕ САББОТЫ'}
const smsCreInfo = () => { return '🌟 И Н Ф О Р М А Ц И Я '}

//info-contacto.js
const smsContacto1 = () => { return ' Я ' + packname + ' WhatsApp Bot, предназначенный для помощи во всем, о чем вы меня попросите 😎'}
const smsContacto2 = () => { return 'Я являюсь владельцем ' + packname + ' Если у вас есть вопросы, вы можете мне рассказать ✌️'}
const smsContacto3 = () => { return '👑 Владелец'}
const smsContacto4 = () => { return 'Официальный контакт InfiniX 🤖'}
const smsContacto5 = () => { return '🐣 Могу ли я вам чем-нибудь помочь?'}
const smsContacto6 = () => { return 'У меня нет почты 🙏'}
const smsContacto7 = () => { return '🌎 Глобальный'}
const smsContacto8 = () => { return 'Этот аккаунт является ботом 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *ИСПОЛЬЗУЙТЕ КОМАНДУ СЛЕДУЮЩИМ ОБРАЗОМ:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ОТВЕТЬТЕ НА СООБЩЕНИЕ С ПОМОЩЬЮ КОМАНДЫ ИЛИ ВОСПОЛЬЗУЙТЕСЬ ЭТИМ ПРИМЕРОМ:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ВОЗНИКЛА ПРОБЛЕМА.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ЧТО-ТО ПОШЛО НЕ ТАК, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ С ПОМОЩЬЮ:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'ТИТУЛ'}
const smsYT2 = () => { return 'ОПИСАНИЕ'}
const smsYT3 = () => { return 'ДЛИТЕЛЬНОСТЬ'}
const smsYT4 = () => { return 'ПРЕДСТАВЛЕНИЯ'}
const smsYT5 = () => { return 'СМОТРЕТЬ НА YOUTUBE'}
const smsYT6 = () => { return 'ПОПРОБУЙТЕ ДРУГОЕ ИМЯ'}

//descargas.js
const smsYTA1 = () => { return 'СКАЧИВАНИЕ АУДИО... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsYTV1 = () => { return 'СКАЧИВАНИЕ ВИДЕО... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsYTA2 = () => { return 'СКАЧИВАНИЕ АУДИОДОКУМЕНТА... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsYTV2 = () => { return 'СКАЧИВАНИЕ ВИДЕО ДОКУМЕНТА... ПОДОЖДИ МИНУТКУ'}

//descargas.js
const smsTiktok = () => { return 'СКОРО У ВАС БУДЕТ ВИДЕО В TIKTOK'}

//descargas.js
const smsGit = () => { return '*ОТПРАВКА ФАЙЛОВ, МОМЕНТ 🚀 *\n*ЕСЛИ ФАЙЛЫ НЕ ПРИХОДЯТ, ЭТО ПОТОМУ, ЧТО РЕПОЗИТОРИЙ ПЕРЕГРУЖЕН*'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`ЗАПРЕЩЕНО СКРЫВАТЬ ВИДЕО\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`ЗАПРЕЩЕНО СКРЫВАТЬ ИЗОБРАЖЕНИЕ\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*СДЕЛАТЬ ЗАПРОС, ПРИМЕР:*'} 
const smsOpenai2 = () => { return 'Порекомендуйте топ-10 боевиков'} 
const smsOpenai3 = () => { return 'Объясните, что это уравнение третьей степени, и приведите простой пример и составной пример'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТИТЬ НА СТИКЕР ДЛЯ ПРЕОБРАЗОВАНИЯ В ИЗОБРАЖЕНИЕ*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ ДЛЯ ПРЕОБРАЗОВАНИЯ В ССЫЛКУ*'} 
const smsConURL1 = () => { return '🔗 *ССЫЛКА*'} 
const smsConURL2 = () => { return '⚖️ *РАЗМЕР*'} 
const smsConURL3 = () => { return '♻️ *СРОК*'} 
const smsConURL4 = () => { return '🪄 *СОКРАЩЕННАЯ ССЫЛКА*'}
const smsConURLERR1 = () => { return 'Бесконечный'} 
const smsConURLERR2 = () => { return 'Незнакомец'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*РЕАГИРУЙТЕ НА ДВИЖУЩИЙСЯ СТИКЕР ДЛЯ КОНВЕРТАЦИИ В ВИДЕО*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*ТОЛЬКО ДВИЖУЩИЙСЯ СТИКЕР ДЛЯ ПРЕОБРАЗОВАНИЯ В ВИДЕО*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ ВОТ ВАШЕ ВИДЕО!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТ НА ВИДЕО ДЛЯ ПРЕОБРАЗОВАНИЯ В GIF СО ЗВУКОМ*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА ВИДЕО. ИСПОЛЬЗУЕТСЯ НЕПРАВИЛЬНЫЙ ТИП ФАЙЛА* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF С АУДИО (Откройте GIF, чтобы прослушать аудио)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТ НА ВИДЕО ИЛИ АУДИО ДЛЯ ПРЕОБРАЗОВАНИЯ В ГОЛОСОВУЮ ЗАМЕТКУ*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ЧТО-ТО НЕ ТАК С ВИДЕО, ПОПРОБУЙТЕ ЕЩЕ РАЗ*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*ЧТО-ТО НЕ ТАК СО ЗВУКОМ, ПОПРОБУЙТЕ ЕЩЕ РАЗ*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*ЧТО-ТО ПОШЛО НЕ ТАК ПРИ ПОПЫТКЕ ПРЕОБРАЗОВАТЬ АУДИО В ГОЛОСОВУЮ ЗАМЕТКУ*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*ЧТО-ТО ПОШЛО НЕ ТАК ПРИ ПОПЫТКЕ ПРЕОБРАЗОВАТЬ ВИДЕО В ГОЛОСОВУЮ ЗАМЕТКУ*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*ОТВЕТЬТЕ НА ТЕКСТОВОЕ СООБЩЕНИЕ ИЛИ ВВЕДИТЕ КОД И ТЕКСТ ДЛЯ ПРЕОБРАЗОВАНИЯ В АУДИО, НАПРИМЕР:*\n'}
const smsTradc2 = () => { return ' (Код) (СМС)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Этот текст будет аудио\n\n'}
const smsTradc4 = () => { return '*ВЫ МОЖЕТЕ ПОЛУЧИТЬ КОД ДЛЯ ПОДДЕРЖИВАЕМЫХ ЯЗЫКОВ В:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Пожалуйста, подождите секунду...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_БОЛЕЕ 150 МГ НЕ МОГУТ БЫТЬ ОТПРАВЛЕНЫ_*'}
const smsImageGg = () => { return '*💞 РЕЗУЛЬТАТ:*'}

//grupos.js
const smsGI1 = () => { return '*ИНФОРМАЦИЯ О ГРУППЕ*'}
const smsGI2 = () => { return '*ИДЕНТИФИКАТОР ГРУППЫ*'}
const smsGI3 = () => { return '*НАЗВАНИЕ ГРУППЫ*'}
const smsGI4 = () => { return '*ОПИСАНИЕ ГРУППЫ*'}
const smsGI5 = () => { return '*НЕТ ОПИСАНИЯ*'}
const smsGI6 = () => { return '*КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ*'}
const smsGI7 = () => { return '*Пользователей*'}
const smsGI8 = () => { return '*СОЗДАТЕЛЬ ГРУПП*'}
const smsGI9 = () => { return '*АДМИНИСТРАТОРЫ ГРУПП*'}

//grupos.js
const smsAddB3 = () => { return `*УВЕДОМЛЕНИЕ АДМИНИСТРАТОРА*`}
const smsAddB4 = () => { return `*НАЛИЧИЕ АДМИНОВ*`}
const smsAddB5 = () => { return `*СООБЩЕНИЕ:*`}
const smsAddB6 = () => { return `Я прошу админов пожалуйста.`}

//grupos-admins.js
const smsDemott = () => { return '*НОМЕР НЕДЕЙСТВИТЕЛЕН, ПОЖАЛУЙСТА, ПОПРОБУЙТЕ ЕЩЕ РАЗ ОТВЕТИТЬ НА ЧЬЕ-ТО СООБЩЕНИЕ ИЛИ ИСПОЛЬЗУЙТЕ КАК В ЭТОМ ПРИМЕРЕ:*\n'}
const smsDemott2 = () => { return '*ТЕПЕРЬ У НЕГО ВЛАСТЬ В ГРУППЕ!!*'}
const smsDemott3 = () => { return '*ОН БОЛЬШЕ НЕ ИМЕЕТ ВЛАСТИ В ГРУППЕ!!*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*ПРИВЕТСТВИЕ ГРУППЫ БЫЛО ОРГАНИЗОВАНО*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_ОПЦИОНАЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ЕСТЬ С "@" ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание о пользователе)*\n*⚡ @subject (Название группы)*\n*⚡ @desc (Описание группы)*\n\n*ПОМНИТЕ, ЧТО "@" НЕОБЯЗАТЕЛЬНЫЙ*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*ПРОЩАНИЕ С ГРУППОЙ ОРГАНИЗОВАНО*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРОЩАЛЬНОЕ ПОСЛАНИЕ_*\n*_ОПЦИОНАЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ЕСТЬ С "@" ЧТОБЫ ДОБАВИТЬ БОЛЬШЕ ИНФОРМАЦИИ:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*ОПИСАНИЕ ГРУППЫ ЗАДАНО*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*ИМЯ ГРУППЫ ЗАДАНО*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ВВЕДИТЕ ИМЯ НОВОЙ ГРУППЫ*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*НАЗВАНИЕ ГРУППЫ ДОЛЖНО БЫТЬ НЕ БОЛЕЕ 25 СИМВОЛОВ*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ, ЧТОБЫ ИЗМЕНИТЬ ГРУППОВОЕ ФОТО*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 ИЗОБРАЖЕНИЕ ГРУППЫ БЫЛО ОБНОВЛЕНО!!*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*СВЯЗЬ С ГРУППАМИ БЫЛА ВОССТАНОВЛЕНА*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ОТМЕТЬТЕ ПОЛЬЗОВАТЕЛЯ ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ОТ ПОЛЬЗОВАТЕЛЯ, КОТОРОГО ВЫ ХОТИТЕ УДАЛИТЬ*\n\n*ПРИМЕР: `}
const smskick2 = () => { return `УСТРАНЕНЫ 😼`}
const smskick3 = () => { return `Я НЕ МОГУ УДАЛИТЬ АВТОРА ИЗ ГРУППЫ 😆🫵`}
const smskick4 = () => { return `НЕ ВХОДИТ В ЭТУ ГРУППУ 👻`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*Писать теперь может каждый!!*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*ЗАКРЫТАЯ ГРУППА, ПИСАТЬ МОГУТ ТОЛЬКО АДМИНЫ!!*`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ ПРИЗЫВ ГРУППЫ ⚡`}

//grupos.js
const smsInsGC1 = () => { return `*ИДЕНТИФИКАТОР*`}
const smsInsGC2 = () => { return `*ИМЯ*`}
const smsInsGC3 = () => { return `*СОЗДАННЫЙ*`}
const smsInsGC4 = () => { return `*ГЛАВНЫЙ АДМИНИСТРАТОР*`}
const smsInsGC5 = () => { return `*ОПИСАНИЕ*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ ОТПРАВКА РЕЗЕРВНОЙ КОПИИ В ПРИВАТ...*_`}
const smsResP2 = (date) => { return `*🗓️ База данных:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ОТМЕТЬТЕ КОГО-ТО ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ ВВЕДИТЕ НОМЕР, КОТОРЫЙ ВЫ ХОТИТЕ ЗАПРЕТИТЬ В КОМАНДАХ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} НЕ МОЖЕТ БЫТЬ ЗАБАНЕН ЭТОЙ КОМАНДОЙ* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *Я НЕ МОГУ ЗАБАНИТЬ ВЛАДЕЛЬЦА @${ownerNumber} ИЗ ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*НЕ НУЖНО ПОВТОРНО БАНИТЬ @${number} ЕСЛИ ЭТО УЖЕ* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*ПОЛЬЗОВАТЕЛЬ УСПЕШНО ЗАБАНЕН* 🙀`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ВЫ ЗАБЛОКИРОВАНЫ @${usr} ВЫ НЕ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА КТО-ТО НЕ ОТМЕНИТ БЛОКИРОВКУ* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ВОЗНИКЛА ОШИБКА, ВОЗМОЖНО, ПОЛЬЗОВАТЕЛЬ НЕ НАХОДИТСЯ В МОЕЙ БАЗЕ ДАННЫХ ПРИ ПОПЫТКЕ ЗАПИСИ ${usedPrefix + command} ${number}*\n\`\`\`ЕСЛИ ОШИБКА НЕ УСТРАНЕНА, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ОТМЕТЬТЕ КОГО-ТО ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ ВВЕДИТЕ НОМЕР, КОТОРЫЙ ВЫ ХОТИТЕ РАЗБЛОКИРОВАТЬ ИЗ КОМАНД*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*НЕТ НЕОБХОДИМОСТИ В ПОВТОРНОЙ ДЕБАНЕ @${number} ЕСЛИ ЭТО УЖЕ* 😊`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*ПОЛЬЗОВАТЕЛЬ УСПЕШНО РАЗБЛОКИРОВАН* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} ВАС РАЗБАНИЛ @${usr} ТЕПЕРЬ ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ!!* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*ВОЗНИКЛА ОШИБКА, ВОЗМОЖНО, ПОЛЬЗОВАТЕЛЬ НЕ НАХОДИТСЯ В МОЕЙ БАЗЕ ДАННЫХ ПРИ ПОПЫТКЕ ЗАПИСИ ${usedPrefix + command} ${number}*\n\`\`\`ЕСЛИ ОШИБКА НЕ УСТРАНЕНА, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*ВЫ УЖЕ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ 😳🌹*'}
const smsAutoAdmin2 = () => { return '*Я НЕ СМОГ СДЕЛАТЬ ЕГО АДМИНОМ 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *ДАННЫЙ ЧАТ НЕ ЗАРЕГИСТРИРОВАН В БАЗЕ ДАННЫХ*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *ЭТОТ ЧАТ НЕ ЗАБАНЕН!!*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *ЭТОТ ЧАТ БЫЛ РАЗБАНЕН, ТЕПЕРЬ ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ!!*'}

//propietario(a).js
const smsBioEd1 = () => { return `*ВВЕДИТЕ ТЕКСТ, КОТОРЫЙ ДОЛЖЕН ОТОБРАЖАТЬСЯ В БИОГРАФИИ* ${packname}`}
const smsBioEd2 = () => { return `*БИОГРАФИЯ ОЧЕНЬ ДЛИННАЯ, ОБОБЩИТЕ ПОЖАЛУЙСТА ИНФОРМАЦИЮ*`}
const smsBioEd3 = () => { return '✅ ```ИНФОРМАЦИЯ О БОТЕ УСПЕШНО ИЗМЕНЕНА```'}

//propietario(a).js
const smsNameEd1 = () => { return `*ВВЕДИТЕ ТЕКСТ, В КОТОРОМ ВЫ ХОТИТЕ ОТОБРАЖАТЬ ИМЯ ПОЛЬЗОВАТЕЛЯ* ${packname}`}
const smsNameEd2 = () => { return `*НАЗВАНИЕ ОЧЕНЬ ДЛИННОЕ, ОБОБЩИТЕ ПОЖАЛУЙСТА ИНФОРМАЦИЮ*`}
const smsNameEd3 = () => { return '✅ ```ИМЯ ПОЛЬЗОВАТЕЛЯ БОТА УСПЕШНО ИЗМЕНЕНО```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*ОТВЕТЬТЕ НА ИЗОБРАЖЕНИЕ С ПОМОЩЬЮ КНОПКИ ${usedPrefix + command} ОБНОВЛЕНИЕ ИЗОБРАЖЕНИЯ ПРОФИЛЯ БОТА*`}
const smsFotoEd2 = () => { return '✅ ```АВАТАРКА БОТА УСПЕШНО ИЗМЕНЕНА```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА ИЗОБРАЖЕНИЕ С ПОМОЩЬЮ КОМАНДЫ ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *ЭТОТ ЧАТ БЫЛ ЗАБАНЕН, ОНИ НЕ СМОГУТ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА ЧАТ НЕ БУДЕТ РАЗБАНЕН*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*НЕ МОГУ ${comd} ВЛАДЕЛЬЦУ @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*ИМЕЕТ ${comd} A ${useB} УСПЕШНО*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*ОТМЕТЬТЕ ПОЛЬЗОВАТЕЛЯ, ВВЕДИТЕ ЕГО НОМЕР ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ, ЧТОБЫ СБРОСИТЬ ДАННЫЕ*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*ВВЕДЕННЫЙ ВАМИ НОМЕР НЕДЕЙСТВИТЕЛЕН ДЛЯ СБРОСА ДАННЫХ*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*СБРОС ДО @${number} БАЗА ДАННЫХ*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n*ПРИМЕР:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*ПРИСОЕДИНИЛСЯ К ГРУППЕ ✅*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*НАПИСАТЬ ОТЧЕТ*\n*ПРИМЕР:*\n\n*${usedPrefix + command}* _Команда ${usedPrefix}Игра не работает._`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `🤖 *МИНИМУМ 10 СИМВОЛОВ ДЛЯ СОСТАВЛЕНИЯ ОТЧЕТА*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `🤖 *МАКСИМУМ 1000 СИМВОЛОВ ДЛЯ СОСТАВЛЕНИЯ ОТЧЕТА*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`СЧЕТ\`\`\` 💌
*⎔ Число:*
*» Wa.me/${urs}*

*⎔ Пользователь:*
*» @${urs}*

*⎔ Сообщение:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*ОТЧЕТ ОТПРАВЛЕН РАЗРАБОТЧИКАМ, ПРИ НЕОБХОДИМОСТИ У ВАС БУДЕТ ОТВЕТ*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*ВВЕДИТЕ ИМЯ ПОЛЬЗОВАТЕЛЯ GITHUB*\n*ПРИМЕР*\n\n*${usedPrefix + command}* InfiniX`}
const smsGit2 = () => { return '*Б У С К А Н Д О... 🔎*'}
const smsGit3 = () => { return '🌻 *ИМЯ ПОЛЬЗОВАТЕЛЯ*'}
const smsGit4 = () => { return '🌼 *БИО*'}
const smsGit5 = () => { return '🌸 *КОМПАНИЯ*'}
const smsGit6 = () => { return '🌺 *ПОЧТА*'}
const smsGit7 = () => { return '🪷 *БЛОГИ*'}
const smsGit8 = () => { return '🌹 *ПУБЛИЧНЫЕ РЕПОЗИТОРИИ*'}
const smsGit9 = () => { return '🌷 *ПРЕДМЕТЫ ПЕРВОЙ НЕОБХОДИМОСТИ ДЛЯ ОБЩЕСТВЕННОСТИ*'}
const smsGit10 = () => { return '🪸 *ПОСЛЕДОВАТЕЛЕЙ*'}
const smsGit11 = () => { return '🍁 *СЛЕДУЮЩИЙ*'}
const smsGit12 = () => { return '☘️ *МЕСТОПОЛОЖЕНИЕ*'}
const smsGit13 = () => { return '🌱 *ПАРЕНЬ*'}
const smsGit14 = () => { return 'Не найдено'}

//jadibot-serbot.js
const smsIniJadi = () => { return `⟣⊹⊹⊹✦ *САБ-БОT - QR* ✦⊹⊹⊹⟢

✦ ${global.packname} 𝄢» \`\`\`${global.vs}\`\`\`
✦ *Версия JadiBot* 𝄢» \`\`\`${global.vsJB}\`\`\`

1. На устройстве, которое будет ботом, откройте WhatsApp.
2. Нажмите на три точки в правом верхнем углу.
3. Выбирать *"Связанные устройства"*.
4. Отсканируйте этот QR-код. _Истекает через 30 секунд!_

> ✨ Ваша конфиденциальность важна для нас. *Пожалуйста, уделите немного времени, чтобы ознакомиться с нашей Политикой конфиденциальности.*
${global.policyGB}
`}
const smsIniJadi2 = () => { return `⟣⊹⊹⊹✦ *СУБ-БОТ - КОД* ✦⊹⊹⊹⟢

✦ ${global.packname} 𝄢» \`\`\`${global.vs}\`\`\`
✦ *Версия JadiBot* 𝄢» \`\`\`${global.vsJB}\`\`\`

1. На устройстве, которое будет ботом, откройте WhatsApp.
2. Нажмите на три точки в правом верхнем углу.
3. Выбирать *"Связанные устройства"* позже *"Ссылка на номер телефона"*.
4. Скопируйте и вставьте следующий код. _Срок действия истекает через 30 секунд!_

> ✨ Ваша конфиденциальность важна для нас. *Пожалуйста, уделите немного времени, чтобы ознакомиться с нашей Политикой конфиденциальности.*
${global.policyGB}
`}
const smsreenvia = () => { return `*🟢 ПЕРЕСЛАТЬ КОМАНДУ...*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ЭТА КОМАНДА ОТКЛЮЧЕНА МОИМ ВЛАДЕЛЬЦЕМ*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *ЧТОБЫ СТАТЬ САББОТОМ, ПЕРЕЙДИТЕ К ОСНОВНОМУ НОМЕРУ*\n*ღ Нажмите на следующую ссылку:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *СВЯЗЬ НЕОЖИДАННО ОБОРВАЛАСЬ, ПОПРОБУЕМ ПОДКЛЮЧИТЬСЯ ЗАНОВО...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *СОЕДИНЕНИЕ БЫЛО ЗАКРЫТО, ВАМ НУЖНО БУДЕТ ПОДКЛЮЧИТЬСЯ ВРУЧНУЮ С ПОМОЩЬЮ КОМАНДЫ #serbot И ПОВТОРНО ОТСКАНИРОВАТЬ НОВЫЙ QR-КОД${lenguajeGB['smsJBConexionTrue3']()}* *ЭТО БЫЛО ОТПРАВЛЕНО, КОГДА ОН ВПЕРВЫЕ СТАЛ САББОТОМ*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *ВАШЕ УСТРОЙСТВО ОТКЛЮЧЕНО*\n\n*ВАМ ПОТРЕБУЕТСЯ ПОВТОРНО ПОДКЛЮЧИТЬСЯ, ЧТОБЫ ИСПОЛЬЗОВАТЬ:\n#deletesesion (Чтобы удалить данные и иметь возможность вернуться к QR или коду)`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *УСПЕШНОЕ СОЕДИНЕНИЕ!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *УДАЧНОЕ СОЕДИНЕНИЕ!! ВЫ МОЖЕТЕ ПОДКЛЮЧИТЬСЯ С ПОМОЩЬЮ:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ВЫ НА СВЯЗИ!! ПОЖАЛУЙСТА, ПОДОЖДИТЕ, СООБЩЕНИЯ ЗАГРУЖАЮТСЯ...*\n\n♻️ *ДОСТУПНЫЕ ВАРИАНТЫ:*\n*» ${usedPrefix}pausarsb _(Остановка функции саббота)_*\n*» ${usedPrefix}eliminarsesion _(Стереть все следы Sub Bot)_*\n*» ${usedPrefix}serbot _(Новый QR-код или Connect, если вы уже являетесь Sub Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ ДЛЯ ОСНОВНОГО БОТА*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*Я БУДУ СКУЧАТЬ ПО ТЕБЕ ${global.packname} ЧАОО!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ И УДАЛИЛИ ВСЕ СЛЕДЫ*`}
const smsFoldErr = (usedPrefix, comd) => { return `*У ВАС НЕТ СЕАНСА, ВЫ МОЖЕТЕ СОЗДАТЬ ЕГО С ПОМОЩЬЮ:*\n*${usedPrefix}${comd}*\n\n*ЕСЛИ У ВАС ЕСТЬ ИДЕНТИФИКАТОР (ID), ВЫ МОЖЕТЕ ПРОПУСТИТЬ ПРЕДЫДУЩИЙ ШАГ С ПОМОЩЬЮ:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*ЕСЛИ ВЫ НЕ ЯВЛЯЕТЕСЬ САББОТОМ, ПОЖАЛУЙСТА, СВЯЖИТЕСЬ С ОСНОВНЫМ НОМЕРОМ, ЧТОБЫ СТАТЬ САББОТОМ*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*ВЫХОД ИЗ СИСТЕМЫ/ПАУЗА.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *СПИСОК СУББОТОВ*\n\n🌟 _ВЫ МОЖЕТЕ ЗАПРОСИТЬ РАЗРЕШЕНИЕ, ЧТОБЫ ВАМ РАЗРЕШИЛИ ПРИСОЕДИНИТЬСЯ К БОТУ В ВАШЕЙ ГРУППЕ_\n\n\`\`\`КАЖДЫЙ ПОЛЬЗОВАТЕЛЬ САББОТА ИСПОЛЬЗУЕТ ФУНКЦИЮ КАК ЕМУ УДОБНО, ОСНОВНОЙ НОМЕР НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ИСПОЛЬЗОВАНИЕ ФУНКЦИИ \`\`\`\n\nПОДКЛЮЧЕННЫЙ СУББОТ:`}
const smsJBCom4 = () => { return "*СУББОТОВ НЕТ. ПРОВЕРИТЬ ПОЗЖЕ.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 РАБОТА С САББОТАМИ 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*УСПЕШНОЕ РАСПРОСТРАНЕНИЕ ДЛЯ ${numUser} САББОТЫ*\n\n${difuUser}\n\n*ОТГРУЗКА ЗАВЕРШЕНА В ${tolUser} СЕГУНДОС*`}

//propietario(a).js
const smsChatGP1 = () => { return "*ОТПРАВЛЯЯ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*"}
const smsChatGP2 = (readMS, день, месяц, год, дата, время) => { return `✅ *ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО НА ${totalGP} ГРУППА(Ы)*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*ПОЖАЛУЙСТА, ВВЕДИТЕ ИМЯ ФАЙЛА ИЛИ КОМАНДУ ДЛЯ ОТПРАВКИ КОДА*\n*ПРИМЕР*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} меню*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`КОД ФАЙЛА ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*КОД ДЛЯ '${text}' НЕ БЫЛ НАЙДЕН*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`КОД ФАЙЛА ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `НЕ УДАЛОСЬ ОТПРАВИТЬ ФАЙЛ '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `ПРОИЗОШЛА ОШИБКА ПРИ ОТПРАВКЕ ФАЙЛА '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 ПРИСОЕДИНИЛСЯ К ГРУППЕ_\n\n🫶 *БЫЛ ДОБАВЛЕН: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *ВЫХОДИТЕ ИЗ ГРУППЫ, БЫЛО ЗДОРОВО БЫТЬ ЗДЕСЬ 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *Е Р Ф И Л* 🌸`}
const smsPerfil1 = () => { return `ПОЛЬЗОВАТЕЛЬ`}
const smsPerfil2 = () => { return `ЧИСЛО`}
const smsPerfil3 = () => { return `ВОЗРАСТ`}
const smsPerfil4 = () => { return `ЧИСЛО`}
const smsPerfil5 = () => { return `РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*ВЫ УЖЕ ЗАРЕГИСТРИРОВАНЫ!!*\n*ЕСЛИ ВЫ ХОТИТЕ ОТМЕНИТЬ РЕГИСТРАЦИЮ, ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ*\n*${usedPrefix}Серийный номер UNREG*\n\n*ЕСЛИ ВЫ НЕ ПОМНИТЕ СВОЙ СЕРИЙНЫЙ НОМЕР, ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*ВВЕДИТЕ СВОЕ ИМЯ И ВОЗРАСТ ДЛЯ РЕГИСТРАЦИИ*\n*ПРИМЕР*\n\n${usedPrefix + command} InfiniX.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВВЕДИТЕ СВОЕ ИМЯ*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВВЕДИТЕ СВОЙ ВОЗРАСТ*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВЫ ОЧЕНЬ СТАРЫ*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВЫ ОЧЕНЬ НЕЗНАЧИТЕЛЬНЫ*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*ВВЕДИТЕ БОЛЕЕ КОРОТКОЕ ИМЯ*`}
const smsVerify7 = () => { return `✅ *В Е Р Е Ф И К А Ц И Я* ✅`}
const smsVerify8 = (usedPrefix) => { return `*ВАШ РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР БУДЕТ ПОЛЕЗЕН В СЛУЧАЕ, ЕСЛИ ВЫ ЗАХОТИТЕ ИЗМЕНИТЬ ИЛИ УДАЛИТЬ СВОЮ РЕГИСТРАЦИЮ С ПОМОЩЬЮ ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `ПРОВЕРОЧНЫЙ БЕЙДЖ`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*ОТВЕТЬТЕ НА ВИДЕО, ИЗОБРАЖЕНИЕ ИЛИ НАПИШИТЕ ${usedPrefix + command} РЯДОМ СО ССЫЛКОЙ, ЗАКАНЧИВАЮЩЕЙСЯ НА .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*ВИДЕО НЕ ДОЛЖНО БЫТЬ ДЛИННЕЕ 10 СЕКУНД*`}
const smsSticker3 = (usedPrefix, command) => { return `*ССЫЛКА НЕДЕЙСТВИТЕЛЬНА, ОНА ДОЛЖНА ЗАКАНЧИВАТЬСЯ НА .jpg .jpeg .gif .png ПРИМЕР:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*INGRESE SU ID DE REGISTRO. SI NO SABE CUAL ES USE EL COMANDO ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*SU ID DE REGISTRO NO ES CORRECTO. USE EL COMANDO ${usedPrefix}${idreg} PARA OBTENER SU ID*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*USTED ANULÓ SU REGISTRO DE* ${packname}\n\n*PUEDE USAR ${usedPrefix}${regbot} PARA REALIZAR UN NUEVO REGISTRO*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *РЕГИСТРАЦИОННЫЙ ИДЕНТИФИКАТОР* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *СООБЩЕНИЕ ОТПРАВЛЕНО:*`}
const smsBCbot2 = () => { return `ЧАСТНЫЙ`}
const smsBCbot3 = () => { return `ГРУППА`}
const smsBCbot4 = () => { return `ИТОГ`}
const smsBCbot5 = () => { return `ОБЩЕЕ ВРЕМЯ ДОСТАВКИ:`}
const smsBCbot6 = () => { return `ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ПРИВАТНЫЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ НАСЫЩЕНИЯ`}
const smsBCbot7 = () => { return `✅ *ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*ОТВЕТЬТЕ НА СООБЩЕНИЕ ИЛИ ВВЕДИТЕ СООБЩЕНИЕ С ПОМОЩЬЮ ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*ОТПРАВЛЯЯ ОФИЦИАЛЬНОЕ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО НА ${totalPri} ЧАТ(Ы) ЧАСТНЫЕ(Ы)*\n\n*ОБЩЕЕ ВРЕМЯ ДОСТАВКИ: ${time}*\n${totalPri >= 500000 ? '\n*ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ НАСЫЩЕНИЯ*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `${lenguajeGB['smsAvisoEG']()}\`\`\`✨ ПЕРЕЗАГРУЗКИ ✨\`\`\`\n${wait}`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *КОНФИГУРАЦИЯ* ⚙️\n\n> *Значение эмодзи:*\n✅ ❱❱ Включить\n❌ ❱❱ Выключить\n⚠️ ❱❱ Доступно только в группах/сообществах`}
const smsConfi2bot = () => { return `КОМАНДА`}
const smsConfi3bot = () => { return `СТАТУС`}
const smsConfi4bot = () => { return `ДЛЯ`}
const smsConfi5bot = () => { return `ВКЛЮЧЕН`}
const smsConfi6bot = () => { return `ВЫКЛЮЧЕН`}
const smsConfi7bot = () => { return `ЭТОТ ЧАТ`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*КАК АДМИНИСТРАТОР НЕ БУДЕТ УДАЛЕН*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*ОБНАРУЖЕНА ССЫЛКА НА WHATSAPP!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsWaMismoEnlace = () => { return '*ЭТА ССЫЛКА ИЗ ЭТОЙ ГРУППЫ, ТОЛЬКО ПО ЭТОЙ ПРИЧИНЕ ОНА НЕ БУДЕТ УДАЛЕНА.*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*ОБНАРУЖЕНА ССЫЛКА, СОДЕРЖАЩАЯ HTTPS!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}

//_allantilink.js 
const smsTextoYT = () => { return '🤖 InfinixБот-МД'} 
const smsApagar = () => { return '❌ ВЫКЛЮЧЕНА'} 
const smsEncender = () => { return '✅ ВКЛЮЧЕНА'} 
const smsEnlaceTik = () => { return `*БЫЛА ОБНАРУЖЕНА ССЫЛКА НА TIKTOK!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsEnlaceYt = () => { return `*БЫЛА ОБНАРУЖЕНА ССЫЛКА НА YOUTUBE!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsEnlaceTel = () => { return `*ОБНАРУЖЕНА ССЫЛКА НА TELEGRAM!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsEnlaceFb = () => { return `*БЫЛА ОБНАРУЖЕНА ССЫЛКА НА FACEBOOK!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsEnlaceIg = () => { return `*БЫЛА ОБНАРУЖЕНА ССЫЛКА НА INSTAGRAM!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsEnlaceTw = () => { return `*БЫЛА ОБНАРУЖЕНА ССЫЛКА НА TWITTER!!*\n\n*ВЫ БУДЕТЕ ИСКЛЮЧЕНЫ*`}
const smsAllAdmin = () => { return `*Я ДОЛЖЕН БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ УДАЛЯТЬ ПОЛЬЗОВАТЕЛЕЙ*`}
const smsSoloOwner = () => { return `*МОЙ АРЕНДОДАТЕЛЬ ДОЛЖЕН ВКЛЮЧИТЬ ФУНКЦИЮ ОГРАНИЧЕНИЯ*`}

//config-on y off.js
const smsParaAdmins = () => { return `ДЛЯ АДМИНОВ : `}
const smsParaAdYOw = () => { return `ДЛЯ АДМИНОВ: `}
const smsParaOw = () => { return `ДЛЯ СОЗДАТЕЛЕЙ : `}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `ЭТОТ ВЫПУСК`}
const smsInt2 = () => { return `НЕ ДОПУСКАЕТСЯ В ЭТУ ГРУППУ!!`}

//handler.js
const smsCont1 = () => { return `*🥀 ОШИБКА КОМАНДЫ 🥀*`}
const smsCont2 = () => { return `*⛈️ ПЛАГИН:*`}
const smsCont3 = () => { return `*⛈️ ПОЛЬЗОВАТЕЛЬ:*`}
const smsCont4 = () => { return `*⛈️ КОМАНДА:*`}
const smsCont5 = () => { return `*⛈️ ОШИБКА:*`}
const smsCont6 = () => { return `*✨ СООБЩИТЕ ОБ ЭТОМ СООБЩЕНИИ С ПОМОЩЬЮ КОМАНДЫ #reporte ДЛЯ УСТРАНЕНИЯ НЕПОЛАДОК*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*НЕ ИМЕЕТ АЛМАЗОВ!! 💎 ВЫ МОЖЕТЕ ПЕРЕЙТИ В МАГАЗИН С ПОМОЩЬЮ КОМАНДЫ*`}
const smsCont8 = () => { return ` *ИСПОЛЬЗОВАННЫЕ АЛМАЗЫ 💎*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*НУЖЕН УРОВЕНЬ ➡️*`}
const smsCont10 = () => { return `*, ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ. ВАШ ТЕКУЩИЙ УРОВЕНЬ СОСТАВЛЯЕТ ➡️*`}
const smsCont11 = () => { return `*ОБНОВЛЕНИЕ С ПОМОЩЬЮ КОМАНДЫ*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *АНТИ ЭЛИМИНАЦИЯ* ♻️\n*@${userDelete} УДАЛЕНО СООБЩЕНИЕ!!*\n\n\`\`\`ОТПРАВКА УДАЛЕННОГО СООБЩЕНИЯ...\`\`\``}
const smsHandler = () => { return "ОБНОВЛЕНО 'handler.js' УСПЕШНО"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*ПРИВЕТ @${tagUserL} ${llamadaVideo ? 'ВИДЕОЗВОНКИ 📲' : 'ЗВОНКИ 📞'} ЭТО ЗАПРЕЩЕНО В ЭТОМ ЧАТЕ. ВЫ БУДЕТЕ ЗАБЛОКИРОВАНЫ*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*ОТВЕТ НА АУДИО- ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*ESTOS PARÁMETROS SOLO ADMITE NÚMEROS ESCRIBA ${usedPrefix + command} PARA CONOCER LOS PARÁMETROS*`}
const smsControlAudio3 = () => { return `*SURGIÓ UN ERROR INTENTÉ CAMBIAR LOS VALORES DE LOS PARÁMETROS Y RECUERDE PARA APLICAR EL FILTRO DEBE DE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsControlAudio4 = () => { return `*RESPONDA A UN AUDIO O NOTA DE VOZ PARA APLICAR EL FILTRO*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *94*
1️⃣👉 _Frecuencia central del filtro en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *-30* | MAX: *30*
⎔ Predeterminada: *25*
2️⃣👉 _Ganancias del filtro en dB_

⎔ *(Parámetro opcional)*
⎔ OPCIONES: *"q", "h", "o"*
⎔ Predeterminada: *o*
3️⃣👉 _Tipo de ancho de banda del filtro_
*q:* Relación de calidad, frecuencia más específica.
*h:* Ancho de banda constante, igualdad en todas las frecuencias.
*o:* Ancho de banda en octavas, se duplicará o reducirá a la mitad en cada octava (cada vez que la frecuencia se duplica o se divide por dos).

⎔ *(Parámetro opcional)*
⎔ MIN: *2* | MAX: *500*
⎔ Predeterminada: *5*
4️⃣👉 _Establece el ancho de banda del filtro en X valor si usa [q, h, o]_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *15*
1️⃣👉 _Frecuencia del vibrato en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
2️⃣👉 _Profundidad del vibrato, su valor final será en decimal si el valor es mayor a 95 será un entero_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *8* | MAX: *32*
⎔ Predeterminada: *16*
1️⃣👉 _Nivel de cuantización de los samples de audio en bits_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *500* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Número de veces por segundo que se muestrea el audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
3️⃣👉 _Nivel de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un decimal si es menor a 95)_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
4️⃣👉 _Cantidad de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un entero si es mayor a 95)_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *15*
⎔ Predeterminada: *4*
1️⃣👉 _Audio de entrada, debe ser ajustado a una velocidad de reproducción deseada, involucra cambio en la duración del audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Predeterminada: *48000*
2️⃣👉 _Muestreo de audio de salida en Hz, ajuste la frecuencia de muestreo deseada_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Predeterminada: *6*
1️⃣👉 _Amplificador de audio en dB, un valor negativo disminuye el sonido del audio y un valor positivo aumenta el sonido del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ EL PARÁMETRO ES OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *1.63*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *300*
⎔ Predeterminada: *1.3*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Predeterminada: *22100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *150*
⎔ Predeterminada: *1.06*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *7*
⎔ Predeterminada: *1.25*
3️⃣👉 _Ajusta la frecuencia multiplicada al valor deseado_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ SI OMITE AGREGAR EL PARÁMETRO OPCIONAL O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *32* | MAX: *16384*
⎔ Predeterminada: *512*
1️⃣👉 _Tamaño de los fragmentos de señal de audio que se procesan en cada momento_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *0.75*
2️⃣👉 _Cantidad de solapamiento que se utiliza entre ventanas consecutivas, Se divide una señal de audio en segmentos o ventanas para aplicarle cierto procesamiento_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Predeterminada: *0.7*
1️⃣👉 _Velocidad de reproducción del audio. Un valor de 1.0 es la velocidad normal, mientras que un valor mayor a 1.0 acelera la reproducción, y un valor menor a 1.0 la ralentiza._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Frecuencia de muestreo del audio, indica con qué frecuencia se toman muestras del sonido. Cuanto mayor sea la frecuencia de muestreo, mayor será la calidad del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *5*
⎔ Predeterminada: *2*
1️⃣👉 _Modo de interpolación de movimiento utilizado por el filtro._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *4*
⎔ Predeterminada: *2*
2️⃣👉 _Modo de compensación de movimiento utilizado por el filtro._

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *10*
⎔ Predeterminada: *1*
3️⃣👉 _Uso de interpolación vertical subpíxel_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *240*
⎔ Predeterminada: *120*
4️⃣👉 _Controla la tasa de fotogramas de salida del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ SI OMITE AGREGAR LOS PARÁMETROS OPCIONALES O SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Predeterminada: *0.5*
1️⃣👉 _Ajusta la velocidad de reproducción del audio sin afectar el tono._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Predeterminada: *65100*
2️⃣👉 _Ajustar la tasa de muestreo del audio, es decir, la cantidad de muestras de audio por segundo._

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕ TODOS LOS PARÁMETROS SON OBLIGATORIOS, SI SE PASA DE SUS LÍMITES, ESTOS SE AGREGARÁN AL VALOR PREDETERMINADO, RECUERDE RESPONDER AL AUDIO O NOTA DE VOZ*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Predeterminada: *0.125*
1️⃣👉 _La frecuencia de la onda pulsada en hercios (Hz)_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Predeterminada: *1*
2️⃣👉 _Ajusta la cantidad de modulación que se aplica al audio._

*»» ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ ВСЕ ПАРАМЕТРЫ ОБЯЗАТЕЛЬНЫ ДЛЯ ЗАПОЛНЕНИЯ, ЕСЛИ ВЫ ПРЕВЫСИТЕ СВОИ ЛИМИТЫ, ОНИ БУДУТ ДОБАВЛЕНЫ ПО УМОЛЧАНИЮ, НЕ ЗАБУДЬТЕ ОТВЕТИТЬ НА АУДИО ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ*`}
const smsControlAudio5 = () => { return `ПРИСВОЕННЫЕ ЗНАЧЕНИЯ:`}

//config.js
const smsConfigBot = () => { return "ОБНОВЛЕНО 'config.js' УСПЕШНО"}

//menu-menu.js
const smsMenuTotal1 = () => { return "ИНФОРМАЦИЯ О МЕНЮ"}
const smsMenuTotal2 = () => { return "СЕРБОТ"}
const smsMenuTotal3 = () => { return "ИСКАТЕЛЬ / ИИ"}
const smsMenuTotal4 = () => { return "ЗАГРУЗКИ"}
const smsMenuTotal5 = () => { return "ПРЕОБРАЗОВАТЕЛЬ"}
const smsMenuTotal6 = () => { return "ГРУППА ~ ВСЕ"}
const smsMenuTotal7 = () => { return "ГРУППА ~ АДМИНЫ"}
const smsMenuTotal8 = () => { return "РЕДАКТИРОВАНИЕ АУДИОЭФФЕКТОВ"}
const smsMenuTotal9 = () => { return "ЗВУКОВЫЕ ЭФФЕКТЫ"}
const smsMenuTotal10 = () => { return "КОНФИГУРАЦИЯ"}
const smsMenuTotal11 = () => { return "ПРОЙДИТЕ ВЕРИФИКАЦИЮ"}
const smsMenuTotal12 = () => { return "ВЛАДЕЛЕЦ"}

//Error2
const smsMensError1 = () => { return `❕ КОМАНДА ПОЖАЛОВАТЬСЯ ❕`} 
const smsMensError2 = () => { return `Следующая команда завершается ошибкой`} 

//config.js
const smsMeWait = () => { return '*⌛ ПОДОЖДИТЕ МИНУТКУ, ПОЖАЛУЙСТА...*'} 

//buscadores.js
const smsytserh1 = () => { return 'ТИТУЛ'} 
const smsytserh2 = () => { return 'СВЯЗЬ'} 
const smsytserh3 = () => { return 'ДЛИТЕЛЬНОСТЬ'} 
const smsytserh4 = () => { return 'ЗАГРУЖЕНЫ'} 
const smsytserh5 = () => { return 'ПРЕДСТАВЛЕНИЯ'} 

//descargas.js
const smsIAimage = () => { return '💻 *ИЗОБРАЖЕНИЕ СОЗДАНО С ПОМОЩЬЮ AI/DALL-E* ✨'} 
const smsIAimage2 = () => { return 'Фиолетовый кот со светло-голубым цветом, находящийся на Юпитере, освещающий космос своим шармом с минималистичным эффектом.'} 
const smsIAimage3 = () => { return '💻 *ИЗОБРАЖЕНИЕ СОЗДАНО С ПОМОЩЬЮ AI/Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Львенок, бегущий по луже, отражается в луже, фотография.'} 

//descargas.js
const smsyFBvid1 = () => { return '*ЕСЛИ ЭТО НЕДЕЙСТВИТЕЛЬНАЯ ССЫЛКА, НЕ ЗАБУДЬТЕ ИСПОЛЬЗОВАТЬ ССЫЛКУ НА ВИДЕО НА FACEBOOK*'} 
const smsyFBvid2 = () => { return 'ЗАГРУЖЕНО ГРУППОВОЕ ВИДЕО НА FACEBOOK 💚'} 
const smsyFBvid3 = () => { return 'ВИДЕО С FACEBOOK REELS ЗАГРУЖЕНО 💚'} 
const smsyFBvid4 = () => { return 'СКАЧАТЬ ВИДЕО С FACEBOOK STORIES 💚'} 
const smsyFBvid5 = () => { return 'СКАЧАТЬ ВИДЕО С ПОСТОМ В FACEBOOK 💚'} 
const smsyFBvid6 = () => { return 'ВИДЕО С FACEBOOK ЗАГРУЖЕНО 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*ПРИНИМАЮТСЯ ТОЛЬКО ЦИФРЫ, А НЕ БУКВЫ*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*ВВЕДИТЕ ПОЛНЫЙ НОМЕР ПОЛЬЗОВАТЕЛЯ, КОТОРОГО ВЫ ХОТИТЕ ПРИГЛАСИТЬ В ГРУППУ*\n*ПРИМЕР:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ Привет! *@${NumeroUser}* Есмь ${packname}, бот для WhatsApp. Приблизительно *@${user}* приглашает Вас в Группу ${groupMetadata.subject}\n\n\`\`\`Будем рады видеть Вас в группе!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*ПРИГЛАШЕНИЕ ОТПРАВЛЕНО ПРИВАТНОМУ ЛИЦУ @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ *${usedPrefix}spotifysearch* ЧТОБЫ ПОЛУЧИТЬ ССЫЛКУ НА КОНКРЕТНУЮ ПЕСНЮ_`} 
const smsSP1 = () => { return '✨ *ТИТУЛ:*'} 
const smsSP2 = () => { return '🗣️ *ХУДОЖНИК:*'} 
const smsSP3 = () => { return '🌐 *URL-адрес*:'} 
const smsSP4 = () => { return '♻️ *ССЫЛКА ДЛЯ СКАЧИВАНИЯ:*'} 
const smsSP5 = () => { return '🎶 *ОТПРАВКА ПЕСНИ...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*НИКАКИХ РЕЗУЛЬТАТОВ НАЙДЕНО НЕ БЫЛО. ПОПРОБУЙТЕ ДРУГОЕ ИМЯ ИЛИ ССЫЛКУ*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*ИЗМЕНЕНО НАЗВАНИЕ ГРУППЫ*\n\n🔰 *СЕЙЧАС ГРУППА НАЗЫВАЕТСЯ:*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*ОБРАЗ:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*ЭТО ПОЗВОЛИЛО ${m.messageStubParameters[0] == 'on' ? 'ТОЛЬКО АДМИНИСТРАТОРЫ' : 'ВСЕ'} МОЖЕТ НАСТРОИТЬ ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*ССЫЛКА НА ${groupMetadata.subject} НА ГРУППУ ВОССТАНОВЛЕНА:*\n*» ${usuario}*`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} ЭТО БЫЛО ${m.messageStubParameters[0] == 'on' ? 'ЗАКРЫЛ 🔒' : 'ОТКРЫЛ 🔓'} ОКОЛО ${usuario}*\n\n💬 *СЕЙЧАС ${m.messageStubParameters[0] == 'on' ? 'ТОЛЬКО АДМИНЫ' : 'ВСЕ'} ОНИ МОГУТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} СЕЙЧАС ОН ЯВЛЯЕТСЯ АДМИНОМ В*\n*» ${groupMetadata.subject}*\n\n✨ *ДЕЙСТВИЕ, СОВЕРШЕННОЕ:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} ПЕРЕСТАНЬТЕ БЫТЬ АДМИНИСТРАТОРОМ В*\n*» ${groupMetadata.subject}*\n\n✨ *ДЕЙСТВИЕ, СОВЕРШЕННОЕ:*\n*» ${usuario}*`} 

export default { lenguaje, smsAvisoRG, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportGB1, smsReportGB2, smsReportGB3, smsReportGB3, smsReportGB4, smsReportGB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait,
smsytserh1, smsytserh2, smsytserh3, smsytserh4, smsytserh5, smsTiktok, smsIAimage, smsIAimage2, smsIAimage3, smsIAimage4, smsyFBvid1, smsyFBvid2, smsyFBvid3,
smsyFBvid4, smsyFBvid5, smsyFBvid6, smsInvite1, smsInvite2, smsInvite3, smsInvite4, smsSP0, smsSP1, smsSP2, smsSP3, smsSP4, smsSP5, smsSP6, smsAutodetec1, smsAutodetec2,
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsIniJadi2, smsreenvia, smsJBConexionClose2, methodCode1, methodCode2, methodCode3, methodCode4, methodCode5, methodCode6, methodCode7, methodCode8, methodCode9, methodCode10, methodCode11, methodCode12, methodCode13, methodCode14, phNumber, phNumber2, phNumber3, pairingCode }
