const baseURL = 'https://raw.githubusercontent.com/wstrother/'

const projects = {
    'twitchbot': 'ahp_twitch_bot/master/readme.md',
    'streamingapp': 'streaming-app/master/README.md',
}

export const load = async ({fetch}) => {
    const readme = {}

    Object.keys(projects).forEach(async (key) => {
        const endpoint = projects[key]
        readme[key] = await fetch(baseURL + endpoint).then(res => res.text())
    })

    // const md = await fetch(URL).then(res => res.text())
    console.log(readme)
    return {
        readme
    }
}