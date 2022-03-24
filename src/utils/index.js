export const onlyUnique = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index
    })
}

export const secondsToTime = (seconde) => {
    let hours = Math.floor(seconde / 3600)
    let minutes = Math.floor(seconde / 60) % 60
    return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`
}

export const secondsToTimeWithSeconds = (seconde) => {
    let hours = Math.floor(seconde / 3600)
    let minutes = Math.floor(seconde / 60) % 60
    let seconds = Math.floor(seconde) % 60
    return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
}
