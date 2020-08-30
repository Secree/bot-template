import * as utils from '../../settings/utils'
import * as Discord from 'discord.js'

const Command: utils.Command = {
    name: 'test',
    category: "General",
    desc: 'simple test command',
    cooldown: 5,
    aliases: ['testt'],
    usage: `${utils.config.PREFIX}test`,
    run: async (client, args, msg) => {
        msg.reply(`This is a test command.`)
    }
}

export default Command