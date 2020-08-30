import Discord from 'discord.js'
import * as Config from './config.json'

export const config = Config
export const commands: Discord.Collection<string, Command> = new Discord.Collection()

type Category = "General" | "Moderation" // etc.

export interface Command {
    name: string
    category: Category
    desc: string
    aliases?: string[]
    cooldown: number
    usage: string 
    run(client: Discord.Client, args: string[], msg: Discord.Message): Promise<unknown>
}

export interface Event<T extends keyof Discord.ClientEvents> {
    name: T
    run(...args: [...Discord.ClientEvents[T], Discord.Client]): Promise<unknown>
}

export const Events: Array<Event<keyof Discord.ClientEvents>> = []