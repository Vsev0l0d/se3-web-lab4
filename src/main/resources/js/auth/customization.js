export default class Customization {
    constructor(isDarkTheme, numberOfRowInTable, areaColor, hitColor, missColor) {
        this.isDarkTheme = isDarkTheme
        this.numberOfRowInTable = numberOfRowInTable
        this.diagram = {
            areaColor: areaColor,
            hitColor: hitColor,
            missColor: missColor
        }
    }
}