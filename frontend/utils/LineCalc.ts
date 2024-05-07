

const depthChart = [
    [4, 5, 6, 7, 8, 10],
    [7, 8, 9, 11, 13, 15],
    [9, 11, 13, 15, 19, 25],
]

const lineOutOptions = [
    '10 FT',
    '20 FT',
    '30 FT',
    '40 FT',
    '50 FT',
    '60 FT',
    '70 FT',
    '80 FT',
    '30 FT',
]

const weightOptions = [
    '1 oz',
    '1.5 oz',
    '2 oz',
    '3 oz',
    '4.5 oz',
    '6 oz',
]

const lineCalc: any = (lineOut: string, weight: string) => {
    let i = 0
    let j = 0

    for (let lineOutOpt of lineOutOptions) {
        if (lineOut === lineOutOpt)
            break
        i += 1
    }

    for (let weightOpt of weightOptions) {
        if (weight === weightOpt)
            break
        j += 1
    }

    return depthChart[i][j]
}

export {
    lineCalc
}