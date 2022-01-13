import { DieHeroQuest } from './die.js';

Hooks.once("init", async function() {
    CONFIG.Dice.terms["h"] = DieHeroQuest;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if (message.isAuthor) {
        let heroDefend = 0;
        let hits = 0;
        let monsterDefend = 0;
        let szRoll = false;
        message.roll.dice.forEach(dice => {
            if (dice instanceof DieHeroQuest) {
                szRoll = true;
                dice.results.forEach(res => {
                    switch (res.result) {
                        case 5:
                            hits++;
                            break;
                        case 4:
                            hits++;
                            break;
                        case 1:
                            hits++;
                            break;
                        case 2:
                            heroDefend++;
                            break;
                        case 3:
                            monsterDefend++;
                            break;
                        case 6:
                            heroDefend++;
                            break;
                    }
                });
            }
        });

        if (szRoll) {
            ChatMessage.create({
                content: `<b>Hero Defense:</b> ${heroDefend}<br><b>Hits:</b> ${hits}<br><b>Monster Defend:</b> ${monsterDefend}`,
                whisper: message.data.whisper,
                blind: message.data.blind
            });
        }
    }
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({ id: "heroquest", name: "HeroQuest" }, true);
    dice3d.addDicePreset({
        type: "dh",
        labels: [
            'modules/hq-dice/images/skull-trans.png',
            'modules/hq-dice/images/shield-trans.png',
            'modules/hq-dice/images/monster-skull-trans.png',
            'modules/hq-dice/images/skull-trans.png',
            'modules/hq-dice/images/skull-trans.png',
            'modules/hq-dice/images/shield-trans.png'
        ],
        bumpMaps: [
            // 'modules/hq-dice/images/S1_bump.png',
            // 'modules/hq-dice/images/S2_bump.png',
            // 'modules/hq-dice/images/F1_bump.png',
            // 'modules/hq-dice/images/F2_bump.png',
            // 'modules/hq-dice/images/D1_bump.png',
            // 'modules/hq-dice/images/D1_bump.png'
        ],
        system: "heroquest"
    });
});