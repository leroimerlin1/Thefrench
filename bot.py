import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext

# Remplace ces valeurs
TOKEN = '8041091140:AAGdu3oR3Ag1L_mx_MHytlX4OjfB9wwJ5jo'
MINI_APP_URL = 'https://french-cali-farmz.vercel.app'

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

async def start(update: Update, context: CallbackContext) -> None:
    user = update.effective_user
    keyboard = [
        [InlineKeyboardButton("🌱 Ouvrir The French Cali Farmz", web_app=WebAppInfo(url=MINI_APP_URL))],
        [InlineKeyboardButton("📩 Support", url="https://t.me/orderthefrenchcalifarmz26")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        f"Salut {user.first_name} ! Bienvenue chez *The French Cali Farmz* 🇫🇷\n\nClique pour ouvrir le shop premium Cali-French !",
        parse_mode='Markdown',
        reply_markup=reply_markup
    )

async def shop(update: Update, context: CallbackContext) -> None:
    keyboard = [[InlineKeyboardButton("🛒 Accéder au shop", web_app=WebAppInfo(url=MINI_APP_URL))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Prêt à farmer ? Clique ici 👇', reply_markup=reply_markup)

def main() -> None:
    application = Application.builder().token(TOKEN).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("shop", shop))

    # Optionnel : echo pour tout le reste
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, lambda u, c: u.message.reply_text('Envoie /start ou /shop ! 🌿')))

    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
