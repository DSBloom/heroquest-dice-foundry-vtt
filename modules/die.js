export class DieHeroQuest extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "h";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
            "1": '<img src="modules/hq-dice/images/skull-white.png" />',
            "2": '<img src="modules/hq-dice/images/shield-white.png" />',
            "3": '<img src="modules/hq-dice/images/monster-skull-white.png" />',
            "4": '<img src="modules/hq-dice/images/skull-white.png" />',
            "5": '<img src="modules/hq-dice/images/skull-white.png" />',
            "6": '<img src="modules/hq-dice/images/shield-white.png" />'
        }[result.result];
    }

    getResultCSS(result) {
        // const hasSuccess = result.success !== undefined;
        // const hasFailure = result.failure !== undefined;
        // const isMax = result.result === this.faces;
        // const isMin = result.result === 1;
        return [
            this.constructor.name.toLowerCase(),
            "d" + this.faces,
            result.success ? "success" : null,
            result.failure ? "failure" : null,
            result.rerolled ? "rerolled" : null,
            result.exploded ? "exploded" : null,
            result.discarded ? "discarded" : null
            //   !(hasSuccess || hasFailure) && isMin ? "min" : null,
            //   !(hasSuccess || hasFailure) && isMax ? "max" : null
        ]
    }
}