import * as utils from '../settings/utils'
import * as Discord from 'discord.js'

const event: utils.Event<'message'> = {
    name: 'message',
    run: async (msg, client) => {
        if (msg.author.bot) return;
        if (!msg.guild) return;

        const [cmd, ...args] = msg.content.slice(utils.config.PREFIX.length).split(/ +/g)

        if (!msg.content.startsWith(utils.config.PREFIX)) return;

        let command = utils.commands.get(cmd)
        if (!command) {
            command = utils.commands.filter(command => command.aliases != undefined).find(command => command.aliases!.includes(cmd))
            if (command) {
                command.run(client, args, msg)
            }
        } else {
            command.run(client, args, msg)
        }
    }
}

export default event