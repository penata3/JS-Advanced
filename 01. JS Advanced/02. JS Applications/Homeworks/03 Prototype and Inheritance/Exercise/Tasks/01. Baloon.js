function solve() {

    class Balloon {
        constructor(color, gasWeigth) {
            this.color = color,
                this.gasWeight = gasWeigth;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeigth, ribbonColor, ribbonLength) {
            super(color, gasWeigth);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength)
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeigth, ribbonColor, ribbonLength, text) {
            super(color, gasWeigth, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }

    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}