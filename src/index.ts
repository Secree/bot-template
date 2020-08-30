import * as utils from './settings/utils'
import * as Discord from 'discord.js'
import loadThings from './settings/handler'

const client = new Discord.Client()

const main = async () => {
    await loadThings()

    utils.Events.forEach(({ name, run }) => {
        client.on(name as keyof Discord.ClientEvents, (...args) => {
            run(...args, client)
        })
    })

    client.login(utils.config.TOKEN)
}

main()