const zone_1 = '#FDEDF1'
const zone_2 = '#F6B9C9'
const zone_3 = '#EF84A0'
const zone_4 = '#EC6A8C'
const zone_5 = '#E84F78'
const zone_6 = '#D22555'
const zone_7 = '#6E0D25'
const deepblue = '#000033'
const bluencs = '#1d84b5'
const oxfordblue = '#001f4e'
const lightblue = '#334F76'
const irresistible = '#a64667'
const uared = '#d22555'
const uapink = '#e01A4f'
const pink = '#fbbdce'
const purplepantone = '#eddfef'
const orange = '#ff9743'
const green = '#14f5aa'
const gray = '#C4C4C4'

const variable_css = () => {
    const root_css = document.querySelector(':root')
    root_css.style.setProperty('--zone-1', zone_1)
    root_css.style.setProperty('--zone-2', zone_2)
    root_css.style.setProperty('--zone-3', zone_3)
    root_css.style.setProperty('--zone-4', zone_4)
    root_css.style.setProperty('--zone-5', zone_5)
    root_css.style.setProperty('--zone-6', zone_6)
    root_css.style.setProperty('--zone-7', zone_7)
    root_css.style.setProperty('--deep-blue', deepblue)
    root_css.style.setProperty('--blue-ncs', bluencs)
    root_css.style.setProperty('--oxford-blue', oxfordblue)
    root_css.style.setProperty('--light-blue', lightblue)
    root_css.style.setProperty('--irresistible', irresistible)
    root_css.style.setProperty('--ua-red', uared)
    root_css.style.setProperty('--ua-pink', uapink)
    root_css.style.setProperty('--pink', pink)
    root_css.style.setProperty('--purple-pantone', purplepantone)
    root_css.style.setProperty('--orange', orange)
    root_css.style.setProperty('--green', green)
    root_css.style.setProperty('--gray', gray)
}

export {
    variable_css,
    zone_1,
    zone_2,
    zone_3,
    zone_4,
    zone_5,
    zone_6,
    zone_7,
    deepblue,
    bluencs,
    oxfordblue,
    lightblue,
    irresistible,
    uared,
    uapink,
    pink,
    purplepantone,
    orange,
    green,
    gray,
}
