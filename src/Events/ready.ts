import * as utils from '../settings/utils'
import * as Discord from 'discord.js'

const event: utils.Event<'ready'> = {
    name: 'ready',
    run: async (client) => {
        console.log(`${client.user?.username} is ready.`)
    }
}

export default event